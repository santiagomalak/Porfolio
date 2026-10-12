'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { ArrowRight, Code2, Database, BarChart3, Zap, TrendingUp, ExternalLink } from 'lucide-react'
import { motion, useInView, animate } from 'framer-motion'

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
    label: 'Trabajo en empresa · 967 atletas · 13 deportes',
    title: 'Performance Monitoring System',
    company: 'Ivolution Sport Science · Data',
    description: 'Diseñé desde cero el sistema de monitoreo de fatiga neuromuscular para 967 atletas de 13 deportes: modelos en BigQuery + dbt, dashboards en Metabase y umbrales dinámicos por percentil (p25/p75) que clasifican a cada atleta en FATIGADO / ATENCIÓN / SUPERCOMPENSACIÓN. Herramienta principal de decisión del staff, con soporte ES/EN/PT.',
    tags: ['BigQuery', 'dbt', 'SQL', 'Metabase', 'Python', 'n8n'],
    href: '/data-science/ivolution',
    color: 'from-blue-50 to-indigo-50 dark:from-blue-950/40 dark:to-indigo-950/40',
    border: 'border-blue-200 dark:border-blue-900/50',
    labelColor: 'bg-blue-100 text-blue-700 dark:bg-blue-950/60 dark:text-blue-400',
    tagColor: 'bg-blue-50 text-blue-700 dark:bg-blue-950/60 dark:text-blue-400',
    linkColor: 'text-blue-700 dark:text-blue-400 hover:text-blue-900 dark:hover:text-blue-300',
  },
  {
    label: 'Proyecto de cliente · LMS a medida',
    title: 'Instituto Coubertin',
    company: 'Coding Click · Full Stack',
    description: 'Plataforma educativa completa para un instituto de formación deportiva: catálogo de cursos, pagos con Stripe e inscripción automática, aula virtual con progreso, foro por curso, evaluaciones con corrección y panel de administración. Auth y datos en Supabase con políticas RLS. En etapa final de testing y carga de contenido.',
    tags: ['Next.js', 'TypeScript', 'Supabase', 'PostgreSQL', 'Stripe', 'Vercel'],
    href: 'https://instituto-coubertin-xga7.vercel.app',
    color: 'from-amber-50 to-orange-50 dark:from-amber-950/30 dark:to-orange-950/30',
    border: 'border-amber-200 dark:border-amber-900/50',
    labelColor: 'bg-amber-100 text-amber-800 dark:bg-amber-950/60 dark:text-amber-400',
    tagColor: 'bg-amber-50 text-amber-800 dark:bg-amber-950/60 dark:text-amber-400',
    linkColor: 'text-amber-700 dark:text-amber-400 hover:text-amber-900 dark:hover:text-amber-300',
  },
  {
    label: 'Sistema de gestión · Demo funcional',
    title: 'Turnex',
    company: 'Coding Click · Full Stack + SQL',
    description: 'Sistema de gestión para complejos deportivos: socios y cuentas corrientes, cuotas, reservas de canchas, turnos fijos, control de acceso con QR, cobros, caja diaria y portal del socio. PostgreSQL con SQL directo y migraciones versionadas, roles por perfil, tareas diarias con cron y tests unitarios + E2E.',
    tags: ['Next.js 16', 'PostgreSQL', 'SQL (sin ORM)', 'Supabase Auth', 'Zod', 'Playwright'],
    href: 'https://github.com/santiagomalak/Turnex',
    color: 'from-emerald-50 to-teal-50 dark:from-emerald-950/30 dark:to-teal-950/30',
    border: 'border-emerald-200 dark:border-emerald-900/50',
    labelColor: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-400',
    tagColor: 'bg-emerald-50 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-400',
    linkColor: 'text-emerald-700 dark:text-emerald-400 hover:text-emerald-900 dark:hover:text-emerald-300',
  },
  {
    label: 'SaaS propia · En producción',
    title: 'StackAdvisor',
    company: 'Proyecto propio · Full Stack + IA',
    description: 'Cuestionario que evalúa 35 combinaciones de stacks y recomienda el óptimo con justificación, roadmap de 12 semanas y estimador de costos. El Blueprint premium usa Gemini para generar arquitectura, esquema de base de datos y plan de desarrollo a medida del proyecto.',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Gemini', 'Decision Engine'],
    href: 'https://stackadvisor-nu.vercel.app',
    color: 'from-purple-50 to-violet-50 dark:from-purple-950/40 dark:to-violet-950/40',
    border: 'border-purple-200 dark:border-purple-900/50',
    labelColor: 'bg-purple-100 text-purple-700 dark:bg-purple-950/60 dark:text-purple-400',
    tagColor: 'bg-purple-50 text-purple-700 dark:bg-purple-950/60 dark:text-purple-400',
    linkColor: 'text-purple-700 dark:text-purple-400 hover:text-purple-900 dark:hover:text-purple-300',
  },
]

const stats = [
  { value: 967,  suffix: '',   label: 'Atletas monitoreados', sub: 'Data · Ivolution' },
  { value: 100,  suffix: 'k+', label: 'Órdenes modeladas',    sub: 'dbt · Olist' },
  { value: 35,   suffix: '',   label: 'Stacks evaluados',     sub: 'StackAdvisor · IA' },
  { value: 10,   suffix: 'k+', label: 'Mediciones procesadas', sub: 'BigQuery · Ivolution' },
]

function StatCounter({ value, suffix, label, sub }: (typeof stats)[0]) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  useEffect(() => {
    if (!inView || !ref.current) return
    const el = ref.current
    const controls = animate(0, value, {
      duration: 1.8,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => { el.textContent = Math.round(v).toLocaleString('es-AR') },
    })
    return controls.stop
  }, [inView, value])

  return (
    <div className="text-center px-4">
      <div className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-1 tabular-nums">
        <span ref={ref}>0</span><span>{suffix}</span>
      </div>
      <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mt-1">{label}</p>
      <p className="text-xs text-gray-400 dark:text-gray-500 mt-0.5">{sub}</p>
    </div>
  )
}

const TERMINAL_LINES = [
  { text: '-- fct_performance.sql · Ivolution', color: '#4b5563' },
  { text: '', color: '' },
  { text: 'SELECT', color: '#c084fc' },
  { text: '  athlete_id,', color: '#e2e8f0' },
  { text: '  sport,', color: '#e2e8f0' },
  { text: '  CASE', color: '#c084fc' },
  { text: '    WHEN score < p25', color: '#e2e8f0' },
  { text: "      THEN 'FATIGADO'",   color: '#f87171' },
  { text: '    WHEN score > p75', color: '#e2e8f0' },
  { text: "      THEN 'SUPERCOMP.'", color: '#4ade80' },
  { text: "    ELSE 'ATENCIÓN'",     color: '#facc15' },
  { text: '  END AS status', color: '#e2e8f0' },
  { text: "FROM {{ ref('fct_performance') }}", color: '#67e8f9' },
  { text: '', color: '' },
  { text: '$ dbt run --select fct_performance', color: '#818cf8' },
  { text: '✓  967 rows · 13 sports · Completed', color: '#22c55e' },
]

function TerminalCard() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <div
      ref={ref}
      className="rounded-2xl overflow-hidden shadow-2xl shadow-black/30"
      style={{ background: '#0f0f17', border: '1px solid #1e1e32' }}
    >
      {/* Chrome */}
      <div className="flex items-center gap-2 px-4 py-3" style={{ background: '#080810', borderBottom: '1px solid #1e1e32' }}>
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-500/70" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
          <div className="w-3 h-3 rounded-full bg-green-500/70" />
        </div>
        <span className="text-xs text-zinc-500 font-mono ml-2">fct_performance.sql</span>
        <div className="ml-auto">
          <span className="text-[10px] px-2 py-0.5 rounded-full font-mono"
            style={{ background: '#22c55e15', color: '#22c55e', border: '1px solid #22c55e30' }}>
            dbt · BigQuery
          </span>
        </div>
      </div>

      {/* Code */}
      <div className="p-5 font-mono text-[13px] leading-[1.65]">
        {TERMINAL_LINES.map((line, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -8 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 + i * 0.07, duration: 0.22, ease: 'easeOut' }}
            className="min-h-[1.65rem]"
            style={{ color: line.color || 'transparent' }}
          >
            {line.text || ' '}
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default function Home() {
  return (
    <div className="min-h-screen bg-background">

      {/* ── Hero ── */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">

            {/* Left — text */}
            <div className="text-center md:text-left">
              <motion.div
                variants={fadeUp} initial="hidden" animate="visible" custom={0}
                className="mb-8"
              >
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-50 dark:bg-primary-900/20 border border-primary-200 dark:border-primary-700/50 text-primary-700 dark:text-primary-400 text-sm font-medium hover:bg-primary-100 dark:hover:bg-primary-900/40 hover:border-primary-300 dark:hover:border-primary-600/60 transition-all duration-200"
                >
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  Abierto a roles remotos y proyectos
                </Link>
              </motion.div>

              <motion.h1
                variants={fadeUp} initial="hidden" animate="visible" custom={0.08}
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
              >
                <span className="text-secondary-500">Hybrid Engineer</span>
                <br />
                <span className="text-2xl md:text-3xl lg:text-4xl text-primary-700 dark:text-primary-400 font-semibold">
                  Data + Full Stack + IA
                </span>
              </motion.h1>

              <motion.p
                variants={fadeUp} initial="hidden" animate="visible" custom={0.18}
                className="text-lg text-gray-600 dark:text-gray-400 mb-10 max-w-xl leading-relaxed mx-auto md:mx-0"
              >
                Construyo sistemas de datos y software que se usan en producción: pipelines en
                BigQuery + dbt, dashboards, aplicaciones React/Next.js y automatizaciones con IA.
                Modelo los datos, construyo la interfaz que los consume y automatizo el proceso completo.
              </motion.p>

              <motion.div
                variants={fadeUp} initial="hidden" animate="visible" custom={0.28}
                className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start flex-wrap"
              >
                <Link
                  href="#proyectos"
                  className="px-8 py-3.5 bg-primary-600 text-white rounded-xl hover:bg-primary-700 transition-all duration-200 flex items-center justify-center gap-2 font-medium shadow-lg shadow-primary-200 dark:shadow-primary-900/30 hover:scale-[1.02]"
                >
                  Ver proyectos
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/dashboards"
                  className="px-8 py-3.5 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition-all duration-200 flex items-center justify-center gap-2 font-medium shadow-lg shadow-indigo-200 dark:shadow-indigo-900/30 hover:scale-[1.02]"
                >
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  Dashboards live
                </Link>
              </motion.div>

              <motion.div
                variants={fadeUp} initial="hidden" animate="visible" custom={0.38}
                className="flex flex-wrap justify-center md:justify-start gap-2 mt-8"
              >
                {['SQL', 'Python', 'BigQuery', 'dbt', 'React', 'Next.js', 'TypeScript', 'Supabase', 'n8n', 'LLMs'].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-white dark:bg-[#111120] border border-gray-200 dark:border-[#1e1e32] rounded-full text-xs text-gray-500 dark:text-gray-400 font-medium shadow-sm"
                  >
                    {tech}
                  </span>
                ))}
              </motion.div>
            </div>

            {/* Right — terminal (desktop only) */}
            <motion.div
              variants={fadeUp} initial="hidden" animate="visible" custom={0.15}
              className="hidden md:block"
            >
              <TerminalCard />
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="border-y border-gray-100 dark:border-[#1e1e32] py-12 bg-white dark:bg-[#0a0a14]">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-60px' }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-gray-100 dark:divide-[#1e1e32]"
          >
            {stats.map((s) => (
              <StatCounter key={s.label} {...s} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Proyectos destacados ── */}
      <section id="proyectos" className="bg-background-alt py-20 scroll-mt-16">
        <div className="container mx-auto px-4 max-w-5xl">
          <motion.div
            variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">Proyectos destacados</h2>
            <p className="text-gray-500 dark:text-gray-400 text-sm">Datos, producto y automatización — en empresa, con clientes y propios</p>
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
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">{p.title}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-3 font-medium">{p.company}</p>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-5">{p.description}</p>
                <div className="flex flex-wrap gap-1.5">
                  {p.tags.map((tag) => (
                    <span key={tag} className={`px-2.5 py-0.5 text-xs font-medium rounded-full ${p.tagColor}`}>
                      {tag}
                    </span>
                  ))}
                </div>
                {p.href && (
                  p.href.startsWith('/') ? (
                    <Link
                      href={p.href}
                      className={`inline-flex items-center gap-1.5 mt-5 text-sm font-medium transition-colors ${p.linkColor}`}
                    >
                      Ver caso <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  ) : (
                    <a
                      href={p.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center gap-1.5 mt-5 text-sm font-medium transition-colors ${p.linkColor}`}
                    >
                      {p.href.includes('github.com') ? 'Ver código' : 'Ver proyecto'} <ArrowRight className="h-3.5 w-3.5" />
                    </a>
                  )
                )}
              </motion.div>
            ))}
          </div>

          <motion.div
            variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="text-center mt-10"
          >
            <div className="flex flex-wrap justify-center gap-6">
              <Link
                href="/web-projects"
                className="inline-flex items-center gap-2 text-primary-700 dark:text-primary-400 font-medium hover:text-primary-900 dark:hover:text-primary-300 transition-colors text-sm"
              >
                Todos los proyectos Full Stack <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/data-science"
                className="inline-flex items-center gap-2 text-primary-700 dark:text-primary-400 font-medium hover:text-primary-900 dark:hover:text-primary-300 transition-colors text-sm"
              >
                Todos los proyectos de Data <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Live Dashboards ── (already dark, no changes needed) */}
      <section className="py-16 bg-[#080810]">
        <div className="container mx-auto px-4 max-w-5xl">
          <motion.div
            variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}
            className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8"
          >
            <div>
              <p className="text-xs font-semibold uppercase tracking-[4px] text-indigo-400 mb-2">Live Projects</p>
              <h2 className="text-2xl font-bold text-white">Dashboards interactivos</h2>
              <p className="text-zinc-400 text-sm mt-1">Datos reales, deployados en producción — abrís y funcionan.</p>
            </div>
            <Link
              href="/dashboards"
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium text-indigo-400 border border-indigo-500/30 hover:bg-indigo-500/10 transition-all whitespace-nowrap"
            >
              Ver todos <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-4">
            {[
              {
                title: 'E-Commerce Analytics',
                sub: 'Olist Brazil (PT-BR) · 100k+ órdenes · dbt + PostgreSQL',
                color: '#FF694B',
                url: 'https://ecommerce-dashboard-puce.vercel.app',
                tags: ['PostgreSQL', 'dbt', 'RFM', 'Cohort', 'i18n'],
                Icon: Database,
              },
              {
                title: 'Crypto Live Dashboard',
                sub: 'BTC · ETH · SOL · BNB · XRP — Binance WebSocket',
                color: '#6366f1',
                url: 'https://crypto-dashboard-five-dun.vercel.app',
                tags: ['WebSocket', 'TradingView', 'Z-score', 'Zustand'],
                Icon: TrendingUp,
              },
              {
                title: 'Argentina Macro Dashboard',
                sub: 'Dólar · Inflación · Riesgo País — datos en tiempo real',
                color: '#74b9ff',
                url: 'https://argentina-macro.vercel.app',
                tags: ['dolarapi', 'INDEC', 'MEP', 'CCL', 'Blue'],
                Icon: ExternalLink,
              },
            ].map((d) => (
              <motion.a
                key={d.title}
                href={d.url}
                target="_blank"
                rel="noopener noreferrer"
                variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                className="group p-6 rounded-2xl transition-all hover:-translate-y-1"
                style={{ background: '#0f0f17', border: `1px solid #1e1e32` }}
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2.5">
                    <d.Icon size={16} style={{ color: d.color }} />
                    <span className="font-semibold text-white text-sm">{d.title}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="flex items-center gap-1 text-[10px] px-1.5 py-0.5 rounded-full"
                      style={{ background: '#22c55e18', color: '#22c55e', border: '1px solid #22c55e30' }}>
                      <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                      LIVE
                    </span>
                    <ExternalLink size={12} className="text-zinc-600 group-hover:text-zinc-400 transition-colors" />
                  </div>
                </div>
                <p className="text-zinc-500 text-xs mb-4">{d.sub}</p>
                <div className="flex gap-1.5 flex-wrap">
                  {d.tags.map(t => (
                    <span key={t} className="text-[10px] px-2 py-0.5 rounded"
                      style={{ background: `${d.color}12`, color: d.color }}>
                      {t}
                    </span>
                  ))}
                </div>
              </motion.a>
            ))}
          </div>
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
            {/* Data */}
            <motion.div
              variants={fadeUp} initial="hidden" whileInView="visible"
              viewport={{ once: true, margin: '-60px' }} custom={0}
              className="bg-white dark:bg-[#0f0f17] p-7 rounded-2xl border border-gray-200 dark:border-[#1e1e32] hover:shadow-xl dark:hover:shadow-[#1e1e32]/50 hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="w-11 h-11 rounded-xl bg-blue-50 dark:bg-blue-950/50 flex items-center justify-center mb-4 group-hover:bg-blue-100 dark:group-hover:bg-blue-950/70 transition-colors">
                <BarChart3 className="h-5 w-5 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Data & Analytics</h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-4">
                Datos dispersos → modelos limpios y dashboards que se usan para decidir.
              </p>
              <ul className="space-y-1.5 text-sm text-gray-600 dark:text-gray-400">
                {['SQL · BigQuery · dbt · PostgreSQL', 'Metabase · Power BI', 'Python · pandas · scikit-learn', 'Alertas dinámicas · Percentiles'].map(item => (
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
              className="bg-white dark:bg-[#0f0f17] p-7 rounded-2xl border border-gray-200 dark:border-[#1e1e32] hover:shadow-xl dark:hover:shadow-[#1e1e32]/50 hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="w-11 h-11 rounded-xl bg-primary-50 dark:bg-primary-900/30 flex items-center justify-center mb-4 group-hover:bg-primary-100 dark:group-hover:bg-primary-900/50 transition-colors">
                <Code2 className="h-5 w-5 text-primary-700 dark:text-primary-400" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Full Stack</h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-4">
                Ideas de producto → apps completas, del modelo de datos al deploy.
              </p>
              <ul className="space-y-1.5 text-sm text-gray-600 dark:text-gray-400">
                {['React · Next.js · TypeScript', 'Node.js · APIs REST', 'Supabase · PostgreSQL', 'Tailwind CSS · Docker · Vercel'].map(item => (
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
              className="bg-white dark:bg-[#0f0f17] p-7 rounded-2xl border border-gray-200 dark:border-[#1e1e32] hover:shadow-xl dark:hover:shadow-[#1e1e32]/50 hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="w-11 h-11 rounded-xl bg-orange-50 dark:bg-orange-950/40 flex items-center justify-center mb-4 group-hover:bg-orange-100 dark:group-hover:bg-orange-950/60 transition-colors">
                <Zap className="h-5 w-5 text-orange-500 dark:text-orange-400" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">IA & Automatización</h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-4">
                Procesos manuales → flujos automáticos con LLMs integrados.
              </p>
              <ul className="space-y-1.5 text-sm text-gray-600 dark:text-gray-400">
                {['n8n · Make · Zapier', 'Claude API · Gemini · Groq', 'Scraping · Scoring con IA', 'Telegram API · Alertas'].map(item => (
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
          className="max-w-3xl mx-auto text-center bg-gradient-to-br from-primary-50 to-purple-50 dark:from-primary-900/20 dark:to-purple-900/20 p-12 rounded-3xl border border-primary-200 dark:border-primary-800/50"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-3 text-gray-900 dark:text-white">
            ¿Trabajamos juntos?
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-lg mx-auto">
            Busco roles remotos junior / semi-senior como Analytics Engineer, Data Analyst, Data Scientist,
            Full Stack o AI/Automation Engineer. También tomo proyectos freelance de automatización,
            dashboards y desarrollo a medida.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-xl hover:from-primary-700 hover:to-primary-800 transition-all duration-200 font-medium shadow-lg shadow-primary-200 dark:shadow-primary-900/30 hover:scale-[1.02]"
            >
              Iniciar conversación
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 px-8 py-3.5 border-2 border-primary-200 dark:border-primary-700/50 text-primary-700 dark:text-primary-400 rounded-xl hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-all font-medium"
            >
              Sobre mí
            </Link>
          </div>
        </motion.div>
      </section>

    </div>
  )
}
