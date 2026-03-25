'use client'

import Link from 'next/link'
import { ArrowRight, Briefcase, Code2, Database, ExternalLink, Rocket } from 'lucide-react'
import { motion } from 'framer-motion'
import type { Metadata } from 'next'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1], delay },
  }),
}

const fadeIn = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

const techStack = {
  'Desarrollo Web': [
    { name: 'React', color: 'bg-blue-50 text-blue-700 border-blue-200' },
    { name: 'Next.js', color: 'bg-gray-50 text-gray-800 border-gray-300' },
    { name: 'TypeScript', color: 'bg-blue-50 text-blue-800 border-blue-200' },
    { name: 'Node.js', color: 'bg-green-50 text-green-700 border-green-200' },
    { name: 'Tailwind CSS', color: 'bg-cyan-50 text-cyan-700 border-cyan-200' },
    { name: 'PostgreSQL', color: 'bg-indigo-50 text-indigo-700 border-indigo-200' },
  ],
  'Data Science': [
    { name: 'Python', color: 'bg-yellow-50 text-yellow-800 border-yellow-200' },
    { name: 'Pandas', color: 'bg-purple-50 text-purple-700 border-purple-200' },
    { name: 'Scikit-learn', color: 'bg-orange-50 text-orange-700 border-orange-200' },
    { name: 'Machine Learning', color: 'bg-red-50 text-red-700 border-red-200' },
    { name: 'SQL', color: 'bg-teal-50 text-teal-700 border-teal-200' },
    { name: 'Matplotlib', color: 'bg-pink-50 text-pink-700 border-pink-200' },
  ],
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">

      {/* ── Hero ── */}
      <section className="container mx-auto px-4 pt-16 pb-12 max-w-4xl">
        <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={0}>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-50 border border-primary-200 text-primary-700 text-sm font-medium mb-8">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            Disponible para proyectos freelance
          </div>
        </motion.div>

        <motion.h1
          variants={fadeUp} initial="hidden" animate="visible" custom={0.08}
          className="text-4xl md:text-5xl font-bold mb-6 leading-tight"
        >
          Hola, soy{' '}
          <span className="text-gradient">Santiago Aragon</span>
        </motion.h1>

        <motion.p
          variants={fadeUp} initial="hidden" animate="visible" custom={0.16}
          className="text-xl text-gray-600 leading-relaxed max-w-3xl mb-8"
        >
          Data Scientist y Full-Stack Developer con 23 años, basado en Argentina.
          Trabajo en <strong className="text-gray-800">Ivolution</strong> como Data Scientist y en mi tiempo libre
          construyo productos que combinan lo mejor de ambos mundos — datos e interfaces modernas.
        </motion.p>

        <motion.div
          variants={fadeUp} initial="hidden" animate="visible" custom={0.24}
          className="flex flex-wrap gap-3"
        >
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary-600 text-white rounded-xl hover:bg-primary-700 transition-all font-medium shadow-lg shadow-primary-200 hover:scale-[1.02]"
          >
            Contactarme
            <ArrowRight className="h-4 w-4" />
          </Link>
          <a
            href="https://github.com/santiagomalak"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border-2 border-gray-200 text-gray-700 rounded-xl hover:border-primary-400 hover:text-primary-700 transition-all font-medium"
          >
            <ExternalLink className="h-4 w-4" />
            GitHub
          </a>
        </motion.div>
      </section>

      {/* ── Experiencia ── */}
      <section className="bg-background-alt py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.h2
            variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}
            className="text-2xl font-bold mb-10 flex items-center gap-3"
          >
            <div className="w-8 h-8 rounded-lg bg-primary-600 flex items-center justify-center">
              <Briefcase className="h-4 w-4 text-white" />
            </div>
            Experiencia
          </motion.h2>

          <div className="space-y-6">
            {/* Ivolution */}
            <motion.div
              variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0}
              className="bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-md transition-shadow"
            >
              <div className="flex items-start justify-between gap-4 mb-3">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Data Scientist</h3>
                  <p className="text-primary-700 font-medium">Ivolution</p>
                </div>
                <span className="text-sm text-gray-500 bg-gray-50 px-3 py-1 rounded-full border whitespace-nowrap">
                  Actual
                </span>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                Análisis de datos, construcción de modelos de machine learning y generación de insights
                accionables para decisiones de negocio. Desarrollo de pipelines de datos y dashboards
                para visualización de métricas clave.
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                {['Python', 'Pandas', 'Scikit-learn', 'SQL', 'Machine Learning'].map((t) => (
                  <span key={t} className="px-2.5 py-1 bg-primary-50 text-primary-700 text-xs font-medium rounded-full">
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Building Now ── */}
      <section className="container mx-auto px-4 py-16 max-w-4xl">
        <motion.h2
          variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}
          className="text-2xl font-bold mb-10 flex items-center gap-3"
        >
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary-600 to-secondary-500 flex items-center justify-center">
            <Rocket className="h-4 w-4 text-white" />
          </div>
          Qué estoy construyendo
        </motion.h2>

        <motion.div
          variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="bg-gradient-to-br from-primary-50 to-purple-50 rounded-2xl border border-primary-200 p-8"
        >
          <div className="flex items-start justify-between gap-4 mb-4 flex-wrap">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-1">StackAdvisor</h3>
              <p className="text-primary-700 font-medium text-sm">SaaS · En desarrollo</p>
            </div>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-green-100 text-green-700 text-xs font-semibold rounded-full border border-green-200">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
              MVP en progreso
            </span>
          </div>
          <p className="text-gray-700 leading-relaxed mb-5">
            Plataforma que ayuda a developers y founders a elegir su tech stack ideal en 5 minutos.
            13 preguntas inteligentes → motor de recomendación con 25+ stacks → roadmap de 12 semanas
            personalizado. Resuelve el problema de parálisis de análisis tecnológico que afecta a miles de equipos.
          </p>
          <div className="flex flex-wrap gap-2">
            {['Next.js 14', 'TypeScript', 'TailwindCSS', 'Decision Engine', 'SaaS'].map((t) => (
              <span key={t} className="px-2.5 py-1 bg-white border border-primary-200 text-primary-700 text-xs font-medium rounded-full">
                {t}
              </span>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ── Tech Stack ── */}
      <section className="bg-background-alt py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.h2
            variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}
            className="text-2xl font-bold mb-10 flex items-center gap-3"
          >
            <div className="w-8 h-8 rounded-lg bg-secondary-500 flex items-center justify-center">
              <Code2 className="h-4 w-4 text-white" />
            </div>
            Stack tecnológico
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8">
            {Object.entries(techStack).map(([category, skills], catIdx) => (
              <motion.div
                key={category}
                variants={fadeUp} initial="hidden" whileInView="visible"
                viewport={{ once: true }} custom={catIdx * 0.1}
                className="bg-white rounded-2xl border border-gray-200 p-6"
              >
                <div className="flex items-center gap-2 mb-5">
                  {category === 'Desarrollo Web'
                    ? <Code2 className="h-5 w-5 text-primary-700" />
                    : <Database className="h-5 w-5 text-secondary-500" />
                  }
                  <h3 className="font-semibold text-gray-900">{category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <span
                      key={skill.name}
                      className={`px-3 py-1.5 text-xs font-medium rounded-lg border ${skill.color}`}
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Filosofía ── */}
      <section className="container mx-auto px-4 py-16 max-w-4xl">
        <motion.div
          variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}
          className="bg-gradient-to-br from-primary-600 to-secondary-500 rounded-3xl p-10 text-white text-center"
        >
          <div className="text-4xl mb-6">💡</div>
          <blockquote className="text-xl md:text-2xl font-medium leading-relaxed mb-6 opacity-95">
            "Los mejores productos nacen en la intersección de datos e ingeniería.
            Los datos te dicen qué construir. El código te deja construirlo."
          </blockquote>
          <p className="opacity-80 text-sm">— Mi filosofía de trabajo</p>
        </motion.div>
      </section>

      {/* ── CTA ── */}
      <section className="container mx-auto px-4 pb-20 max-w-4xl text-center">
        <motion.div
          variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }}
        >
          <h2 className="text-2xl font-bold mb-3 text-gray-900">¿Trabajamos juntos?</h2>
          <p className="text-gray-600 mb-8 max-w-lg mx-auto">
            Estoy disponible para proyectos freelance en desarrollo web y análisis de datos.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-primary-600 text-white rounded-xl hover:bg-primary-700 transition-all font-medium shadow-lg shadow-primary-200 hover:scale-[1.02]"
            >
              Iniciar conversación
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/web-projects"
              className="inline-flex items-center gap-2 px-8 py-3.5 border-2 border-primary-200 text-primary-700 rounded-xl hover:bg-primary-50 transition-all font-medium"
            >
              Ver mis proyectos
            </Link>
          </div>
        </motion.div>
      </section>

    </div>
  )
}
