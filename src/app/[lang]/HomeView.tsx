'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Award, Database, Download, ExternalLink, GraduationCap, Landmark, Linkedin, Mail, TrendingUp } from 'lucide-react'
import { motion } from 'framer-motion'
import ProjectCarousel from '@/components/ProjectCarousel'
import TechRibbon from '@/components/TechRibbon'
import type { FeaturedProject, ProjectCategory } from '@/data/projects'
import { SITE_NAME, intlLocale, type Locale } from '@/i18n/config'
import type { Dictionary } from '@/i18n/get-dictionary'
import { localizePath } from '@/i18n/routing'

type HomeCopy = Dictionary['home']

/** One education entry resolved for the current language (data + dictionary text). */
export interface StudyCard {
  id: string
  badge: string
  title: string
  institution: string
  period: string
  certificateUrl?: string
  color: string
  border: string
  tag: string
}

const EMAIL = 'santiagoaragonmalak@gmail.com'
const LINKEDIN = 'https://www.linkedin.com/in/aragonmalak/'

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

export default function HomeView({
  lang, t, roleShort, downloadCv, cvHref, featured, ribbon, studies, dashboards, workTogether,
}: {
  lang: Locale
  t: HomeCopy
  roleShort: string
  downloadCv: string
  cvHref: string
  featured: FeaturedProject[]
  ribbon: { data: string[]; complements: string[] }
  studies: StudyCard[]
  dashboards: Pick<Dictionary['dashboards'], 'live' | 'items'>
  workTogether: Dictionary['common']['workTogether']
}) {
  const href = (path: string) => localizePath(lang, path)
  const allProjectsHref: Record<ProjectCategory, string> = {
    data: href('/data-science'),
    dev: href('/web-projects'),
    ai: href('/web-projects'),
  }

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

      {/* ── Proyectos destacados (carousel) ── */}
      <section id="projects" className="bg-background-alt py-20 scroll-mt-16">
        <div className="container mx-auto px-4 max-w-5xl">
          <motion.div
            variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}
            className="text-center mb-8"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">{t.featured.title}</h2>
            <p className="text-gray-500 dark:text-gray-400 text-sm">{t.featured.subtitle}</p>
          </motion.div>

          <ProjectCarousel projects={featured} t={t.featured} allHref={allProjectsHref} />
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

      {/* ── Herramientas ── */}
      <TechRibbon t={t.tools} rows={ribbon} />

      {/* ── Estudios ── */}
      <section className="bg-background-alt py-20">
        <div className="container mx-auto px-4 max-w-5xl">
          <motion.div
            variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}
            className="text-center mb-10"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">{t.studies.title}</h2>
            <p className="text-gray-500 dark:text-gray-400 text-sm">{t.studies.subtitle}</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-5">
            {studies.map((s, i) => (
              <motion.div
                key={s.id}
                variants={fadeUp} initial="hidden" whileInView="visible"
                viewport={{ once: true, margin: '-60px' }} custom={i * 0.1}
                className={`flex flex-col bg-gradient-to-br ${s.color} rounded-2xl border ${s.border} p-6`}
              >
                <span className={`self-start inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full mb-4 ${s.tag}`}>
                  <GraduationCap className="h-3.5 w-3.5" aria-hidden="true" />
                  {s.badge}
                </span>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white leading-snug mb-2">{s.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 font-medium">{s.institution}</p>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 mb-5">{s.period}</p>
                {s.certificateUrl ? (
                  <a
                    href={s.certificateUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto self-start inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium bg-white dark:bg-[#0f0f17] border border-gray-200 dark:border-[#2a2a44] text-gray-800 dark:text-gray-200 hover:border-primary-400 dark:hover:border-primary-600 transition-colors"
                  >
                    <Award className="h-4 w-4" aria-hidden="true" />
                    {t.studies.viewCertificate}
                    <ExternalLink className="h-3.5 w-3.5 opacity-60" aria-hidden="true" />
                  </a>
                ) : (
                  // No public certificate yet (degree still in progress).
                  <span className="mt-auto self-start inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium border border-dashed border-gray-300 dark:border-[#2a2a44] text-gray-500 dark:text-gray-400">
                    <Award className="h-4 w-4" aria-hidden="true" />
                    {t.studies.pending}
                  </span>
                )}
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href={href('/certifications')}
              className="inline-flex items-center gap-2 text-primary-700 dark:text-primary-400 font-medium hover:text-primary-900 dark:hover:text-primary-300 transition-colors text-sm"
            >
              {t.studies.allCertifications} <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="container mx-auto px-4 py-20">
        <motion.div
          variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}
          className="max-w-3xl mx-auto text-center bg-gradient-to-br from-primary-50 to-purple-50 dark:from-primary-900/20 dark:to-purple-900/20 p-8 md:p-12 rounded-3xl border border-primary-200 dark:border-primary-800/50"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-3 text-gray-900 dark:text-white">
            {workTogether.title}
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-2 max-w-xl mx-auto">
            {workTogether.body}
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-8 max-w-xl mx-auto">
            {workTogether.freelance}
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap gap-3 justify-center">
            <Link
              href={href('/contact')}
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-xl hover:from-primary-700 hover:to-primary-800 transition-all duration-200 font-medium shadow-lg shadow-primary-200 dark:shadow-primary-900/30 hover:scale-[1.02]"
            >
              {workTogether.cta}
              <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href={`mailto:${EMAIL}`}
              className="inline-flex items-center justify-center gap-2 px-4 py-3.5 border-2 border-primary-200 dark:border-primary-700/50 text-primary-700 dark:text-primary-400 rounded-xl hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-all font-medium text-[13px] sm:text-base whitespace-nowrap"
            >
              <Mail className="h-4 w-4 flex-shrink-0" aria-hidden="true" />
              {EMAIL}
            </a>
            <a
              href={LINKEDIN}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-3.5 border-2 border-primary-200 dark:border-primary-700/50 text-primary-700 dark:text-primary-400 rounded-xl hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-all font-medium"
            >
              <Linkedin className="h-4 w-4" aria-hidden="true" />
              LinkedIn
            </a>
          </div>
        </motion.div>
      </section>

    </div>
  )
}
