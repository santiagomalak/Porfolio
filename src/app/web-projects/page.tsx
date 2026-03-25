'use client'

import { motion } from 'framer-motion'
import type { Metadata } from 'next'
import ProjectCard from '@/components/ProjectCard'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1], delay },
  }),
}

const webProjects = [
  {
    title: 'StackAdvisor',
    description: 'SaaS que ayuda a developers y founders a elegir su tech stack ideal en 5 minutos. Motor de recomendación con 25+ stacks, 13 preguntas inteligentes y roadmap de 12 semanas personalizado.',
    tags: ['Next.js 14', 'TypeScript', 'TailwindCSS', 'Decision Engine', 'SaaS'],
    githubUrl: 'https://github.com/santiagomalak/StackAdvisor',
    liveUrl: 'https://stackadvisor-nu.vercel.app',
    type: 'web' as const,
  },
  {
    title: 'Wayra Huasi — Rental Platform',
    description: 'Landing page profesional para servicio de alquiler de departamentos amueblados. Diseño responsivo, galería de imágenes y sistema de contacto integrado con WhatsApp.',
    tags: ['HTML', 'CSS', 'JavaScript', 'Responsive Design'],
    githubUrl: 'https://github.com/santiagomalak/Servicios---Tu-Complejo',
    liveUrl: 'https://resplendent-kangaroo-a8dbd3.netlify.app/',
    type: 'web' as const,
  },
  {
    title: 'Portfolio Personal',
    description: 'Portfolio profesional de doble especialidad (Desarrollo Web & Data Science) construido con Next.js 14, App Router, Framer Motion y sistema de diseño personalizado con Tailwind CSS.',
    tags: ['Next.js 14', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    githubUrl: 'https://github.com/santiagomalak/Porfolio',
    liveUrl: 'https://santiagomalak.is-a.dev',
    type: 'web' as const,
  },
]

export default function WebProjects() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">

        {/* Header */}
        <motion.div
          variants={fadeUp} initial="hidden" animate="visible" custom={0}
          className="max-w-3xl mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-primary-700">Proyectos de</span>{' '}
            <span className="text-secondary-500">Desarrollo Web</span>
          </h1>
          <p className="text-xl text-gray-600">
            Aplicaciones web modernas construidas con las últimas tecnologías y mejores prácticas.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {webProjects.map((project, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              custom={index * 0.1}
            >
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  )
}
