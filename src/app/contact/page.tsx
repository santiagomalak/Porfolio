'use client'

import { useState } from 'react'
import { Mail, Linkedin, Github, Send } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Aquí implementarás la lógica de envío (EmailJS, API, etc.)
    console.log('Form submitted:', formData)
    alert('Mensaje enviado! (Implementar lógica de envío real)')
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Contacto</h1>
            <p className="text-xl text-gray-600">
              ¿Tienes un proyecto en mente? Conversemos sobre cómo puedo ayudarte.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-semibold mb-6">Información de Contacto</h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Mail className="h-6 w-6 text-primary-700 mt-1" />
                  <div>
                    <h3 className="font-medium mb-1">Email</h3>
                    <a
                      href="mailto:santiagoaragonmalak@gmail.com"
                      className="text-gray-600 hover:text-primary-700"
                    >
                      santiagoaragonmalak@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Linkedin className="h-6 w-6 text-primary-700 mt-1" />
                  <div>
                    <h3 className="font-medium mb-1">LinkedIn</h3>
                    <a
                      href="https://www.linkedin.com/in/aragonmalak/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-primary-700"
                    >
                      linkedin.com/in/aragonmalak
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Github className="h-6 w-6 text-primary-700 mt-1" />
                  <div>
                    <h3 className="font-medium mb-1">GitHub</h3>
                    <a
                      href="https://github.com/santiagomalak"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-primary-700"
                    >
                      github.com/santiagomalak
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-primary-50 rounded-lg border border-primary-200">
                <h3 className="font-semibold mb-2 text-primary-700">Disponibilidad</h3>
                <p className="text-sm text-gray-600">
                  Disponible para proyectos freelance y colaboraciones.
                  Tiempo de respuesta: 24-48 horas.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <h2 className="text-2xl font-semibold mb-6">Envíame un mensaje</h2>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Nombre
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Asunto
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  >
                    <option value="">Selecciona un asunto</option>
                    <option value="web">Proyecto de Desarrollo Web</option>
                    <option value="datascience">Proyecto de Data Science</option>
                    <option value="both">Proyecto Combinado</option>
                    <option value="other">Otro</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Mensaje
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-primary-700 text-white rounded-lg hover:bg-primary-800 transition-colors"
                >
                  <Send className="h-5 w-5" />
                  Enviar Mensaje
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
