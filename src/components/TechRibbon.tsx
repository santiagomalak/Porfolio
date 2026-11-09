'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform, type MotionValue } from 'framer-motion'

type Copy = { title: string; subtitle: string; data: string; complements: string }

// Each row repeats its tools so a moving row never shows a gap at the edges.
const COPIES = 4

function Row({ label, items, x, moving, accent }: {
  label: string
  items: string[]
  x: MotionValue<string>
  moving: boolean
  accent: boolean
}) {
  const chip = accent
    ? 'bg-primary-50 dark:bg-primary-900/20 border-primary-200 dark:border-primary-800/50 text-primary-800 dark:text-primary-300'
    : 'bg-white dark:bg-[#0f0f17] border-gray-200 dark:border-[#1e1e32] text-gray-700 dark:text-gray-300'

  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-3 text-center">{label}</p>
      {moving ? (
        <div className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
          <motion.ul style={{ x }} className="flex gap-3 w-max">
            {Array.from({ length: COPIES }).flatMap((_, copy) =>
              items.map((name) => (
                <li
                  key={`${copy}-${name}`}
                  aria-hidden={copy > 0 ? true : undefined}
                  className={`px-5 py-2.5 rounded-xl border text-sm md:text-base font-semibold whitespace-nowrap ${chip}`}
                >
                  {name}
                </li>
              )),
            )}
          </motion.ul>
        </div>
      ) : (
        <ul className="flex flex-wrap justify-center gap-3">
          {items.map((name) => (
            <li key={name} className={`px-5 py-2.5 rounded-xl border text-sm md:text-base font-semibold ${chip}`}>{name}</li>
          ))}
        </ul>
      )}
    </div>
  )
}

/** Two rows of tools that slide in opposite directions as the page scrolls. */
export default function TechRibbon({ t, rows }: { t: Copy; rows: { data: string[]; complements: string[] } }) {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const xData = useTransform(scrollYProgress, [0, 1], ['0%', '-25%'])
  const xComplements = useTransform(scrollYProgress, [0, 1], ['-25%', '0%'])

  // Static, wrapped rows for people who ask for reduced motion.
  const [moving, setMoving] = useState(true)
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    const apply = () => setMoving(!mq.matches)
    apply()
    mq.addEventListener('change', apply)
    return () => mq.removeEventListener('change', apply)
  }, [])

  return (
    <section ref={ref} className="py-20 overflow-hidden">
      <div className="container mx-auto px-4 max-w-5xl text-center mb-10">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">{t.title}</h2>
        <p className="text-gray-500 dark:text-gray-400 text-sm">{t.subtitle}</p>
      </div>
      <div className="space-y-8 max-w-6xl mx-auto px-4">
        <Row label={t.data} items={rows.data} x={xData} moving={moving} accent />
        <Row label={t.complements} items={rows.complements} x={xComplements} moving={moving} accent={false} />
      </div>
    </section>
  )
}
