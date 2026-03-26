'use client'

import Link from 'next/link'
import { ArrowRight, Code2, Database, BarChart3, Zap } from 'lucide-react'
import { motion } from 'framer-motion'

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

const featuredProjects = [
  {
    label: 'Trabajo real · +300 usuarios',
    title: 'Performance Monitoring System',
    company: 'Ivolution Sport Science',
    description: 'Sistema de análisis de rendimiento diseñado de cero para más de 300 personas — atletas, profesionales y equipos. Alertas de tres estados con umbrales dinámicos por percentil (p25/p75) y soporte ES/EN/PT. Hoy es la herramienta principal de toma de decisiones de la organización.',
    tags: ['BigQuery', 'dbt', 'SQL', 'Metabase', 'Python'],
    color: 'from-blue-50 to-indigo-50',
    border: 'border-blue-200',
    labelColor: 'bg-blue-100 text-blue-700',
    tagColor: 'bg-blue-50 text-blue-700',
  },
  {
    label: 'SaaS · En producción',
    title: 'StackAdvisor',
    company: 'Proyecto propio',
    description: '13 preguntas inteligentes → stack ideal con justificación detallada + roadmap de 12 semanas personalizado. Motor de recomendación propio con 25+ stacks evaluados. Para founders sin CTO y developers tomando decisiones arquitectónicas críticas.',
    tags: ['Next.js 14', 'TypeScript', 'TailwindCSS', 'Decision Engine'],
    href: 'https://stackadvisor-nu.vercel.app',
    color: 'from-purple-50 to-violet-50',
    border: 'border-purple-200',
    labelColor: 'bg-purple-100 text-purple-700',
    tagColor: 'bg-purple-50 text-purple-700',
  },
]

export default function Home() {
  return (
    <div className="min-h-screen bg-background">

      {/* ── Hero ── */}
      <section className="container mx-auto px-4 py-20 md:py-36">
        <div className="max-w-4xl mx-auto text-center">

          <motion.div
            variants={fadeUp} initial="hidden" animate="visible" custom={0}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-50 border border-primary-200 text-primary-700 text-sm font-medium mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            Abierto a roles remotos y proyectos
          </motion.div>

          <motion.h1
            variants={fadeUp} initial="hidden" animate="visible" custom={0.08}
            className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
          >
            <span className="text-secondary-500">Data Scientist</span>{' '}
            <span className="text-gray-400 font-light">&amp;</span>{' '}
            <br className="hidden md:block" />
            <span className="text-primary-700">Full-Stack Developer</span>
          </motion.h1>

          <motion.p
            variants={fadeUp} initial="hidden" animate="visible" custom={0.18}
            className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            Diseño pipelines, modelos y dashboards que los equipos realmente usan para operar mejor.
            También construyo productos web — de la idea al deploy.
          </motion.p>

          <motion.div
            variants={fadeUp} initial="hidden" animate="visible" custom={0.28}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              href="/data-science"
              className="px-8 py-3.5 bg-primary-600 text-white rounded-xl hover:bg-primary-700 transition-all duration-200 flex items-center justify-center gap-2 font-medium shadow-lg shadow-primary-200 hover:shadow-primary-300 hover:scale-[1.02]"
            >
              Ver proyectos de datos
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/web-projects"
              className="px-8 py-3.5 border-2 border-primary-600 text-primary-600 rounded-xl hover:bg-primary-50 transition-all duration-200 flex items-center justify-center gap-2 font-medium hover:scale-[1.02]"
            >
              Ver proyectos web
              <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>

          <motion.div
            variants={fadeUp} initial="hidden" animate="visible" custom={0.38}
            className="flex flex-wrap justify-center gap-2 mt-10"
          >
            {['SQL', 'BigQuery', 'dbt', 'Python', 'React', 'Next.js', 'TypeScript', 'n8n'].map((tech) => (
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

      {/* ── Proyectos destacados ── */}
      <section className="bg-background-alt py-20">
        <div className="container mx-auto px-4 max-w-5xl">
          <motion.div
            variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Proyectos destacados</h2>
            <p className="text-gray-500 text-sm">Lo más relevante de mi trabajo</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {featuredProjects.map((p, i) => (
              <motion.div
                key={p.title}
                variants={fadeUp} initial="hidden" whileInView="visible"
                viewport={{ once: true, margin: '-60px' }} custom={i * 0.1}
                className={`bg-gradient-to-br ${p.color} rounded-2xl border ${p.border} p-7 hover:shadow-lg hover:-translate-y-1 transition-all duration-300`}
              >
                <span className={`inline-block text-xs font-semibold px-3 py-1 rounded-full mb-4 ${p.labelColor}`}>
                  {p.label}
                </span>
                <h3 className="text-xl font-bold text-gray-900 mb-1">{p.title}</h3>
                <p className="text-sm text-gray-500 mb-3 font-medium">{p.company}</p>
                <p className="text-gray-600 text-sm leading-relaxed mb-5">{p.description}</p>
                <div className="flex flex-wrap gap-1.5">
                  {p.tags.map((tag) => (
                    <span key={tag} className={`px-2.5 py-0.5 text-xs font-medium rounded-full ${p.tagColor}`}>
                      {tag}
                    </span>
                  ))}
                </div>
                {p.href && (
                  <a
                    href={p.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 mt-5 text-sm font-medium text-purple-700 hover:text-purple-900 transition-colors"
                  >
                    Ver proyecto <ArrowRight className="h-3.5 w-3.5" />
                  </a>
                )}
              </motion.div>
            ))}
          </div>

          <motion.div
            variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="text-center mt-10"
          >
            <Link
              href="/data-science"
              className="inline-flex items-center gap-2 text-primary-700 font-medium hover:text-primary-900 transition-colors text-sm"
            >
              Ver todos los proyectos <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── Especialidades ── */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.h2
            variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}
            className="text-3xl font-bold text-center mb-12 text-secondary-500"
          >
            Áreas de especialización
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {/* Analytics Engineering */}
            <motion.div
              variants={fadeUp} initial="hidden" whileInView="visible"
              viewport={{ once: true, margin: '-60px' }} custom={0}
              className="bg-white p-7 rounded-2xl border border-gray-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="w-11 h-11 rounded-xl bg-blue-50 flex items-center justify-center mb-4 group-hover:bg-blue-100 transition-colors">
                <BarChart3 className="h-5 w-5 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Analytics Engineering</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-4">
                Pipelines de datos, modelos analíticos y dashboards que se usan de verdad.
              </p>
              <ul className="space-y-1.5 text-sm text-gray-600">
                {['SQL · BigQuery · dbt', 'Metabase · Dashboards', 'Alertas dinámicas · Percentiles', 'Python · Pandas'].map(item => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Full-Stack Dev */}
            <motion.div
              variants={fadeUp} initial="hidden" whileInView="visible"
              viewport={{ once: true, margin: '-60px' }} custom={0.1}
              className="bg-white p-7 rounded-2xl border border-gray-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="w-11 h-11 rounded-xl bg-primary-50 flex items-center justify-center mb-4 group-hover:bg-primary-100 transition-colors">
                <Code2 className="h-5 w-5 text-primary-700" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Desarrollo Web</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-4">
                Aplicaciones web modernas del frontend al backend, listas para producción.
              </p>
              <ul className="space-y-1.5 text-sm text-gray-600">
                {['React · Next.js · TypeScript', 'Node.js · APIs REST', 'Tailwind CSS · Framer Motion', 'Docker · Vercel'].map(item => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary-500 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Automatización */}
            <motion.div
              variants={fadeUp} initial="hidden" whileInView="visible"
              viewport={{ once: true, margin: '-60px' }} custom={0.2}
              className="bg-white p-7 rounded-2xl border border-gray-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="w-11 h-11 rounded-xl bg-orange-50 flex items-center justify-center mb-4 group-hover:bg-orange-100 transition-colors">
                <Zap className="h-5 w-5 text-orange-500" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Automatización</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-4">
                Flujos automáticos que eliminan trabajo repetitivo y escalan desde un VPS.
              </p>
              <ul className="space-y-1.5 text-sm text-gray-600">
                {['n8n · Workflows visuales', 'Telegram API · Notificaciones', 'Scraping · Scoring con IA', 'Docker · VPS'].map(item => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-orange-500 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="container mx-auto px-4 py-20">
        <motion.div
          variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}
          className="max-w-3xl mx-auto text-center bg-gradient-to-br from-primary-50 to-purple-50 p-12 rounded-3xl border border-primary-200"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-3 text-gray-900">
            ¿Trabajamos juntos?
          </h2>
          <p className="text-gray-600 mb-8 max-w-lg mx-auto">
            Abierto a roles remotos de Analytics Engineer, Data Engineer, Data Scientist o Full-Stack Developer.
            También a proyectos freelance — datos, web, automatización.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-xl hover:from-primary-700 hover:to-primary-800 transition-all duration-200 font-medium shadow-lg shadow-primary-200 hover:scale-[1.02]"
            >
              Iniciar conversación
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 px-8 py-3.5 border-2 border-primary-200 text-primary-700 rounded-xl hover:bg-primary-50 transition-all font-medium"
            >
              Sobre mí
            </Link>
          </div>
        </motion.div>
      </section>

    </div>
  )
}
