'use client'

import Link from 'next/link'
import { ArrowRight, Code2, Database, LineChart } from 'lucide-react'
import { motion } from 'framer-motion'

// Reusable animation variants
const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1], delay },
  }),
}

const fadeIn = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
}

export default function Home() {
  return (
    <div className="min-h-screen bg-background">

      {/* ── Hero Section ── */}
      <section className="container mx-auto px-4 py-20 md:py-36">
        <div className="max-w-4xl mx-auto text-center">

          {/* Badge pill */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-50 border border-primary-200 text-primary-700 text-sm font-medium mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            Disponible para proyectos freelance
          </motion.div>

          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.08}
            className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
          >
            <span className="text-secondary-500">Data Scientist</span>{' '}
            <span className="text-gray-400 font-light">&amp;</span>{' '}
            <br className="hidden md:block" />
            <span className="text-primary-700">Full-Stack Developer</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.18}
            className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            Combinando React, Next.js, Python y SQL para crear soluciones que impulsan
            el crecimiento mediante desarrollo web moderno y análisis de datos impactante.
          </motion.p>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.28}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              href="/web-projects"
              className="px-8 py-3.5 bg-primary-600 text-white rounded-xl hover:bg-primary-700 transition-all duration-200 flex items-center justify-center gap-2 font-medium shadow-lg shadow-primary-200 hover:shadow-primary-300 hover:scale-[1.02]"
            >
              Ver Proyectos Web
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/data-science"
              className="px-8 py-3.5 border-2 border-primary-600 text-primary-600 rounded-xl hover:bg-primary-50 transition-all duration-200 flex items-center justify-center gap-2 font-medium hover:scale-[1.02]"
            >
              Ver Data Science
              <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>

          {/* Tech stack pills */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.38}
            className="flex flex-wrap justify-center gap-2 mt-10"
          >
            {['React', 'Next.js', 'TypeScript', 'Python', 'SQL', 'Machine Learning'].map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 bg-white border border-gray-200 rounded-full text-xs text-gray-500 font-medium shadow-sm"
              >
                {tech}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Skills Overview ── */}
      <section className="bg-background-alt py-20">
        <div className="container mx-auto px-4">
          <motion.h2
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className="text-3xl font-bold text-center mb-12 text-secondary-500"
          >
            Áreas de Especialización
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Web Development */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              custom={0}
              className="bg-white p-8 rounded-2xl border border-gray-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-primary-50 flex items-center justify-center group-hover:bg-primary-100 transition-colors">
                  <Code2 className="h-6 w-6 text-primary-700" />
                </div>
                <h3 className="text-xl font-semibold">Desarrollo Web</h3>
              </div>
              <p className="text-gray-600 mb-5 text-sm leading-relaxed">
                Creación de aplicaciones web modernas, responsivas y escalables.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary-500 flex-shrink-0" />
                  React, Next.js, TypeScript
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary-500 flex-shrink-0" />
                  Node.js, Python (FastAPI, Flask)
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary-500 flex-shrink-0" />
                  Bases de datos SQL y NoSQL
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary-500 flex-shrink-0" />
                  APIs RESTful y GraphQL
                </li>
              </ul>
            </motion.div>

            {/* Data Science */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              custom={0.1}
              className="bg-white p-8 rounded-2xl border border-gray-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-purple-50 flex items-center justify-center group-hover:bg-purple-100 transition-colors">
                  <Database className="h-6 w-6 text-secondary-500" />
                </div>
                <h3 className="text-xl font-semibold">Data Science</h3>
              </div>
              <p className="text-gray-600 mb-5 text-sm leading-relaxed">
                Análisis de datos, machine learning y visualización de información.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary-500 flex-shrink-0" />
                  Python (Pandas, NumPy, Scikit-learn)
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary-500 flex-shrink-0" />
                  Machine Learning &amp; Deep Learning
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary-500 flex-shrink-0" />
                  Visualización (Plotly, Matplotlib)
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary-500 flex-shrink-0" />
                  SQL, ETL y procesamiento de datos
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── CTA Section ── */}
      <section className="container mx-auto px-4 py-20">
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="max-w-3xl mx-auto text-center bg-gradient-to-br from-primary-50 to-purple-50 p-12 rounded-3xl border border-primary-200 shadow-sm hover:shadow-md transition-shadow"
        >
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary-600 to-secondary-500 flex items-center justify-center mx-auto mb-6 shadow-lg">
            <LineChart className="h-7 w-7 text-white" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold mb-3 text-gray-900">
            ¿Tenés un proyecto en mente?
          </h2>
          <p className="text-gray-600 mb-8 max-w-lg mx-auto">
            Disponible para proyectos freelance y colaboraciones en desarrollo web y análisis de datos.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-xl hover:from-primary-700 hover:to-primary-800 transition-all duration-200 font-medium shadow-lg shadow-primary-200 hover:shadow-primary-300 hover:scale-[1.02]"
          >
            Contactar
            <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>
      </section>

    </div>
  )
}
