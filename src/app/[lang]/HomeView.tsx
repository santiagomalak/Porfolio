'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Code2, Database, BarChart3, Download, Zap, TrendingUp, ExternalLink, Landmark } from 'lucide-react'
import { motion } from 'framer-motion'
import { SITE_NAME, intlLocale, type Locale } from '@/i18n/config'
import type { Dictionary } from '@/i18n/get-dictionary'
import { localizePath } from '@/i18n/routing'

type HomeCopy = Dictionary['home']

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

// href: internal path (case study) or external URL (live site / GitHub repo).
const featuredProjects = [
  {
    id: 'ivolution',
    tags: ['SQL', 'dbt', 'Metabase', 'BigQuery', 'Python'],
    href: '/data-science/ivolution',
    color: 'from-blue-50 to-indigo-50 dark:from-blue-950/40 dark:to-indigo-950/40',
    border: 'border-blue-200 dark:border-blue-900/50',
    labelColor: 'bg-blue-100 text-blue-700 dark:bg-blue-950/60 dark:text-blue-400',
    tagColor: 'bg-blue-50 text-blue-700 dark:bg-blue-950/60 dark:text-blue-400',
    linkColor: 'text-blue-700 dark:text-blue-400 hover:text-blue-900 dark:hover:text-blue-300',
  },
  {
    id: 'coubertin',
    tags: ['Next.js', 'TypeScript', 'Supabase', 'PostgreSQL', 'Stripe'],
    href: 'https://institutocoubertin.com',
    color: 'from-amber-50 to-orange-50 dark:from-amber-950/30 dark:to-orange-950/30',
    border: 'border-amber-200 dark:border-amber-900/50',
    labelColor: 'bg-amber-100 text-amber-800 dark:bg-amber-950/60 dark:text-amber-400',
    tagColor: 'bg-amber-50 text-amber-800 dark:bg-amber-950/60 dark:text-amber-400',
    linkColor: 'text-amber-700 dark:text-amber-400 hover:text-amber-900 dark:hover:text-amber-300',
  },
  {
    id: 'turnex',
    tags: ['Next.js', 'PostgreSQL', 'SQL', 'Supabase', 'Playwright'],
    href: 'https://github.com/santiagomalak/Turnex',
    color: 'from-emerald-50 to-teal-50 dark:from-emerald-950/30 dark:to-teal-950/30',
    border: 'border-emerald-200 dark:border-emerald-900/50',
    labelColor: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-400',
    tagColor: 'bg-emerald-50 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-400',
    linkColor: 'text-emerald-700 dark:text-emerald-400 hover:text-emerald-900 dark:hover:text-emerald-300',
  },
  {
    id: 'stackadvisor',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Gemini'],
    href: 'https://stackadvisor-nu.vercel.app',
    color: 'from-purple-50 to-violet-50 dark:from-purple-950/40 dark:to-violet-950/40',
    border: 'border-purple-200 dark:border-purple-900/50',
    labelColor: 'bg-purple-100 text-purple-700 dark:bg-purple-950/60 dark:text-purple-400',
    tagColor: 'bg-purple-50 text-purple-700 dark:bg-purple-950/60 dark:text-purple-400',
    linkColor: 'text-purple-700 dark:text-purple-400 hover:text-purple-900 dark:hover:text-purple-300',
  },
] as const

// Facts from the Ivolution job only. Rendered with their final value, no count-up.
const stats = [
  { id: 'athletes',     value: 967,    suffix: ''  },
  { id: 'sports',       value: 13,     suffix: ''  },
  { id: 'measurements', value: 10_000, suffix: '+' },
] as const

const liveDashboards = [
  {
    id: 'ecommerce',
    color: '#FF694B',
    url: 'https://ecommerce-dashboard-puce.vercel.app',
    tags: ['SQL', 'dbt', 'PostgreSQL'],
    Icon: Database,
  },
  {
    id: 'crypto',
    color: '#6366f1',
    url: 'https://crypto-dashboard-five-dun.vercel.app',
    tags: ['Next.js', 'WebSocket'],
    Icon: TrendingUp,
  },
  {
    id: 'argentina',
    color: '#74b9ff',
    url: 'https://argentina-macro.vercel.app',
    tags: ['Next.js', 'APIs'],
    Icon: Landmark,
  },
] as const

export default function HomeView({ lang, t, roleShort, downloadCv, cvHref, dashboards, workTogether }: {
  lang: Locale
  t: HomeCopy
  roleShort: string
  downloadCv: string
  cvHref: string
  dashboards: Pick<Dictionary['dashboards'], 'live' | 'items'>
  workTogether: Dictionary['common']['workTogether']
}) {
  const href = (path: string) => localizePath(lang, path)

  return (
    <div className="min-h-screen bg-background">

      {/* ── Hero ── */}
      <section className="container mx-auto px-4 py-14 md:py-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">

            {/* Left — text */}
            <div className="text-center lg:text-left">
              <h1 className="animate-fade-up motion-reduce:animate-none mb-6 leading-tight font-bold">
                <span className="block text-4xl md:text-5xl lg:text-6xl text-gray-900 dark:text-white">{SITE_NAME}</span>
                <span className="block mt-2 text-2xl md:text-3xl lg:text-4xl text-primary-600 dark:text-primary-400 font-semibold">
                  {roleShort}
                </span>
              </h1>

              <p className="animate-fade-up motion-reduce:animate-none [animation-delay:100ms] text-lg text-gray-600 dark:text-gray-400 mb-10 max-w-xl leading-relaxed mx-auto lg:mx-0">
                {t.intro}
              </p>

              <div className="animate-fade-up motion-reduce:animate-none [animation-delay:200ms] flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link
                  href="#projects"
                  className="px-8 py-3.5 bg-primary-600 text-white rounded-xl hover:bg-primary-700 transition-all duration-200 flex items-center justify-center gap-2 font-medium shadow-lg shadow-primary-200 dark:shadow-primary-900/30 hover:scale-[1.02]"
                >
                  {t.ctaProjects}
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <a
                  href={cvHref}
                  download
                  className="px-8 py-3.5 border border-gray-300 dark:border-[#2a2a44] text-gray-800 dark:text-gray-200 rounded-xl hover:bg-gray-50 dark:hover:bg-white/5 transition-all duration-200 flex items-center justify-center gap-2 font-medium"
                >
                  <Download className="h-4 w-4" />
                  {downloadCv}
                </a>
              </div>
            </div>

            {/* Right — real screenshot of the Ivolution work */}
            <figure className="animate-fade-up motion-reduce:animate-none [animation-delay:150ms] max-w-xl mx-auto lg:max-w-none w-full">
              <div className="rounded-2xl overflow-hidden border border-gray-200 dark:border-[#1e1e32] shadow-2xl shadow-black/10 dark:shadow-black/40 bg-white">
                <Image
                  src="/ivolution-dashboard.png"
                  alt={t.heroImageAlt}
                  width={1054}
                  height={615}
                  priority
                  sizes="(max-width: 1024px) 100vw, 560px"
                  className="w-full h-auto"
                />
              </div>
              <figcaption className="mt-3 text-sm text-gray-500 dark:text-gray-400 text-center lg:text-left">
                {t.heroCaption}
              </figcaption>
            </figure>

          </div>
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="border-y border-gray-100 dark:border-[#1e1e32] py-10 bg-white dark:bg-[#0a0a14]">
        <div className="container mx-auto px-4 max-w-4xl">
          <p className="text-center text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-6">
            {t.statsCaption}
          </p>
          <div className="grid grid-cols-3 gap-4 divide-x divide-gray-100 dark:divide-[#1e1e32]">
            {stats.map((s) => (
              <div key={s.id} className="text-center px-2">
                <p className="text-2xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white tabular-nums">
                  {s.value.toLocaleString(intlLocale[lang])}{s.suffix}
                </p>
                <p className="text-xs md:text-sm font-medium text-gray-600 dark:text-gray-400 mt-1">{t.stats[s.id]}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Proyectos destacados ── */}
      <section id="projects" className="bg-background-alt py-20 scroll-mt-16">
        <div className="container mx-auto px-4 max-w-5xl">
          <motion.div
            variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">{t.featured.title}</h2>
            <p className="text-gray-500 dark:text-gray-400 text-sm">{t.featured.subtitle}</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {featuredProjects.map((p, i) => (
              <motion.div
                key={p.id}
                variants={fadeUp} initial="hidden" whileInView="visible"
                viewport={{ once: true, margin: '-60px' }} custom={i * 0.1}
                className={`bg-gradient-to-br ${p.color} rounded-2xl border ${p.border} p-7 hover:shadow-lg hover:-translate-y-1 transition-all duration-300`}
              >
                <span className={`inline-block text-xs font-semibold px-3 py-1 rounded-full mb-4 ${p.labelColor}`}>
                  {t.featured[p.id].label}
                </span>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">{t.featured[p.id].title}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-3 font-medium">{t.featured[p.id].company}</p>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-5">{t.featured[p.id].description}</p>
                <div className="flex flex-wrap gap-1.5">
                  {p.tags.map((tag) => (
                    <span key={tag} className={`px-2.5 py-0.5 text-xs font-medium rounded-full ${p.tagColor}`}>
                      {tag}
                    </span>
                  ))}
                </div>
                {p.href.startsWith('/') ? (
                  <Link
                    href={href(p.href)}
                    className={`inline-flex items-center gap-1.5 mt-5 text-sm font-medium transition-colors ${p.linkColor}`}
                  >
                    {t.featured.viewCase} <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                ) : (
                  <a
                    href={p.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-1.5 mt-5 text-sm font-medium transition-colors ${p.linkColor}`}
                  >
                    {p.href.includes('github.com') ? t.featured.viewCode : t.featured.viewProject}{' '}
                    <ArrowRight className="h-3.5 w-3.5" />
                  </a>
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
                href={href('/data-science')}
                className="inline-flex items-center gap-2 text-primary-700 dark:text-primary-400 font-medium hover:text-primary-900 dark:hover:text-primary-300 transition-colors text-sm"
              >
                {t.featured.viewAllData} <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href={href('/web-projects')}
                className="inline-flex items-center gap-2 text-primary-700 dark:text-primary-400 font-medium hover:text-primary-900 dark:hover:text-primary-300 transition-colors text-sm"
              >
                {t.featured.viewAllFullStack} <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Live Dashboards ── (always dark) */}
      <section className="py-16 bg-[#080810]">
        <div className="container mx-auto px-4 max-w-5xl">
          <motion.div
            variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}
            className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8"
          >
            <div>
              <p className="text-xs font-semibold uppercase tracking-[4px] text-indigo-400 mb-2">{t.live.kicker}</p>
              <h2 className="text-2xl font-bold text-white">{t.live.title}</h2>
              <p className="text-zinc-400 text-sm mt-1">{t.live.subtitle}</p>
            </div>
            <Link
              href={href('/dashboards')}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium text-indigo-400 border border-indigo-500/30 hover:bg-indigo-500/10 transition-all whitespace-nowrap"
            >
              {t.live.viewAll} <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-4">
            {liveDashboards.map((d) => (
              <motion.a
                key={d.id}
                href={d.url}
                target="_blank"
                rel="noopener noreferrer"
                variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                className="group p-6 rounded-2xl transition-all hover:-translate-y-1"
                style={{ background: '#0f0f17', border: `1px solid #1e1e32` }}
              >
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-2.5">
                    <d.Icon size={16} style={{ color: d.color }} aria-hidden="true" />
                    <span className="font-semibold text-white text-sm">{dashboards.items[d.id].title}</span>
                  </div>
                  <div className="flex items-center gap-2 flex-shrink-0">
                    <span className="flex items-center gap-1 text-[10px] px-1.5 py-0.5 rounded-full whitespace-nowrap"
                      style={{ background: '#22c55e18', color: '#22c55e', border: '1px solid #22c55e30' }}>
                      <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse motion-reduce:animate-none" />
                      {dashboards.live}
                    </span>
                    <ExternalLink size={12} className="text-zinc-500 group-hover:text-zinc-300 transition-colors" aria-hidden="true" />
                  </div>
                </div>
                <p className="text-zinc-400 text-xs leading-relaxed mb-4">{t.live[`${d.id}Sub`]}</p>
                <div className="flex gap-1.5 flex-wrap">
                  {d.tags.map(tag => (
                    <span key={tag} className="text-[10px] px-2 py-0.5 rounded"
                      style={{ background: `${d.color}12`, color: d.color }}>
                      {tag}
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
            className="text-3xl font-bold text-center mb-12 text-secondary-500 dark:text-secondary-400"
          >
            {t.specialties.title}
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {([
              { id: 'analytics', Icon: BarChart3, box: 'bg-blue-50 dark:bg-blue-950/50', icon: 'text-blue-600 dark:text-blue-400', dot: 'bg-blue-500' },
              { id: 'web', Icon: Code2, box: 'bg-primary-50 dark:bg-primary-900/30', icon: 'text-primary-700 dark:text-primary-400', dot: 'bg-primary-500' },
              { id: 'automation', Icon: Zap, box: 'bg-orange-50 dark:bg-orange-950/40', icon: 'text-orange-500 dark:text-orange-400', dot: 'bg-orange-500' },
            ] as const).map((s, i) => (
              <motion.div
                key={s.id}
                variants={fadeUp} initial="hidden" whileInView="visible"
                viewport={{ once: true, margin: '-60px' }} custom={i * 0.1}
                className="bg-white dark:bg-[#0f0f17] p-7 rounded-2xl border border-gray-200 dark:border-[#1e1e32] hover:shadow-xl dark:hover:shadow-[#1e1e32]/50 hover:-translate-y-1 transition-all duration-300"
              >
                <div className={`w-11 h-11 rounded-xl ${s.box} flex items-center justify-center mb-4`}>
                  <s.Icon className={`h-5 w-5 ${s.icon}`} aria-hidden="true" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">{t.specialties[s.id].title}</h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-4">
                  {t.specialties[s.id].body}
                </p>
                <ul className="space-y-1.5 text-sm text-gray-600 dark:text-gray-400">
                  {t.specialties[s.id].items.map(item => (
                    <li key={item} className="flex items-center gap-2">
                      <span className={`w-1.5 h-1.5 rounded-full ${s.dot} flex-shrink-0`} />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
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
            {workTogether.title}
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-lg mx-auto">
            {workTogether.body}
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href={href('/contact')}
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-xl hover:from-primary-700 hover:to-primary-800 transition-all duration-200 font-medium shadow-lg shadow-primary-200 dark:shadow-primary-900/30 hover:scale-[1.02]"
            >
              {workTogether.cta}
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href={href('/about')}
              className="inline-flex items-center gap-2 px-8 py-3.5 border-2 border-primary-200 dark:border-primary-700/50 text-primary-700 dark:text-primary-400 rounded-xl hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-all font-medium"
            >
              {t.aboutMe}
            </Link>
          </div>
        </motion.div>
      </section>

    </div>
  )
}
