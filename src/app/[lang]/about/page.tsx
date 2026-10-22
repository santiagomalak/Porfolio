import type { Metadata } from 'next'
import Link from 'next/link'
import {
  ArrowRight, Briefcase, Code2, Database, ExternalLink, Rocket, Download, Globe, Zap, Shield, GraduationCap,
} from 'lucide-react'
import Reveal from '@/components/Reveal'
import { SITE_NAME, cvPath, toLocale } from '@/i18n/config'
import { getDictionary } from '@/i18n/get-dictionary'
import { pageMetadata } from '@/i18n/metadata'
import { localizePath } from '@/i18n/routing'

type Props = { params: { lang: string } }

export function generateMetadata({ params }: Props): Metadata {
  const lang = toLocale(params.lang)
  return pageMetadata(lang, '/about', getDictionary(lang).meta.about)
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

// Tool names are language-neutral; only the security skills are translated
// (they come from the dictionary, matched to these colors by position).
const techStack = [
  {
    id: 'data',
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
  {
    id: 'fullstack',
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
  {
    id: 'ai',
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
] as const

const securityColors = [chip.indigo, chip.teal, chip.purple, chip.gray]

const jobs = [
  { id: 'codingClick', tags: ['Next.js', 'React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Supabase', 'n8n', 'Make', 'Docker', 'Vercel'] },
  { id: 'ivolution', tags: ['SQL', 'BigQuery', 'dbt', 'Metabase', 'Python', 'n8n'] },
] as const

const educationIds = ['upso', 'dsml', 'cyber'] as const

const languageBars = [
  { code: 'es', flag: '🇦🇷', bar: 100, color: 'bg-primary-600' },
  { code: 'en', flag: '🇬🇧', bar: 50, color: 'bg-indigo-500' },
  { code: 'pt', flag: '🇧🇷', bar: 85, color: 'bg-secondary-500' },
] as const

const sectionTitle = 'text-2xl font-bold mb-10 flex items-center gap-3 text-gray-900 dark:text-white'
const card = 'bg-white dark:bg-[#0f0f17] rounded-2xl border border-gray-200 dark:border-[#1e1e32]'

export default function AboutPage({ params }: Props) {
  const lang = toLocale(params.lang)
  const dict = getDictionary(lang)
  const t = dict.about
  const href = (path: string) => localizePath(lang, path)

  const stackCards = [
    ...techStack.map((c) => ({ id: c.id, icon: c.icon, skills: c.skills.map((s) => ({ ...s })) })),
    {
      id: 'security' as const,
      icon: Shield,
      skills: t.securitySkills.map((name, i) => ({ name, color: securityColors[i % securityColors.length] })),
    },
  ]

  return (
    <div className="min-h-screen bg-background">

      {/* ── Hero ── */}
      <section className="container mx-auto px-4 pt-16 pb-12 max-w-4xl">
        <Reveal>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-50 dark:bg-primary-900/20 border border-primary-200 dark:border-primary-700/50 text-primary-700 dark:text-primary-400 text-sm font-medium mb-8">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            {t.badge}
          </div>
        </Reveal>

        <Reveal delay={80}>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            {t.greeting}{' '}
            <span className="text-gradient">{SITE_NAME}</span>
          </h1>
        </Reveal>

        <Reveal delay={160}>
          <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-3xl mb-8">
            {t.intro}
          </p>
        </Reveal>

        <Reveal delay={240}>
          <div className="flex flex-wrap gap-3">
            <Link
              href={href('/contact')}
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary-600 text-white rounded-xl hover:bg-primary-700 transition-all font-medium shadow-lg shadow-primary-200 dark:shadow-primary-900/30 hover:scale-[1.02]"
            >
              {t.contactMe}
              <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href={cvPath[lang]}
              download
              className="inline-flex items-center gap-2 px-6 py-3 bg-white dark:bg-[#0f0f17] border-2 border-primary-200 dark:border-primary-700/50 text-primary-700 dark:text-primary-400 rounded-xl hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-all font-medium hover:scale-[1.02]"
            >
              <Download className="h-4 w-4" />
              {dict.common.downloadCv}
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
          </div>
        </Reveal>
      </section>

      {/* ── Experiencia ── */}
      <section className="bg-background-alt py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <Reveal>
            <h2 className={sectionTitle}>
              <div className="w-8 h-8 rounded-lg bg-primary-600 flex items-center justify-center">
                <Briefcase className="h-4 w-4 text-white" />
              </div>
              {t.experience}
            </h2>
          </Reveal>

          <div className="space-y-6">
            {jobs.map((job, i) => {
              const j = t.jobs[job.id]
              return (
                <Reveal
                  key={job.id}
                  delay={i * 100}
                  className={`${card} p-6 hover:shadow-md dark:hover:shadow-[#1e1e32]/50 transition-shadow`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 sm:gap-4 mb-3">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{j.role}</h3>
                      <p className="text-primary-700 dark:text-primary-400 font-medium">{j.company}</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">{j.location}</p>
                    </div>
                    <span className="self-start text-sm text-gray-500 dark:text-gray-400 bg-gray-50 dark:bg-[#111120] px-3 py-1 rounded-full border border-gray-200 dark:border-[#1e1e32] whitespace-nowrap">
                      {j.period}
                    </span>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed mb-3">{j.summary}</p>
                  <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                    {j.bullets.map((b) => (
                      <li key={b} className="flex gap-2">
                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary-500 flex-shrink-0" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {job.tags.map((tag) => (
                      <span key={tag} className="px-2.5 py-1 bg-primary-50 dark:bg-primary-900/30 text-primary-700 dark:text-primary-400 text-xs font-medium rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── Building Now ── */}
      <section className="container mx-auto px-4 py-16 max-w-4xl">
        <Reveal>
          <h2 className={sectionTitle}>
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary-600 to-secondary-500 flex items-center justify-center">
              <Rocket className="h-4 w-4 text-white" />
            </div>
            {t.building}
          </h2>
        </Reveal>

        <div className="space-y-6">
          {/* StackAdvisor */}
          <Reveal className="bg-gradient-to-br from-primary-50 to-purple-50 dark:from-primary-900/20 dark:to-purple-900/20 rounded-2xl border border-primary-200 dark:border-primary-800/50 p-8 group hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300">
            <div className="flex items-start justify-between gap-4 mb-4 flex-wrap">
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">StackAdvisor</h3>
                <p className="text-primary-700 dark:text-primary-400 font-medium text-sm">{t.stackadvisor.kind}</p>
              </div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-green-100 dark:bg-green-950/50 text-green-700 dark:text-green-400 text-xs font-semibold rounded-full border border-green-200 dark:border-green-800/50">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                Live
              </span>
            </div>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-5">
              {t.stackadvisor.body}
            </p>
            <div className="flex flex-wrap gap-2 mb-5">
              {['Next.js', 'TypeScript', 'Tailwind CSS', 'Gemini', 'Decision Engine', 'SaaS'].map((tag) => (
                <span key={tag} className="px-2.5 py-1 bg-white dark:bg-[#111120] border border-primary-200 dark:border-primary-800/50 text-primary-700 dark:text-primary-400 text-xs font-medium rounded-full">
                  {tag}
                </span>
              ))}
            </div>
            <a
              href="https://stackadvisor-nu.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary-700 dark:text-primary-400 hover:text-primary-900 dark:hover:text-primary-300 transition-colors"
            >
              {t.stackadvisor.visit}
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </Reveal>

          {/* Job Hunting Automation */}
          <Reveal delay={100} className="bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-950/20 dark:to-amber-950/20 rounded-2xl border border-orange-200 dark:border-orange-800/50 p-8">
            <div className="flex items-start justify-between gap-4 mb-4 flex-wrap">
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">Job Hunting Automation</h3>
                <p className="text-orange-700 dark:text-orange-400 font-medium text-sm">{t.jobHunting.kind}</p>
              </div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-orange-100 dark:bg-orange-950/50 text-orange-700 dark:text-orange-400 text-xs font-semibold rounded-full border border-orange-200 dark:border-orange-800/50">
                <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse" />
                n8n + LLMs
              </span>
            </div>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-5">
              {t.jobHunting.body}
            </p>
            <div className="flex flex-wrap gap-2">
              {['n8n', 'Claude API', 'Telegram API', 'Google Sheets', 'Scraping'].map((tag) => (
                <span key={tag} className="px-2.5 py-1 bg-white dark:bg-[#111120] border border-orange-200 dark:border-orange-800/50 text-orange-700 dark:text-orange-400 text-xs font-medium rounded-full">
                  {tag}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Tech Stack ── */}
      <section className="bg-background-alt py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <Reveal>
            <h2 className={sectionTitle}>
              <div className="w-8 h-8 rounded-lg bg-secondary-500 flex items-center justify-center">
                <Code2 className="h-4 w-4 text-white" />
              </div>
              {t.stack}
            </h2>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-6">
            {stackCards.map(({ id, icon: Icon, skills }, catIdx) => (
              <Reveal key={id} delay={catIdx * 100} className={`${card} p-6`}>
                <div className="flex items-center gap-2 mb-5">
                  <Icon className="h-5 w-5 text-primary-700 dark:text-primary-400" />
                  <h3 className="font-semibold text-gray-900 dark:text-white">{t.stackCategories[id]}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <span key={skill.name} className={`px-3 py-1.5 text-xs font-medium rounded-lg border ${skill.color}`}>
                      {skill.name}
                    </span>
                  ))}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Formación ── */}
      <section className="container mx-auto px-4 pt-16 max-w-4xl">
        <Reveal>
          <h2 className="text-2xl font-bold mb-8 flex items-center gap-3 text-gray-900 dark:text-white">
            <div className="w-8 h-8 rounded-lg bg-secondary-500 flex items-center justify-center">
              <GraduationCap className="h-4 w-4 text-white" />
            </div>
            {t.education}
          </h2>
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {educationIds.map((id, i) => {
            const e = t.educationList[id]
            return (
              <Reveal key={id} delay={i * 100} className={`${card} p-6`}>
                <h3 className="font-semibold text-gray-900 dark:text-white leading-snug mb-2">{e.title}</h3>
                <p className="text-sm text-primary-700 dark:text-primary-400 font-medium">{e.institution}</p>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{e.period}</p>
              </Reveal>
            )
          })}
        </div>
        <Link
          href={href('/certifications')}
          className="inline-flex items-center gap-2 mt-6 text-sm font-medium text-primary-700 dark:text-primary-400 hover:text-primary-900 dark:hover:text-primary-300 transition-colors"
        >
          {t.allCertifications} <ArrowRight className="h-4 w-4" />
        </Link>
      </section>

      {/* ── Idiomas ── */}
      <section className="container mx-auto px-4 py-12 max-w-4xl">
        <Reveal>
          <h2 className="text-2xl font-bold mb-8 flex items-center gap-3 text-gray-900 dark:text-white">
            <div className="w-8 h-8 rounded-lg bg-primary-600 flex items-center justify-center">
              <Globe className="h-4 w-4 text-white" />
            </div>
            {t.languages}
          </h2>
        </Reveal>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {languageBars.map((l, i) => (
            <Reveal key={l.code} delay={i * 100} className={`${card} p-6`}>
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="font-bold text-gray-900 dark:text-white">{t.languageList[l.code].name}</h3>
                  <p className="text-sm text-primary-700 dark:text-primary-400 font-medium">{t.languageList[l.code].level}</p>
                </div>
                <span className="text-2xl" aria-hidden="true">{l.flag}</span>
              </div>
              <p className="text-xs text-gray-500 dark:text-gray-400 mb-4">{t.languageList[l.code].detail}</p>
              <div className="w-full bg-gray-100 dark:bg-[#1e1e32] rounded-full h-1.5">
                <div className={`${l.color} h-1.5 rounded-full`} style={{ width: `${l.bar}%` }} />
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── Filosofía ── */}
      <section className="container mx-auto px-4 py-16 max-w-4xl">
        <Reveal className="bg-gradient-to-br from-primary-600 to-secondary-500 rounded-3xl p-10 text-white text-center">
          <div className="text-4xl mb-6">💡</div>
          <blockquote className="text-xl md:text-2xl font-medium leading-relaxed mb-6 opacity-95">
            {t.philosophy}
          </blockquote>
          <p className="opacity-80 text-sm">{t.philosophyCaption}</p>
        </Reveal>
      </section>

      {/* ── CTA ── */}
      <section className="container mx-auto px-4 pb-20 max-w-4xl text-center">
        <Reveal>
          <h2 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">{dict.common.workTogether.title}</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-lg mx-auto">
            {dict.common.workTogether.body}
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href={href('/contact')}
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-primary-600 text-white rounded-xl hover:bg-primary-700 transition-all font-medium shadow-lg shadow-primary-200 dark:shadow-primary-900/30 hover:scale-[1.02]"
            >
              {dict.common.workTogether.cta}
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href={href('/web-projects')}
              className="inline-flex items-center gap-2 px-8 py-3.5 border-2 border-primary-200 dark:border-primary-700/50 text-primary-700 dark:text-primary-400 rounded-xl hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-all font-medium"
            >
              {t.seeProjects}
            </Link>
          </div>
        </Reveal>
      </section>

    </div>
  )
}
