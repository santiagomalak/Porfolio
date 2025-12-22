'use client'

import Link from 'next/link'
import { ArrowRight, Code2, Database, LineChart } from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 md:py-32">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-secondary-500">Data Scientist</span> &{' '}
            <span className="text-primary-700">Full-Stack Developer</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Combinando React, Node.js, Python y SQL para crear soluciones que impulsan
            el crecimiento mediante desarrollo web moderno y análisis de datos impactante.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/web-projects"
              className="px-8 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors flex items-center justify-center gap-2"
            >
              Ver Proyectos Web
              <ArrowRight className="h-5 w-5" />
            </Link>
            <Link
              href="/data-science"
              className="px-8 py-3 border-2 border-primary-600 text-primary-600 rounded-lg hover:bg-primary-50 transition-colors flex items-center justify-center gap-2"
            >
              Ver Data Science
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Skills Overview */}
      <section className="bg-background-alt py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-secondary-500">Áreas de Especialización</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Web Development */}
            <div className="bg-white p-8 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <Code2 className="h-8 w-8 text-primary-700" />
                <h3 className="text-2xl font-semibold">Desarrollo Web</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Creación de aplicaciones web modernas, responsivas y escalables.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• React, Next.js, TypeScript</li>
                <li>• Node.js, Python (FastAPI, Flask)</li>
                <li>• Bases de datos SQL y NoSQL</li>
                <li>• APIs RESTful y GraphQL</li>
              </ul>
            </div>

            {/* Data Science */}
            <div className="bg-white p-8 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <Database className="h-8 w-8 text-secondary-500" />
                <h3 className="text-2xl font-semibold">Data Science</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Análisis de datos, machine learning y visualización de información.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Python (Pandas, NumPy, Scikit-learn)</li>
                <li>• Machine Learning & Deep Learning</li>
                <li>• Visualización (Plotly, Matplotlib)</li>
                <li>• SQL, ETL y procesamiento de datos</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20 bg-background">
        <div className="max-w-3xl mx-auto text-center bg-gradient-to-br from-primary-50 to-primary-100 p-12 rounded-2xl border border-primary-200">
          <LineChart className="h-12 w-12 text-primary-700 mx-auto mb-4" />
          <h2 className="text-3xl font-bold mb-4 text-secondary-500">¿Tienes un proyecto en mente?</h2>
          <p className="text-gray-600 mb-6">
            Disponible para proyectos freelance y colaboraciones en desarrollo web y análisis de datos.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-3 bg-primary-700 text-white rounded-lg hover:bg-primary-800 transition-colors"
          >
            Contactar
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}
