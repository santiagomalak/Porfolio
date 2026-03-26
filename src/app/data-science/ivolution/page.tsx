'use client'

import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, ExternalLink, X, ZoomIn } from 'lucide-react'
import { useState } from 'react'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1], delay },
  }),
}

const screenshots = [
  {
    src: '/ivolution-dashboard.png',
    title: 'Dashboard principal — Dinamómetro vs IMTP',
    description: 'KPIs en tiempo real: MaxForce, RFDA50, RFDA250 y TimMaxForce. Comparativa entre dinamómetro e IMTP con filtros por fecha, atleta, tipo de ejercicio e institución.',
  },
  {
    src: '/ivolution-fuerza-velocidad.png',
    title: 'Perfil Fuerza-Velocidad',
    description: 'Correlaciones entre métricas: Velocidad Max vs Fuerza Max, Carga vs Impulso Max, Velocidad vs Distancia Max, 1RM vs deporte. Análisis multidimensional de rendimiento.',
  },
  {
    src: '/ivolution-cadera.png',
    title: 'Reporte de Estabilidad de Cadera',
    description: 'Análisis de ratios funcionales mediante el Push Pull simple. Histograma de diferencia altura CMIR/DJ y serie temporal para seguimiento longitudinal.',
  },
  {
    src: '/ivolution-comparaciones.png',
    title: 'v2 CMJ - IMTP II — Media Móvil vs Última Evaluación',
    description: 'Dashboard individual con media móvil de 5 evaluaciones y umbrales dinámicos de supercompensación/fatiga. Muestra RFD de frenado (CMJ) y RFD en 100ms (IMTP) con serie histórica completa y estado del atleta en tiempo real.',
  },
  {
    src: '/ivolution-fatiga-neuromuscular.png',
    title: 'ASH Test - CMJ Bilateral — Control de Fatiga Neuromuscular',
    description: 'Monitoreo de fatiga con ASH "I" Test (hombro) y CMJ Bilateral (miembros inferiores). Tendencia de fuerza pico izquierda/derecha con comparativa vs día anterior y serie histórica.',
  },
  {
    src: '/ivolution-comparaciones-atletas.png',
    title: 'Comparaciones individuales — Dashboard Comparativo',
    description: 'Vista side-by-side entre dos atletas con gauges para CMJ (Altura de Salto), IMTP (Fuerza Pico) y Drop Jump (RSI). Permite comparar rendimiento entre atletas de la misma institución en tiempo real.',
  },
]

export default function IvolutionPage() {
  const [selected, setSelected] = useState<number | null>(null)

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12 max-w-5xl">

        {/* Back */}
        <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={0}>
          <Link
            href="/data-science"
            className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-gray-900 transition-colors mb-10"
          >
            <ArrowLeft className="h-4 w-4" />
            Volver a Data Science
          </Link>
        </motion.div>

        {/* Header */}
        <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={0.05} className="mb-12">
          <span className="inline-block text-xs font-semibold px-3 py-1 rounded-full bg-blue-100 text-blue-700 mb-4">
            Trabajo real · 2024 — Feb 2025
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            Performance Monitoring System
          </h1>
          <p className="text-xl text-gray-500 font-medium mb-6">Ivolution Sport Science</p>
          <p className="text-lg text-gray-600 leading-relaxed max-w-3xl">
            Sistema de análisis de rendimiento diseñado de cero para más de <strong>300 personas</strong> —
            atletas, profesionales de la salud y equipos completos. Construido con SQL, BigQuery, dbt y
            Metabase. Hoy es la herramienta principal de toma de decisiones de la organización.
          </p>
        </motion.div>

        {/* Tags */}
        <motion.div
          variants={fadeUp} initial="hidden" animate="visible" custom={0.1}
          className="flex flex-wrap gap-2 mb-12"
        >
          {['SQL', 'BigQuery', 'dbt', 'Metabase', 'Python', 'Analytics Engineering', 'ES/EN/PT'].map(tag => (
            <span key={tag} className="px-3 py-1.5 bg-blue-50 text-blue-700 text-sm font-medium rounded-full border border-blue-100">
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
            { value: '300+', label: 'usuarios activos' },
            { value: '3', label: 'estados de alerta' },
            { value: 'p25/p75', label: 'umbrales dinámicos' },
            { value: 'ES/EN/PT', label: 'soporte multilingüe' },
          ].map((stat) => (
            <div key={stat.label} className="bg-white rounded-xl border border-gray-200 p-5 text-center">
              <p className="text-2xl font-bold text-primary-700 mb-1">{stat.value}</p>
              <p className="text-xs text-gray-500">{stat.label}</p>
            </div>
          ))}
        </motion.div>

        {/* Screenshots */}
        <motion.h2
          variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="text-2xl font-bold mb-2 text-gray-900"
        >
          Capturas del sistema
        </motion.h2>
        <motion.p
          variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0.05}
          className="text-sm text-gray-400 mb-8"
        >
          Hacé click en cualquier imagen para verla en pantalla completa.
        </motion.p>

        <div className="space-y-6">
          {screenshots.map((s, i) => (
            <motion.div
              key={s.src}
              variants={fadeUp} initial="hidden" whileInView="visible"
              viewport={{ once: true, margin: '-60px' }} custom={i * 0.05}
              className="bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow"
            >
              {/* Image — clickable */}
              <div
                className="relative cursor-zoom-in group"
                onClick={() => setSelected(i)}
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
              </div>
              <div className="p-6">
                <h3 className="font-semibold text-gray-900 mb-2">{s.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{s.description}</p>
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
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-primary-600 text-white rounded-xl hover:bg-primary-700 transition-all font-medium shadow-lg shadow-primary-200 hover:scale-[1.02]"
          >
            Hablemos de tu proyecto
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
            onClick={() => setSelected(null)}
          >
            {/* Close button */}
            <button
              className="absolute top-4 right-4 bg-white/10 hover:bg-white/20 text-white rounded-full p-2 transition-colors"
              onClick={() => setSelected(null)}
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
              >
                ‹
              </button>
            )}
            {selected < screenshots.length - 1 && (
              <button
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white rounded-full p-3 transition-colors"
                onClick={(e) => { e.stopPropagation(); setSelected(selected + 1) }}
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
