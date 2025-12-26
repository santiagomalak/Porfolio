import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, subject, message } = body

    // Validación básica
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Todos los campos son requeridos' },
        { status: 400 }
      )
    }

    // Enviar email usando Resend
    const { data, error } = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>', // Usaremos el dominio de prueba de Resend
      to: 'santiagoaragonmalak@gmail.com', // Tu email donde recibirás los mensajes
      replyTo: email, // El email del que te contacta
      subject: `[Portfolio] ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #3d4d82;">Nuevo mensaje desde tu portfolio</h2>

          <div style="background-color: #f5f6fb; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Nombre:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Asunto:</strong> ${subject}</p>
          </div>

          <div style="background-color: white; padding: 20px; border-left: 4px solid #3d4d82; margin: 20px 0;">
            <h3 style="margin-top: 0;">Mensaje:</h3>
            <p style="white-space: pre-wrap;">${message}</p>
          </div>

          <p style="color: #666; font-size: 12px; margin-top: 30px;">
            Este mensaje fue enviado desde el formulario de contacto de tu portfolio.
          </p>
        </div>
      `,
    })

    if (error) {
      return NextResponse.json(
        { error: error.message },
        { status: 400 }
      )
    }

    return NextResponse.json(
      { success: true, messageId: data?.id },
      { status: 200 }
    )
  } catch (error: any) {
    console.error('Error sending email:', error)
    return NextResponse.json(
      { error: 'Error al enviar el mensaje. Intenta nuevamente.' },
      { status: 500 }
    )
  }
}
