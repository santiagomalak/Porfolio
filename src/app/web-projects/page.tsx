'use client'

import { motion } from 'framer-motion'
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
    description: 'SaaS que resuelve la parálisis de decisión tecnológica: 13 preguntas inteligentes → stack ideal con justificación detallada + roadmap de 12 semanas personalizado. Motor de recomendación propio con 25+ stacks evaluados. Pensado para founders sin CTO y developers tomando decisiones arquitectónicas críticas.',
    tags: ['Next.js 14', 'TypeScript', 'TailwindCSS', 'Decision Engine', 'SaaS'],
    highlight: 'En producción',
    image: '/project-stackadvisor.png',
    githubUrl: 'https://github.com/santiagomalak/StackAdvisor',
    liveUrl: 'https://stackadvisor-nu.vercel.app',
    type: 'web' as const,
    accentColor: 'blue' as const,
  },
  {
    title: 'Wayra Huasi — Plataforma de Alquiler',
    description: 'Landing page profesional para servicio de alquiler de departamentos amueblados en Córdoba. Diseño responsivo con galería de imágenes, descripción de amenities y sistema de contacto directo integrado con WhatsApp para consultas inmediatas.',
    tags: ['HTML', 'CSS', 'JavaScript', 'Responsive Design', 'WhatsApp API'],
    highlight: 'Live',
    image: '/project-wayrahuasi.png',
    githubUrl: 'https://github.com/santiagomalak/Servicios---Tu-Complejo',
    liveUrl: 'https://resplendent-kangaroo-a8dbd3.netlify.app/',
    type: 'web' as const,
    accentColor: 'green' as const,
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
