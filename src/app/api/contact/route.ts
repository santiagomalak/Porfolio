import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'
import { isLocale } from '@/i18n/config'

// Error responses carry a stable `code` the client translates (see the
// `contact.errors` dictionary keys); `error` stays as a human-readable fallback.
type ErrorCode = 'rate_limited' | 'too_large' | 'missing_fields' | 'invalid_email' | 'generic'

function fail(code: ErrorCode, error: string, status: number) {
  return NextResponse.json({ code, error }, { status })
}

// The form sends a key; the email to me shows a readable label.
const SUBJECT_LABELS: Record<string, string> = {
  job: 'Oportunidad laboral',
  web: 'Proyecto de Desarrollo Web',
  datascience: 'Proyecto de Data / Analytics',
  both: 'Proyecto combinado',
  other: 'Otro',
}

// Simple in-memory rate limiter: max 5 requests per IP per hour
const rateLimitMap = new Map<string, { count: number; resetAt: number }>()

function isRateLimited(ip: string): boolean {
  const now = Date.now()
  const entry = rateLimitMap.get(ip)

  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + 60 * 60 * 1000 })
    return false
  }

  if (entry.count >= 5) return true

  entry.count++
  return false
}

// Escape HTML to prevent XSS in email template
function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
}

// Strip CR/LF and control characters — defense against header injection,
// independent of (and in addition to) escapeHtml, which only guards the email body.
function stripControlChars(str: string): string {
  return str.replace(/[\r\n\x00-\x1F\x7F]/g, '')
}

// Basic email format validation
function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

// Best-effort real client IP on Vercel: x-forwarded-for is appended-to by the
// platform, so the *last* hop is the one Vercel itself set, not the first
// (client-controlled) one. Falls back to x-real-ip.
function getClientIp(request: NextRequest): string {
  const forwardedFor = request.headers.get('x-forwarded-for')
  if (forwardedFor) {
    const parts = forwardedFor.split(',').map((p) => p.trim()).filter(Boolean)
    if (parts.length > 0) return parts[parts.length - 1]
  }
  return request.headers.get('x-real-ip') ?? 'unknown'
}

const MAX_BODY_BYTES = 20_000 // generous for a contact form; blocks pathological payloads

export async function POST(request: NextRequest) {
  const resend = new Resend(process.env.RESEND_API_KEY)
  try {
    // Rate limiting by IP
    const ip = getClientIp(request)
    if (isRateLimited(ip)) {
      return fail('rate_limited', 'Too many requests', 429)
    }

    const contentLength = Number(request.headers.get('content-length') ?? 0)
    if (contentLength > MAX_BODY_BYTES) {
      return fail('too_large', 'Payload too large', 413)
    }

    const body = await request.json()
    const { name, email, subject, message, website, locale } = body

    // Honeypot: real visitors never see/fill this field (hidden via CSS in the form).
    // A bot that fills every input trips it — silently succeed without sending mail.
    if (typeof website === 'string' && website.trim() !== '') {
      return NextResponse.json({ success: true }, { status: 200 })
    }

    // Validación básica
    if (!name || !email || !subject || !message) {
      return fail('missing_fields', 'All fields are required', 400)
    }

    // Validación de formato de email
    if (!isValidEmail(email)) {
      return fail('invalid_email', 'Invalid email format', 400)
    }

    // Sanitize inputs before inserting into HTML: strip control chars first
    // (defends the email headers), then HTML-escape (defends the email body).
    const safeName = escapeHtml(stripControlChars(String(name)).slice(0, 100))
    const safeEmail = escapeHtml(stripControlChars(String(email)).slice(0, 200))
    const rawSubject = String(subject)
    const subjectLabel = SUBJECT_LABELS[rawSubject] ?? rawSubject
    const safeSubject = escapeHtml(stripControlChars(subjectLabel).slice(0, 200))
    // Whitelisted, so it's safe to interpolate without escaping.
    const visitorLocale = isLocale(locale) ? locale.toUpperCase() : 'ES'
    const safeMessage = escapeHtml(String(message).slice(0, 2000))

    const { data, error } = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: 'santiagoaragonmalak@gmail.com',
      replyTo: safeEmail,
      subject: `[Portfolio] ${safeSubject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #3d4d82;">Nuevo mensaje desde tu portfolio</h2>

          <div style="background-color: #f5f6fb; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Nombre:</strong> ${safeName}</p>
            <p><strong>Email:</strong> ${safeEmail}</p>
            <p><strong>Asunto:</strong> ${safeSubject}</p>
            <p><strong>Idioma del sitio:</strong> ${visitorLocale}</p>
          </div>

          <div style="background-color: white; padding: 20px; border-left: 4px solid #3d4d82; margin: 20px 0;">
            <h3 style="margin-top: 0;">Mensaje:</h3>
            <p style="white-space: pre-wrap;">${safeMessage}</p>
          </div>

          <p style="color: #666; font-size: 12px; margin-top: 30px;">
            Este mensaje fue enviado desde el formulario de contacto de tu portfolio.
          </p>
        </div>
      `,
    })

    if (error) {
      // Provider error details stay in the server log, not in the response.
      console.error('Resend error:', error.message)
      return fail('generic', 'Email provider error', 502)
    }

    return NextResponse.json(
      { success: true, messageId: data?.id },
      { status: 200 }
    )
  } catch (error: unknown) {
    console.error('Error sending email:', error instanceof Error ? error.message : error)
    return fail('generic', 'Internal error', 500)
  }
}
