'use client'

import Link from 'next/link'
import { ArrowRight, Briefcase, Code2, Database, ExternalLink, Rocket, Download, Globe, Zap, Shield, GraduationCap } from 'lucide-react'
import { motion } from 'framer-motion'

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

const chip = {
  blue: 'bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-950/50 dark:text-blue-400 dark:border-blue-800/50',
  orange: 'bg-orange-50 text-orange-700 border-orange-200 dark:bg-orange-950/50 dark:text-orange-400 dark:border-orange-800/50',
  indigo: 'bg-indigo-50 text-indigo-700 border-indigo-200 dark:bg-indigo-950/50 dark:text-indigo-400 dark:border-indigo-800/50',
  teal: 'bg-teal-50 text-teal-700 border-teal-200 dark:bg-teal-950/50 dark:text-teal-400 dark:border-teal-800/50',
  yellow: 'bg-yellow-50 text-yellow-800 border-yellow-200 dark:bg-yellow-950/50 dark:text-yellow-400 dark:border-yellow-800/50',
  purple: 'bg-purple-50 text-purple-700 border-purple-200 dark:bg-purple-950/50 dark:text-purple-400 dark:border-purple-800/50',
  green: 'bg-green-50 text-green-700 border-green-200 dark:bg-green-950/50 dark:text-green-400 dark:border-green-800/50',
  cyan: 'bg-cyan-50 text-cyan-700 border-cyan-200 dark:bg-cyan-950/50 dark:text-cyan-400 dark:border-cyan-800/50',
  gray: 'bg-gray-50 text-gray-800 border-gray-300 dark:bg-gray-800/50 dark:text-gray-300 dark:border-gray-700/50',
}

const techStack: Record<string, { icon: typeof Database; skills: { name: string; color: string }[] }> = {
  'Datos': {
    icon: Database,
    skills: [
      { name: 'SQL', color: chip.teal },
      { name: 'Python · pandas', color: chip.yellow },
      { name: 'scikit-learn', color: chip.orange },
      { name: 'BigQuery', color: chip.blue },
      { name: 'dbt', color: chip.orange },
      { name: 'PostgreSQL', color: chip.purple },
      { name: 'Metabase', color: chip.indigo },
      { name: 'Power BI', color: chip.yellow },
    ],
  },
  'Full Stack': {
    icon: Code2,
    skills: [
      { name: 'React · Next.js', color: chip.blue },
      { name: 'TypeScript', color: chip.blue },
      { name: 'Node.js · APIs REST', color: chip.green },
      { name: 'Supabase', color: chip.green },
      { name: 'Tailwind CSS', color: chip.cyan },
      { name: 'Docker · Vercel', color: chip.gray },
    ],
  },
  'IA & Automatización': {
    icon: Zap,
    skills: [
      { name: 'n8n', color: chip.orange },
      { name: 'Make · Zapier', color: chip.purple },
      { name: 'Claude API', color: chip.orange },
      { name: 'Gemini · Groq', color: chip.blue },
      { name: 'Ollama', color: chip.gray },
      { name: 'Telegram API', color: chip.cyan },
    ],
  },
  'Ciberseguridad': {
    icon: Shield,
    skills: [
      { name: 'Seguridad en la nube', color: chip.indigo },
      { name: 'Redes', color: chip.teal },
      { name: 'Gestión de incidentes', color: chip.purple },
      { name: 'OSINT · Forense', color: chip.gray },
    ],
  },
}

const experience = [
  {
    role: 'Founder & Hybrid Engineer — Full Stack, Data & Automation',
    company: 'Coding Click · Profesional independiente',
    period: 'Sep 2025 — Actualidad',
    location: 'Córdoba, Argentina · Híbrido',
    summary: 'Desarrollo de software end-to-end para PYMEs: web, sistemas a medida, data y automatización.',
    bullets: [
      'Diseño y desarrollo sitios, e-commerce y sistemas a medida con React/Next.js, Node.js y PostgreSQL/Supabase — desde landing pages hasta portales internos de gestión.',
      'Construí la plataforma LMS a medida del Instituto Coubertin con Next.js, Supabase y Vercel, con documentación de producto completa; en etapa final de testing y carga de contenido.',
      'Implemento automatizaciones y reporting de datos con n8n, Make y APIs REST: sincronización entre sistemas, alertas automáticas y dashboards de seguimiento que reemplazan procesos manuales.',
      'Manejo el ciclo completo de cada proyecto: relevamiento técnico, propuesta, desarrollo, despliegue y mantenimiento.',
    ],
    tags: ['Next.js', 'React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Supabase', 'n8n', 'Make', 'Docker', 'Vercel'],
  },
  {
    role: 'Data Scientist / Analytics Engineer',
    company: 'Ivolution Sport Science · Contrato temporal',
    period: 'Abr 2025 — Mar 2026',
    location: 'Argentina · Remoto',
    summary: 'Diseñé e implementé desde cero el sistema de análisis de rendimiento deportivo de la organización.',
    bullets: [
      'Construí el sistema de monitoreo de fatiga neuromuscular para 967 atletas de 13 deportes con BigQuery, dbt y Metabase, usado como herramienta principal de decisión del staff.',
      'Implementé umbrales dinámicos por percentil (p25 fatiga / p75 supercompensación) que clasifican automáticamente a cada atleta en FATIGADO / ATENCIÓN / SUPERCOMPENSACIÓN.',
      'Migré los modelos de CMJ Rebound de Metabase a dbt, con surrogate keys y deduplicación de atletas entre los entornos de producción y desarrollo.',
      'Desarrollé el framework de dashboard Return to Play y la versión multilingüe (ES/EN/PT) de los dashboards; automaticé flujos del sistema con n8n.',
    ],
    tags: ['SQL', 'BigQuery', 'dbt', 'Metabase', 'Python', 'n8n'],
  },
]

const education = [
  {
    title: 'Tecnicatura en Tecnologías de la Programación',
    institution: 'UPSO · Modalidad a distancia',
    period: 'En curso · título previsto a inicios de 2027',
  },
  {
    title: 'Diplomatura en Data Science & Machine Learning',
    institution: 'Universidad Nacional de Córdoba · ICARO',
    period: '2025',
  },
  {
    title: 'Diplomatura en Ciberseguridad',
    institution: 'Universidad Nacional de Córdoba (FCEFyN)',
    period: '2025',
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">

      {/* ── Hero ── */}
      <section className="container mx-auto px-4 pt-16 pb-12 max-w-4xl">
        <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={0}>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-50 dark:bg-primary-900/20 border border-primary-200 dark:border-primary-700/50 text-primary-700 dark:text-primary-400 text-sm font-medium mb-8">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            Disponible · Hybrid Engineer: Data + Full Stack + IA
          </div>
        </motion.div>

        <motion.h1
          variants={fadeUp} initial="hidden" animate="visible" custom={0.08}
          className="text-4xl md:text-5xl font-bold mb-6 leading-tight"
        >
          Hola, soy{' '}
          <span className="text-gradient">Santiago Aragon Malak</span>
        </motion.h1>

        <motion.p
          variants={fadeUp} initial="hidden" animate="visible" custom={0.16}
          className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-3xl mb-8"
        >
          Construyo sistemas de datos y software que se usan en producción. Perfil híbrido:
          modelo los datos, construyo la interfaz que los consume y automatizo el proceso completo
          — con SQL, Python, BigQuery y dbt del lado de datos, React/Next.js y TypeScript del lado
          de producto, y n8n + LLMs para automatizar.
        </motion.p>

        <motion.div
          variants={fadeUp} initial="hidden" animate="visible" custom={0.24}
          className="flex flex-wrap gap-3"
        >
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary-600 text-white rounded-xl hover:bg-primary-700 transition-all font-medium shadow-lg shadow-primary-200 dark:shadow-primary-900/30 hover:scale-[1.02]"
          >
            Contactarme
            <ArrowRight className="h-4 w-4" />
          </Link>
          <a
            href="/CV_Santiago_Malak.pdf"
            download
            className="inline-flex items-center gap-2 px-6 py-3 bg-white dark:bg-[#0f0f17] border-2 border-primary-200 dark:border-primary-700/50 text-primary-700 dark:text-primary-400 rounded-xl hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-all font-medium hover:scale-[1.02]"
          >
            <Download className="h-4 w-4" />
            Descargar CV
          </a>
          <a
            href="https://github.com/santiagomalak"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border-2 border-gray-200 dark:border-[#1e1e32] text-gray-700 dark:text-gray-300 rounded-xl hover:border-primary-400 hover:text-primary-700 dark:hover:border-primary-600 dark:hover:text-primary-400 transition-all font-medium"
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
            className="text-2xl font-bold mb-10 flex items-center gap-3 text-gray-900 dark:text-white"
          >
            <div className="w-8 h-8 rounded-lg bg-primary-600 flex items-center justify-center">
              <Briefcase className="h-4 w-4 text-white" />
            </div>
            Experiencia
          </motion.h2>

          <div className="space-y-6">
            {experience.map((job, i) => (
              <motion.div
                key={job.role}
                variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i * 0.1}
                className="bg-white dark:bg-[#0f0f17] rounded-2xl border border-gray-200 dark:border-[#1e1e32] p-6 hover:shadow-md dark:hover:shadow-[#1e1e32]/50 transition-shadow"
              >
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 sm:gap-4 mb-3">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{job.role}</h3>
                    <p className="text-primary-700 dark:text-primary-400 font-medium">{job.company}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">{job.location}</p>
                  </div>
                  <span className="self-start text-sm text-gray-500 dark:text-gray-400 bg-gray-50 dark:bg-[#111120] px-3 py-1 rounded-full border border-gray-200 dark:border-[#1e1e32] whitespace-nowrap">
                    {job.period}
                  </span>
                </div>
                <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed mb-3">{job.summary}</p>
                <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  {job.bullets.map((b) => (
                    <li key={b} className="flex gap-2">
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary-500 flex-shrink-0" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2 mt-4">
                  {job.tags.map((t) => (
                    <span key={t} className="px-2.5 py-1 bg-primary-50 dark:bg-primary-900/30 text-primary-700 dark:text-primary-400 text-xs font-medium rounded-full">
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Building Now ── */}
      <section className="container mx-auto px-4 py-16 max-w-4xl">
        <motion.h2
          variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}
          className="text-2xl font-bold mb-10 flex items-center gap-3 text-gray-900 dark:text-white"
        >
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary-600 to-secondary-500 flex items-center justify-center">
            <Rocket className="h-4 w-4 text-white" />
          </div>
          Qué estoy construyendo
        </motion.h2>

        <div className="space-y-6">
          {/* StackAdvisor */}
          <motion.div
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0}
            className="bg-gradient-to-br from-primary-50 to-purple-50 dark:from-primary-900/20 dark:to-purple-900/20 rounded-2xl border border-primary-200 dark:border-primary-800/50 p-8 group hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
          >
            <div className="flex items-start justify-between gap-4 mb-4 flex-wrap">
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">StackAdvisor</h3>
                <p className="text-primary-700 dark:text-primary-400 font-medium text-sm">SaaS · En producción</p>
              </div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-green-100 dark:bg-green-950/50 text-green-700 dark:text-green-400 text-xs font-semibold rounded-full border border-green-200 dark:border-green-800/50">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                Live
              </span>
            </div>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-5">
              SaaS propia que resuelve la parálisis de decisión tecnológica: un cuestionario evalúa
              35 combinaciones de stacks y devuelve el óptimo con justificación, roadmap de 12 semanas
              y estimador de costos. El Blueprint premium genera con Gemini la arquitectura, el esquema
              de base de datos y el plan de desarrollo del proyecto.
            </p>
            <div className="flex flex-wrap gap-2 mb-5">
              {['Next.js', 'TypeScript', 'Tailwind CSS', 'Gemini', 'Decision Engine', 'SaaS'].map((t) => (
                <span key={t} className="px-2.5 py-1 bg-white dark:bg-[#111120] border border-primary-200 dark:border-primary-800/50 text-primary-700 dark:text-primary-400 text-xs font-medium rounded-full">
                  {t}
                </span>
              ))}
            </div>
            <a
              href="https://stackadvisor-nu.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary-700 dark:text-primary-400 hover:text-primary-900 dark:hover:text-primary-300 transition-colors"
            >
              Visitar StackAdvisor
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>

          {/* Job Hunting Automation */}
          <motion.div
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0.1}
            className="bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-950/20 dark:to-amber-950/20 rounded-2xl border border-orange-200 dark:border-orange-800/50 p-8"
          >
            <div className="flex items-start justify-between gap-4 mb-4 flex-wrap">
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">Job Hunting Automation</h3>
                <p className="text-orange-700 dark:text-orange-400 font-medium text-sm">IA & Automatización · Uso personal</p>
              </div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-orange-100 dark:bg-orange-950/50 text-orange-700 dark:text-orange-400 text-xs font-semibold rounded-full border border-orange-200 dark:border-orange-800/50">
                <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse" />
                n8n + LLMs
              </span>
            </div>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-5">
              Pipeline en n8n que scrapea vacantes, las puntúa con IA según mi perfil, pide aprobación
              por Telegram, adapta el CV a cada oferta y registra todo en Google Sheets — porque buscar
              trabajo también se puede automatizar.
            </p>
            <div className="flex flex-wrap gap-2">
              {['n8n', 'Claude API', 'Telegram API', 'Google Sheets', 'Scraping'].map((t) => (
                <span key={t} className="px-2.5 py-1 bg-white dark:bg-[#111120] border border-orange-200 dark:border-orange-800/50 text-orange-700 dark:text-orange-400 text-xs font-medium rounded-full">
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Tech Stack ── */}
      <section className="bg-background-alt py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.h2
            variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}
            className="text-2xl font-bold mb-10 flex items-center gap-3 text-gray-900 dark:text-white"
          >
            <div className="w-8 h-8 rounded-lg bg-secondary-500 flex items-center justify-center">
              <Code2 className="h-4 w-4 text-white" />
            </div>
            Stack tecnológico
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-6">
            {Object.entries(techStack).map(([category, { icon: Icon, skills }], catIdx) => (
              <motion.div
                key={category}
                variants={fadeUp} initial="hidden" whileInView="visible"
                viewport={{ once: true }} custom={catIdx * 0.1}
                className="bg-white dark:bg-[#0f0f17] rounded-2xl border border-gray-200 dark:border-[#1e1e32] p-6"
              >
                <div className="flex items-center gap-2 mb-5">
                  <Icon className="h-5 w-5 text-primary-700 dark:text-primary-400" />
                  <h3 className="font-semibold text-gray-900 dark:text-white">{category}</h3>
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

      {/* ── Formación ── */}
      <section className="container mx-auto px-4 pt-16 max-w-4xl">
        <motion.h2
          variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}
          className="text-2xl font-bold mb-8 flex items-center gap-3 text-gray-900 dark:text-white"
        >
          <div className="w-8 h-8 rounded-lg bg-secondary-500 flex items-center justify-center">
            <GraduationCap className="h-4 w-4 text-white" />
          </div>
          Formación
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {education.map((e, i) => (
            <motion.div
              key={e.title}
              variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i * 0.1}
              className="bg-white dark:bg-[#0f0f17] rounded-2xl border border-gray-200 dark:border-[#1e1e32] p-6"
            >
              <h3 className="font-semibold text-gray-900 dark:text-white leading-snug mb-2">{e.title}</h3>
              <p className="text-sm text-primary-700 dark:text-primary-400 font-medium">{e.institution}</p>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{e.period}</p>
            </motion.div>
          ))}
        </div>
        <Link
          href="/certifications"
          className="inline-flex items-center gap-2 mt-6 text-sm font-medium text-primary-700 dark:text-primary-400 hover:text-primary-900 dark:hover:text-primary-300 transition-colors"
        >
          Ver todas las certificaciones <ArrowRight className="h-4 w-4" />
        </Link>
      </section>

      {/* ── Idiomas ── */}
      <section className="container mx-auto px-4 py-12 max-w-4xl">
        <motion.h2
          variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}
          className="text-2xl font-bold mb-8 flex items-center gap-3 text-gray-900 dark:text-white"
        >
          <div className="w-8 h-8 rounded-lg bg-primary-600 flex items-center justify-center">
            <Globe className="h-4 w-4 text-white" />
          </div>
          Idiomas
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            { lang: 'Español', level: 'Nativo', detail: 'Lengua materna', bar: 100, color: 'bg-primary-600' },
            { lang: 'Inglés', level: 'Lectura técnica', detail: 'Documentación y lectura técnica fluida · conversación en desarrollo', bar: 50, color: 'bg-indigo-500' },
            { lang: 'Portugués', level: 'C1 Avanzado', detail: 'Conversación fluida · Documentación técnica', bar: 85, color: 'bg-secondary-500' },
          ].map((l, i) => (
            <motion.div
              key={l.lang}
              variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i * 0.1}
              className="bg-white dark:bg-[#0f0f17] rounded-2xl border border-gray-200 dark:border-[#1e1e32] p-6"
            >
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="font-bold text-gray-900 dark:text-white">{l.lang}</h3>
                  <p className="text-sm text-primary-700 dark:text-primary-400 font-medium">{l.level}</p>
                </div>
                <span className="text-2xl">{l.lang === 'Español' ? '🇦🇷' : l.lang === 'Inglés' ? '🇬🇧' : '🇧🇷'}</span>
              </div>
              <p className="text-xs text-gray-500 dark:text-gray-400 mb-4">{l.detail}</p>
              <div className="w-full bg-gray-100 dark:bg-[#1e1e32] rounded-full h-1.5">
                <div className={`${l.color} h-1.5 rounded-full`} style={{ width: `${l.bar}%` }} />
              </div>
            </motion.div>
          ))}
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
          <h2 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">¿Trabajamos juntos?</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-lg mx-auto">
            Busco roles remotos junior / semi-senior como Analytics Engineer, Data Analyst, Data Scientist,
            Full Stack o AI/Automation Engineer. También tomo proyectos freelance de automatización,
            dashboards y desarrollo a medida.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-primary-600 text-white rounded-xl hover:bg-primary-700 transition-all font-medium shadow-lg shadow-primary-200 dark:shadow-primary-900/30 hover:scale-[1.02]"
            >
              Iniciar conversación
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/web-projects"
              className="inline-flex items-center gap-2 px-8 py-3.5 border-2 border-primary-200 dark:border-primary-700/50 text-primary-700 dark:text-primary-400 rounded-xl hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-all font-medium"
            >
              Ver mis proyectos
            </Link>
          </div>
        </motion.div>
      </section>

    </div>
  )
}
