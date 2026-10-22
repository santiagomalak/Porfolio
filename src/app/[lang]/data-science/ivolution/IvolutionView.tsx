'use client'

import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, ExternalLink, X, ZoomIn } from 'lucide-react'
import { useState } from 'react'
import type { Locale } from '@/i18n/config'
import { format, type Dictionary } from '@/i18n/get-dictionary'
import { localizePath } from '@/i18n/routing'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1], delay },
  }),
}

const SCREENSHOTS = [
  { id: 'dashboard',     src: '/ivolution-dashboard.png' },
  { id: 'forceVelocity', src: '/ivolution-fuerza-velocidad.png' },
  { id: 'hip',           src: '/ivolution-cadera.png' },
  { id: 'comparisons',   src: '/ivolution-comparaciones.png' },
  { id: 'fatigue',       src: '/ivolution-fatiga-neuromuscular.png' },
  { id: 'athletes',      src: '/ivolution-comparaciones-atletas.png' },
] as const

export default function IvolutionView({ lang, t, common }: {
  lang: Locale
  t: Dictionary['ivolution']
  common: Dictionary['common']
}) {
  const [selected, setSelected] = useState<number | null>(null)
  const screenshots = SCREENSHOTS.map((s) => ({ ...s, ...t.screenshots[s.id] }))

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12 max-w-5xl">

        {/* Back */}
        <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={0}>
          <Link
            href={localizePath(lang, '/data-science')}
            className="inline-flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors mb-10"
          >
            <ArrowLeft className="h-4 w-4" />
            {common.backToDataScience}
          </Link>
        </motion.div>

        {/* Header */}
        <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={0.05} className="mb-12">
          <span className="inline-block text-xs font-semibold px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-950/60 text-blue-700 dark:text-blue-400 mb-4">
            {t.badge}
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight text-gray-900 dark:text-white">
            Performance Monitoring System
          </h1>
          <p className="text-xl text-gray-500 dark:text-gray-400 font-medium mb-6">Ivolution Sport Science</p>
          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-3xl">
            {t.introA} <strong>{t.introStrong}</strong> {t.introB}
          </p>
        </motion.div>

        {/* Tags */}
        <motion.div
          variants={fadeUp} initial="hidden" animate="visible" custom={0.1}
          className="flex flex-wrap gap-2 mb-12"
        >
          {['SQL', 'BigQuery', 'dbt', 'Metabase', 'Python', 'Analytics Engineering', t.multilingualTag].map(tag => (
            <span key={tag} className="px-3 py-1.5 bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-400 text-sm font-medium rounded-full border border-blue-100 dark:border-blue-900/50">
              {tag}
            </span>
          ))}
        </motion.div>

        {/* Stats */}
        <motion.div
          variants={fadeUp} initial="hidden" animate="visible" custom={0.15}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16"
        >
          {[
            { value: '967', label: t.stats.athletes },
            { value: '13', label: t.stats.sports },
            { value: '10k+', label: t.stats.measurements },
            { value: t.activeValue, label: t.stats.active },
          ].map((stat) => (
            <div key={stat.label} className="bg-white dark:bg-[#0f0f17] rounded-xl border border-gray-200 dark:border-[#1e1e32] p-5 text-center">
              <p className="text-2xl font-bold text-primary-700 dark:text-primary-400 mb-1">{stat.value}</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">{stat.label}</p>
            </div>
          ))}
        </motion.div>

        {/* Screenshots */}
        <motion.h2
          variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="text-2xl font-bold mb-2 text-gray-900 dark:text-white"
        >
          {t.screenshotsTitle}
        </motion.h2>
        <motion.p
          variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0.05}
          className="text-sm text-gray-400 dark:text-gray-500 mb-8"
        >
          {t.screenshotsHint}
        </motion.p>

        <div className="space-y-6">
          {screenshots.map((s, i) => (
            <motion.div
              key={s.src}
              variants={fadeUp} initial="hidden" whileInView="visible"
              viewport={{ once: true, margin: '-60px' }} custom={i * 0.05}
              className="bg-white dark:bg-[#0f0f17] rounded-2xl border border-gray-200 dark:border-[#1e1e32] overflow-hidden hover:shadow-lg transition-shadow"
            >
              {/* Image — clickable (a real button, so it works from the keyboard too) */}
              <button
                type="button"
                className="relative cursor-zoom-in group block w-full"
                onClick={() => setSelected(i)}
                aria-label={format(t.enlarge, { title: s.title })}
              >
                <Image
                  src={s.src}
                  alt={s.title}
                  width={1200}
                  height={675}
                  className="w-full object-cover transition-transform duration-300 group-hover:scale-[1.01]"
                  priority={i === 0}
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 rounded-full p-3 shadow-lg">
                    <ZoomIn className="h-5 w-5 text-gray-800" />
                  </div>
                </div>
              </button>
              <div className="p-6">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">{s.title}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{s.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <Link
            href={localizePath(lang, '/contact')}
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-primary-600 text-white rounded-xl hover:bg-primary-700 transition-all font-medium shadow-lg shadow-primary-200 hover:scale-[1.02]"
          >
            {common.letsTalk}
            <ExternalLink className="h-4 w-4" />
          </Link>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selected !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            role="dialog"
            aria-modal="true"
            aria-label={screenshots[selected].title}
            onClick={() => setSelected(null)}
          >
            {/* Close button */}
            <button
              className="absolute top-4 right-4 bg-white/10 hover:bg-white/20 text-white rounded-full p-2 transition-colors"
              onClick={() => setSelected(null)}
              aria-label={t.close}
            >
              <X className="h-6 w-6" />
            </button>

            {/* Image */}
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-5xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={screenshots[selected].src}
                alt={screenshots[selected].title}
                width={1200}
                height={675}
                className="w-full rounded-xl shadow-2xl"
                priority
              />
              <div className="mt-4 text-center">
                <p className="text-white font-semibold">{screenshots[selected].title}</p>
                <p className="text-white/60 text-sm mt-1">{screenshots[selected].description}</p>
              </div>
            </motion.div>

            {/* Prev / Next */}
            {selected > 0 && (
              <button
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white rounded-full p-3 transition-colors"
                onClick={(e) => { e.stopPropagation(); setSelected(selected - 1) }}
                aria-label={t.previous}
              >
                ‹
              </button>
            )}
            {selected < screenshots.length - 1 && (
              <button
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white rounded-full p-3 transition-colors"
                onClick={(e) => { e.stopPropagation(); setSelected(selected + 1) }}
                aria-label={t.next}
              >
                ›
              </button>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
