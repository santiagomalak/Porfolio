'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, Github, BarChart2, TrendingUp, Database, Zap } from 'lucide-react'

// ── Config — swap URLs once deployed ─────────────────────────────────────────
const DASHBOARDS = [
  {
    id:          'ecommerce',
    title:       'E-Commerce Analytics',
    subtitle:    'Olist Brazil · 100k+ orders · dbt + PostgreSQL',
    description: 'Pipeline de datos end-to-end con segmentación RFM, cohort retention, revenue trends y seller performance. Datos reales de 93k clientes únicos. Soporte EN/ES/PT.',
    liveUrl:     'https://ecommerce-dashboard-d09zf8xrn-santiago-aragons-projects.vercel.app',
    githubUrl:   'https://github.com/santiagomalak/ecommerce-dashboard',
    color:       '#FF694B',
    icon:        BarChart2,
    tags:        ['PostgreSQL', 'dbt', 'Next.js', 'Recharts', 'RFM', 'i18n'],
    status:      'live' as const,
  },
  {
    id:          'crypto',
    title:       'Crypto Live Dashboard',
    subtitle:    'BTC · ETH · SOL · BNB · XRP — Binance WebSocket',
    description: 'Dashboard en tiempo real con velas TradingView, volumen, 6 timeframes y detección de anomalías por z-score. Feed de trades en vivo.',
    liveUrl:     'https://crypto-dashboard-five-dun.vercel.app',
    githubUrl:   'https://github.com/santiagomalak/crypto-dashboard',
    color:       '#6366f1',
    icon:        TrendingUp,
    tags:        ['Next.js', 'WebSocket', 'Binance API', 'lightweight-charts', 'Zustand'],
    status:      'live' as const,
  },
]

const fadeUp = {
  hidden:  { opacity: 0, y: 20 },
  visible: (d = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: d } }),
}

export default function DashboardsPage() {
  const [active, setActive] = useState(DASHBOARDS[0].id)
  const [loaded, setLoaded] = useState<Record<string, boolean>>({})

  const current = DASHBOARDS.find(d => d.id === active)!
  const Icon    = current.icon

  return (
    <div className="min-h-screen bg-[#080810] text-white">
      {/* Hero */}
      <section className="border-b border-white/5 bg-[#0c0c18]">
        <div className="max-w-6xl mx-auto px-6 py-14">
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <p className="text-xs font-semibold uppercase tracking-[4px] text-indigo-400 mb-4">
              Live Projects
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
              Interactive Dashboards
            </h1>
            <p className="text-zinc-400 text-lg max-w-2xl">
              Proyectos productivos con datos reales — desde pipelines de datos hasta streams en tiempo real.
              Cada uno deployado y funcional.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6 py-10">
        {/* Tab selector */}
        <motion.div initial="hidden" animate="visible" custom={0.1} variants={fadeUp}
          className="flex gap-3 mb-8 flex-wrap">
          {DASHBOARDS.map(d => {
            const DIcon = d.icon
            const isActive = active === d.id
            return (
              <button key={d.id} onClick={() => setActive(d.id)}
                className="flex items-center gap-2.5 px-5 py-3 rounded-xl text-sm font-medium transition-all duration-200"
                style={{
                  background: isActive ? `${d.color}18` : '#0f0f1a',
                  border:     `1px solid ${isActive ? d.color + '50' : '#1e1e32'}`,
                  color:      isActive ? d.color : '#71717a',
                }}>
                <DIcon size={15} />
                {d.title}
                {d.status === 'live' && (
                  <span className="flex items-center gap-1 text-[10px] px-1.5 py-0.5 rounded-full"
                    style={{ background: '#22c55e18', color: '#22c55e', border: '1px solid #22c55e30' }}>
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                    LIVE
                  </span>
                )}
              </button>
            )
          })}
        </motion.div>

        {/* Dashboard info bar */}
        <motion.div key={active} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="flex flex-wrap items-start justify-between gap-4 mb-4">
          <div>
            <div className="flex items-center gap-3 mb-1">
              <div className="w-2.5 h-2.5 rounded-full" style={{ background: current.color }} />
              <h2 className="text-xl font-bold text-white">{current.title}</h2>
            </div>
            <p className="text-zinc-500 text-sm ml-5">{current.subtitle}</p>
            <p className="text-zinc-400 text-sm mt-2 max-w-2xl ml-5">{current.description}</p>
            <div className="flex gap-2 flex-wrap mt-3 ml-5">
              {current.tags.map(t => (
                <span key={t} className="text-xs px-2 py-0.5 rounded-md"
                  style={{ background: `${current.color}12`, color: current.color, border: `1px solid ${current.color}25` }}>
                  {t}
                </span>
              ))}
            </div>
          </div>
          <div className="flex gap-2">
            <a href={current.githubUrl} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all hover:bg-white/10"
              style={{ border: '1px solid #1e1e32', color: '#a1a1aa' }}>
              <Github size={14} /> Código
            </a>
            <a href={current.liveUrl} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all"
              style={{ background: current.color, color: '#fff' }}>
              <ExternalLink size={14} /> Abrir
            </a>
          </div>
        </motion.div>

        {/* Iframe embed */}
        <motion.div key={active + '-frame'} initial={{ opacity: 0, scale: 0.99 }}
          animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.4 }}
          className="relative rounded-2xl overflow-hidden"
          style={{ border: `1px solid ${current.color}30`, background: '#0a0a0f' }}>

          {/* Browser chrome */}
          <div className="flex items-center gap-2 px-4 py-3 border-b"
            style={{ background: '#0f0f17', borderColor: '#1e1e32' }}>
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500/60" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
              <div className="w-3 h-3 rounded-full bg-green-500/60" />
            </div>
            <div className="flex-1 mx-3">
              <div className="bg-[#1a1a2e] rounded-md px-3 py-1 text-xs text-zinc-500 font-mono truncate max-w-sm">
                {current.liveUrl.replace('https://', '')}
              </div>
            </div>
            <Icon size={13} style={{ color: current.color }} />
          </div>

          {/* Loading state */}
          {!loaded[active] && (
            <div className="absolute inset-0 top-[44px] flex flex-col items-center justify-center z-10 gap-3"
              style={{ background: '#0a0a0f' }}>
              <div className="w-8 h-8 rounded-full border-2 border-t-transparent animate-spin"
                style={{ borderColor: `${current.color}40`, borderTopColor: current.color }} />
              <p className="text-zinc-600 text-sm">Cargando {current.title}...</p>
            </div>
          )}

          <iframe
            key={active}
            src={current.liveUrl}
            className="w-full"
            style={{ height: 680, border: 'none' }}
            onLoad={() => setLoaded(p => ({ ...p, [active]: true }))}
            title={current.title}
            allow="clipboard-read; clipboard-write"
          />
        </motion.div>

        {/* Other projects grid */}
        <motion.div initial="hidden" animate="visible" custom={0.3} variants={fadeUp}
          className="mt-12">
          <h3 className="text-sm text-zinc-500 uppercase tracking-widest mb-5 flex items-center gap-2">
            <Database size={13} /> Otros proyectos
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                title: 'E-Commerce Data Platform',
                desc: 'Pipeline dbt + PostgreSQL con 4 capas de modelos sobre 100k órdenes Olist',
                color: '#FF694B',
                icon: Database,
                url: 'https://github.com/santiagomalak/ecommerce-data-platform',
                tags: ['dbt', 'PostgreSQL', 'Python', 'Docker'],
              },
              {
                title: 'Coming soon — Argentina Macro',
                desc: 'Inflación INDEC, dólar blue, reservas BCRA. Datos económicos de Argentina en tiempo real.',
                color: '#74b9ff',
                icon: Zap,
                url: null,
                tags: ['En desarrollo', 'BCRA API', 'INDEC'],
              },
            ].map(p => {
              const PIcon = p.icon
              return (
                <div key={p.title} className="p-5 rounded-xl transition-all hover:bg-white/3"
                  style={{ background: '#0f0f17', border: `1px solid #1e1e32` }}>
                  <div className="flex items-center gap-2 mb-2">
                    <PIcon size={14} style={{ color: p.color }} />
                    <span className="text-sm font-semibold text-zinc-200">{p.title}</span>
                  </div>
                  <p className="text-xs text-zinc-500 mb-3">{p.desc}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex gap-1.5 flex-wrap">
                      {p.tags.map(t => (
                        <span key={t} className="text-[10px] px-2 py-0.5 rounded"
                          style={{ background: `${p.color}12`, color: p.color }}>
                          {t}
                        </span>
                      ))}
                    </div>
                    {p.url && (
                      <a href={p.url} target="_blank" rel="noopener noreferrer"
                        className="text-xs text-zinc-600 hover:text-zinc-400 flex items-center gap-1 transition-colors">
                        <Github size={12} /> Ver repo
                      </a>
                    )}
                  </div>
                </div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </div>
  )
}
