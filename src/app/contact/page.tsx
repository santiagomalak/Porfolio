'use client'

import { useState } from 'react'
import { Mail, Linkedin, Github, Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react'

type FormStatus = 'idle' | 'loading' | 'success' | 'error'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [status, setStatus] = useState<FormStatus>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    setErrorMessage('')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Error al enviar el mensaje')
      }

      setStatus('success')
      setFormData({ name: '', email: '', subject: '', message: '' })

      setTimeout(() => { setStatus('idle') }, 5000)
    } catch (error: any) {
      setStatus('error')
      setErrorMessage(error.message || 'Error al enviar el mensaje. Por favor, intenta nuevamente.')
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const inputClass = "w-full px-4 py-2 border border-gray-300 dark:border-[#1e1e32] rounded-lg bg-white dark:bg-[#111120] text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:focus:ring-primary-600 transition-colors"

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">Contacto</h1>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              ¿Tienes un proyecto en mente? Conversemos sobre cómo puedo ayudarte.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">Información de Contacto</h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Mail className="h-6 w-6 text-primary-700 dark:text-primary-400 mt-1" />
                  <div>
                    <h3 className="font-medium mb-1 text-gray-900 dark:text-white">Email</h3>
                    <a
                      href="mailto:santiagoaragonmalak@gmail.com"
                      className="text-gray-600 dark:text-gray-400 hover:text-primary-700 dark:hover:text-primary-400 transition-colors"
                    >
                      santiagoaragonmalak@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Linkedin className="h-6 w-6 text-primary-700 dark:text-primary-400 mt-1" />
                  <div>
                    <h3 className="font-medium mb-1 text-gray-900 dark:text-white">LinkedIn</h3>
                    <a
                      href="https://www.linkedin.com/in/aragonmalak/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 dark:text-gray-400 hover:text-primary-700 dark:hover:text-primary-400 transition-colors"
                    >
                      linkedin.com/in/aragonmalak
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Github className="h-6 w-6 text-primary-700 dark:text-primary-400 mt-1" />
                  <div>
                    <h3 className="font-medium mb-1 text-gray-900 dark:text-white">GitHub</h3>
                    <a
                      href="https://github.com/santiagomalak"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 dark:text-gray-400 hover:text-primary-700 dark:hover:text-primary-400 transition-colors"
                    >
                      github.com/santiagomalak
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-primary-50 dark:bg-primary-900/20 rounded-lg border border-primary-200 dark:border-primary-800/50">
                <h3 className="font-semibold mb-2 text-primary-700 dark:text-primary-400">Disponibilidad</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Disponible para proyectos freelance y colaboraciones.
                  Tiempo de respuesta: 24-48 horas.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white dark:bg-[#0f0f17] p-8 rounded-lg border border-gray-200 dark:border-[#1e1e32]">
              <h2 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">Envíame un mensaje</h2>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Nombre
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className={inputClass}
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className={inputClass}
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Asunto
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className={inputClass}
                  >
                    <option value="">Selecciona un asunto</option>
                    <option value="web">Proyecto de Desarrollo Web</option>
                    <option value="datascience">Proyecto de Data Science</option>
                    <option value="both">Proyecto Combinado</option>
                    <option value="other">Otro</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Mensaje
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className={inputClass}
                  />
                </div>

                {status === 'success' && (
                  <div className="flex items-center gap-2 p-4 bg-green-50 dark:bg-green-950/30 border border-green-200 dark:border-green-800/50 rounded-lg text-green-800 dark:text-green-400">
                    <CheckCircle className="h-5 w-5 flex-shrink-0" />
                    <p className="text-sm">¡Mensaje enviado exitosamente! Te responderé pronto.</p>
                  </div>
                )}

                {status === 'error' && (
                  <div className="flex items-center gap-2 p-4 bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-800/50 rounded-lg text-red-800 dark:text-red-400">
                    <AlertCircle className="h-5 w-5 flex-shrink-0" />
                    <p className="text-sm">{errorMessage}</p>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-primary-700 dark:bg-primary-600 text-white rounded-lg hover:bg-primary-800 dark:hover:bg-primary-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === 'loading' ? (
                    <>
                      <Loader2 className="h-5 w-5 animate-spin" />
                      Enviando...
                    </>
                  ) : (
                    <>
                      <Send className="h-5 w-5" />
                      Enviar Mensaje
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
