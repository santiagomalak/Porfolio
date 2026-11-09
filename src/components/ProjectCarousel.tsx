'use client'

import { useCallback, useEffect, useId, useRef, useState, type KeyboardEvent } from 'react'
import Link from 'next/link'
import { ArrowRight, ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react'
import type { FeaturedProject, ProjectCategory } from '@/data/projects'
import type { Dictionary } from '@/i18n/get-dictionary'
import { format } from '@/i18n/format'

type Copy = Dictionary['home']['featured']

const CATEGORIES: ProjectCategory[] = ['data', 'dev', 'ai']
const AUTOPLAY_MS = 6000

// Same card design as the old "featured projects" grid; one accent per category.
const accents: Record<ProjectCategory, { color: string; border: string; label: string; tag: string; link: string }> = {
  data: {
    color: 'from-blue-50 to-indigo-50 dark:from-blue-950/40 dark:to-indigo-950/40',
    border: 'border-blue-200 dark:border-blue-900/50',
    label: 'bg-blue-100 text-blue-700 dark:bg-blue-950/60 dark:text-blue-400',
    tag: 'bg-blue-50 text-blue-700 dark:bg-blue-950/60 dark:text-blue-400',
    link: 'text-blue-700 dark:text-blue-400',
  },
  dev: {
    color: 'from-amber-50 to-orange-50 dark:from-amber-950/30 dark:to-orange-950/30',
    border: 'border-amber-200 dark:border-amber-900/50',
    label: 'bg-amber-100 text-amber-800 dark:bg-amber-950/60 dark:text-amber-400',
    tag: 'bg-amber-50 text-amber-800 dark:bg-amber-950/60 dark:text-amber-400',
    link: 'text-amber-700 dark:text-amber-400',
  },
  ai: {
    color: 'from-purple-50 to-violet-50 dark:from-purple-950/40 dark:to-violet-950/40',
    border: 'border-purple-200 dark:border-purple-900/50',
    label: 'bg-purple-100 text-purple-700 dark:bg-purple-950/60 dark:text-purple-400',
    tag: 'bg-purple-50 text-purple-700 dark:bg-purple-950/60 dark:text-purple-400',
    link: 'text-purple-700 dark:text-purple-400',
  },
}

function ProjectSlideCard({ p, t }: { p: FeaturedProject; t: Copy }) {
  const a = accents[p.category]
  const cta = !p.external ? t.viewCase : p.href.includes('github.com') ? t.viewCode : t.viewProject
  // The title link is stretched over the whole card, so the entire card is clickable
  // while the link's accessible name stays the project title.
  const stretch = 'after:absolute after:inset-0 after:rounded-2xl after:content-[""] focus-visible:outline-none'

  return (
    <article
      className={`group relative h-full flex flex-col bg-gradient-to-br ${a.color} rounded-2xl border ${a.border} p-7 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 motion-reduce:transition-none motion-reduce:hover:translate-y-0 focus-within:ring-2 focus-within:ring-primary-500 focus-within:ring-offset-2 focus-within:ring-offset-background`}
    >
      <span className={`self-start inline-block text-xs font-semibold px-3 py-1 rounded-full mb-4 ${a.label}`}>
        {t.origins[p.origin]} · {t.statuses[p.status]}
      </span>
      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
        {p.external ? (
          <a href={p.href} target="_blank" rel="noopener noreferrer" className={stretch}>{p.title}</a>
        ) : (
          <Link href={p.href} className={stretch}>{p.title}</Link>
        )}
      </h3>
      <p className="text-sm text-gray-500 dark:text-gray-400 mb-3 font-medium">
        {p.company ? `${p.company} · ${t.tabs[p.category]}` : t.tabs[p.category]}
      </p>
      <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-5">{p.summary}</p>
      <div className="flex flex-wrap gap-1.5">
        {p.tags.map((tag) => (
          <span key={tag} className={`px-2.5 py-0.5 text-xs font-medium rounded-full ${a.tag}`}>{tag}</span>
        ))}
      </div>
      <span aria-hidden="true" className={`mt-auto pt-5 inline-flex items-center gap-1.5 text-sm font-medium ${a.link}`}>
        {cta} <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform" />
      </span>
    </article>
  )
}

export default function ProjectCarousel({ projects, t, allHref }: {
  projects: FeaturedProject[]
  t: Copy
  /** "See all projects" target per tab (already localized). */
  allHref: Record<ProjectCategory, string>
}) {
  const uid = useId()
  const [tab, setTab] = useState<ProjectCategory>('data')
  const items = projects.filter((p) => p.category === tab)

  const rootRef = useRef<HTMLDivElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)
  const tabRefs = useRef<Record<ProjectCategory, HTMLButtonElement | null>>({ data: null, dev: null, ai: null })

  const [index, setIndex] = useState(0)
  const [pages, setPages] = useState(items.length)
  // Autoplay starts only after mount, and never when the OS asks for reduced motion.
  const [playing, setPlaying] = useState(false)
  const [reducedMotion, setReducedMotion] = useState(false)
  const [hovered, setHovered] = useState(false)
  const [focused, setFocused] = useState(false)
  const [inView, setInView] = useState(false)
  const [pageHidden, setPageHidden] = useState(false)

  /** Width of one slide plus the gap, and how many slides fit at once. */
  const measure = useCallback(() => {
    const track = trackRef.current
    const first = track?.firstElementChild as HTMLElement | null
    if (!track || !first) return null
    const gap = parseFloat(getComputedStyle(track).columnGap) || 0
    const step = first.offsetWidth + gap
    const perView = Math.max(1, Math.round((track.clientWidth + gap) / step))
    return { step, perView }
  }, [])

  const updatePages = useCallback(() => {
    const m = measure()
    if (m) setPages(Math.max(1, items.length - m.perView + 1))
  }, [measure, items.length])

  const goTo = useCallback((i: number, instant = false) => {
    const track = trackRef.current
    const m = measure()
    if (!track || !m) return
    track.scrollTo({ left: i * m.step, behavior: instant || reducedMotion ? 'auto' : 'smooth' })
  }, [measure, reducedMotion])

  // Reduced motion preference.
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    const apply = () => {
      setReducedMotion(mq.matches)
      setPlaying(!mq.matches)
    }
    apply()
    mq.addEventListener('change', apply)
    return () => mq.removeEventListener('change', apply)
  }, [])

  // Pause while off screen or in a background tab.
  useEffect(() => {
    const el = rootRef.current
    if (!el) return
    const io = new IntersectionObserver(([e]) => setInView(e.isIntersecting), { threshold: 0.3 })
    io.observe(el)
    const onVisibility = () => setPageHidden(document.hidden)
    document.addEventListener('visibilitychange', onVisibility)
    return () => {
      io.disconnect()
      document.removeEventListener('visibilitychange', onVisibility)
    }
  }, [])

  // Recount pages on resize and whenever the tab changes.
  useEffect(() => {
    updatePages()
    window.addEventListener('resize', updatePages)
    return () => window.removeEventListener('resize', updatePages)
  }, [updatePages])

  useEffect(() => {
    setIndex(0)
    goTo(0, true)
  }, [tab, goTo])

  // Autoplay: one timer per position, so manual moves restart the countdown.
  const autoplay = playing && !hovered && !focused && inView && !pageHidden && pages > 1
  useEffect(() => {
    if (!autoplay) return
    const id = window.setTimeout(() => goTo((index + 1) % pages), AUTOPLAY_MS)
    return () => window.clearTimeout(id)
  }, [autoplay, index, pages, goTo])

  const onScroll = () => {
    const track = trackRef.current
    const m = measure()
    if (!track || !m) return
    setIndex(Math.min(pages - 1, Math.round(track.scrollLeft / m.step)))
  }

  const onTabKey = (e: KeyboardEvent<HTMLButtonElement>) => {
    const i = CATEGORIES.indexOf(tab)
    let next: number | null = null
    if (e.key === 'ArrowRight') next = (i + 1) % CATEGORIES.length
    if (e.key === 'ArrowLeft') next = (i - 1 + CATEGORIES.length) % CATEGORIES.length
    if (e.key === 'Home') next = 0
    if (e.key === 'End') next = CATEGORIES.length - 1
    if (next === null) return
    e.preventDefault()
    setTab(CATEGORIES[next])
    tabRefs.current[CATEGORIES[next]]?.focus()
  }

  const controlBtn = 'w-10 h-10 rounded-full flex items-center justify-center border border-gray-300 dark:border-[#2a2a44] bg-white dark:bg-[#0f0f17] text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-white/5 disabled:opacity-40 disabled:cursor-not-allowed transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500'

  return (
    <div
      ref={rootRef}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocus={() => setFocused(true)}
      onBlur={(e) => { if (!e.currentTarget.contains(e.relatedTarget as Node | null)) setFocused(false) }}
    >
      {/* Tabs */}
      <div role="tablist" aria-label={t.tabsLabel} className="flex justify-center gap-2 mb-8">
        {CATEGORIES.map((c) => {
          const selected = c === tab
          return (
            <button
              key={c}
              ref={(el) => { tabRefs.current[c] = el }}
              id={`${uid}-tab-${c}`}
              role="tab"
              type="button"
              aria-selected={selected}
              aria-controls={`${uid}-panel`}
              tabIndex={selected ? 0 : -1}
              onClick={() => setTab(c)}
              onKeyDown={onTabKey}
              className={`px-5 py-2 rounded-full text-sm font-semibold border transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 ${
                selected
                  ? 'bg-primary-600 border-primary-600 text-white'
                  : 'bg-white dark:bg-[#0f0f17] border-gray-200 dark:border-[#1e1e32] text-gray-700 dark:text-gray-300 hover:border-primary-400'
              }`}
            >
              {t.tabs[c]}
            </button>
          )
        })}
      </div>

      {/* Carousel */}
      <section
        id={`${uid}-panel`}
        role="tabpanel"
        aria-labelledby={`${uid}-tab-${tab}`}
        aria-roledescription="carousel"
        aria-label={t.carouselLabel}
      >
        <div
          ref={trackRef}
          onScroll={onScroll}
          aria-live={autoplay ? 'off' : 'polite'}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory py-2 -my-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {items.map((p, i) => (
            <div
              key={p.id}
              role="group"
              aria-roledescription="slide"
              aria-label={format(t.slideOf, { n: i + 1, total: items.length })}
              className={`snap-start shrink-0 w-full ${items.length > 1 ? 'md:w-[calc(50%-12px)]' : 'md:max-w-2xl md:mx-auto'}`}
            >
              <ProjectSlideCard p={p} t={t} />
            </div>
          ))}
        </div>

        {/* Controls (only when there's somewhere to go) */}
        {pages > 1 && (
          <div className="flex items-center justify-center gap-4 mt-8">
            <button type="button" className={controlBtn} onClick={() => goTo(index - 1)} disabled={index === 0} aria-label={t.previous}>
              <ChevronLeft className="h-5 w-5" aria-hidden="true" />
            </button>
            <div className="flex items-center gap-1">
              {Array.from({ length: pages }, (_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => goTo(i)}
                  aria-label={format(t.goTo, { n: i + 1 })}
                  aria-current={i === index ? 'true' : undefined}
                  className="w-6 h-6 flex items-center justify-center rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500"
                >
                  <span className={`block h-2 rounded-full transition-all ${i === index ? 'w-5 bg-primary-600 dark:bg-primary-400' : 'w-2 bg-gray-300 dark:bg-gray-600'}`} />
                </button>
              ))}
            </div>
            <button type="button" className={controlBtn} onClick={() => goTo(index + 1)} disabled={index >= pages - 1} aria-label={t.next}>
              <ChevronRight className="h-5 w-5" aria-hidden="true" />
            </button>
            <button
              type="button"
              className={controlBtn}
              onClick={() => setPlaying((v) => !v)}
              aria-label={playing ? t.pause : t.play}
            >
              {playing ? <Pause className="h-4 w-4" aria-hidden="true" /> : <Play className="h-4 w-4" aria-hidden="true" />}
            </button>
          </div>
        )}
      </section>

      <div className="text-center mt-10">
        <Link
          href={allHref[tab]}
          className="inline-flex items-center gap-2 text-primary-700 dark:text-primary-400 font-medium hover:text-primary-900 dark:hover:text-primary-300 transition-colors text-sm"
        >
          {t.viewAll} <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Link>
      </div>
    </div>
  )
}
