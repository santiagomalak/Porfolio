import { NextResponse, type NextRequest } from 'next/server'
import { defaultLocale, isLocale, LOCALE_COOKIE, LOCALE_HEADER, type Locale } from '@/i18n/config'

// URL scheme (see docs/adr/0004-i18n-locale-routing.md):
//   /about      → Spanish, served from the static /es/about build (rewrite)
//   /en/about   → English, /pt/about → Portuguese (served as-is)
//   /es/about   → 308 to /about, so Spanish has exactly one public URL
//
// On an unprefixed URL, a visitor who never picked a language is redirected
// to /en or /pt when their browser prefers it. An explicit pick in the
// language switcher (cookie) always wins over the browser.

const ONE_YEAR = 60 * 60 * 24 * 365

/** Best match from Accept-Language, honoring q-values; null if none of ours. */
export function detectLocale(header: string | null): Locale | null {
  if (!header) return null
  const ranked = header
    .split(',')
    .map((part) => {
      const [tag, ...params] = part.trim().split(';')
      const q = params.find((p) => p.trim().startsWith('q='))
      return { base: tag.trim().toLowerCase().split('-')[0], q: q ? Number(q.trim().slice(2)) || 0 : 1 }
    })
    .filter((entry) => entry.q > 0)
    .sort((a, b) => b.q - a.q)
  for (const { base } of ranked) {
    if (isLocale(base)) return base
  }
  return null
}

function redirect(req: NextRequest, pathname: string, status: 307 | 308) {
  const url = req.nextUrl.clone()
  url.pathname = pathname
  const res = NextResponse.redirect(url, status)
  // These redirects depend on the visitor's cookie / Accept-Language, so no
  // shared cache may store them. This also neutralizes GHSA-3g8h-86w9-wvmq
  // (Next <15.5.16: a cached middleware redirect can be poisoned), which
  // requires the 3xx response to be cached.
  res.headers.set('Cache-Control', 'private, no-store')
  res.headers.set('Vary', 'Accept-Language, Cookie')
  return res
}

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl
  const first = pathname.split('/')[1]

  if (first === defaultLocale) {
    const rest = pathname.slice(defaultLocale.length + 1)
    return redirect(req, rest || '/', 308)
  }

  if (isLocale(first)) return NextResponse.next({ request: { headers: withLocale(req, first) } })

  const cookie = req.cookies.get(LOCALE_COOKIE)?.value
  const preferred = isLocale(cookie) ? cookie : detectLocale(req.headers.get('accept-language'))

  if (preferred && preferred !== defaultLocale) {
    const res = redirect(req, `/${preferred}${pathname === '/' ? '' : pathname}`, 307)
    if (!isLocale(cookie)) {
      // Remember the detected language so later visits skip detection.
      res.cookies.set(LOCALE_COOKIE, preferred, { path: '/', maxAge: ONE_YEAR, sameSite: 'lax' })
    }
    return res
  }

  const url = req.nextUrl.clone()
  url.pathname = `/${defaultLocale}${pathname}`
  return NextResponse.rewrite(url, { request: { headers: withLocale(req, defaultLocale) } })
}

/** Request headers plus the resolved language (read by app/not-found.tsx). */
function withLocale(req: NextRequest, lang: Locale): Headers {
  const headers = new Headers(req.headers)
  headers.set(LOCALE_HEADER, lang)
  return headers
}

export const config = {
  // Skip API routes, Next internals, the generated OG images, and anything
  // with a file extension (favicon.svg, CV pdf, sitemap.xml, robots.txt...).
  matcher: ['/((?!api|_next|_vercel|og/|.*\\..*).*)'],
}
