'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft, ExternalLink, Github, ChevronDown, ChevronUp } from 'lucide-react'
import { useState } from 'react'
import type { Locale } from '@/i18n/config'
import type { Dictionary } from '@/i18n/get-dictionary'
import { localizePath } from '@/i18n/routing'

type MonitorCopy = Dictionary['performanceMonitor']

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1], delay },
  }),
}

const snippets = [
  {
    id: 'generate',
    file: 'generate_athlete_dataset.py',
    language: 'Python',
    code: `import hashlib, random
from datetime import date, timedelta
import numpy as np
from faker import Faker

fake = Faker("es_AR")
rng  = np.random.default_rng(42)

# Normas por deporte — Turner et al. 2020, Comfort et al. 2019
SPORTS = {
    "Fútbol":     {"cmj": (42, 6),  "imtp": (1_800, 300), "n": 35},
    "Rugby":      {"cmj": (45, 7),  "imtp": (2_200, 350), "n": 25},
    "Atletismo":  {"cmj": (50, 8),  "imtp": (2_000, 300), "n": 20},
    "Basketball": {"cmj": (55, 8),  "imtp": (1_900, 300), "n": 20},
    "Hockey":     {"cmj": (38, 5),  "imtp": (1_700, 250), "n": 20},
    "Natación":   {"cmj": (35, 5),  "imtp": (1_600, 250), "n": 20},
    "Vóley":      {"cmj": (58, 7),  "imtp": (1_850, 280), "n": 10},
}

def hash_id(raw: str) -> str:
    return "ATH" + hashlib.sha256(raw.encode()).hexdigest()[:6].upper()

athletes = []
for sport, cfg in SPORTS.items():
    for _ in range(cfg["n"]):
        raw_name = fake.name()          # generado y descartado
        athletes.append({
            "athlete_id": hash_id(raw_name + sport),   # solo el hash
            "sport": sport,
            "age":   random.randint(17, 35),
            "gender": random.choice(["M", "F"]),
        })

measurements = []
for ath in athletes:
    cfg       = SPORTS[ath["sport"]]
    base_cmj  = float(rng.normal(*cfg["cmj"]))
    base_imtp = float(rng.normal(*cfg["imtp"]))

    for _ in range(random.randint(18, 30)):
        eval_date = date(2025, 1, 1) + timedelta(days=random.randint(0, 364))
        fatigue   = float(rng.normal(1.0, 0.07))   # ciclo de fatiga ±7%

        measurements += [
            {"athlete_id": ath["athlete_id"], "eval_date": eval_date,
             "exercise_type": "CMJ",
             "jump_height_cm": round(max(15.0, base_cmj * fatigue + rng.normal(0, 1.5)), 2)},
            {"athlete_id": ath["athlete_id"], "eval_date": eval_date,
             "exercise_type": "IMTP",
             "max_force_n": round(max(500.0, base_imtp * fatigue + rng.normal(0, 30)), 1)},
        ]

# Output: ~6.500 mediciones, 0 datos personales reales`,
  },
  {
    id: 'alerts',
    file: 'mart_fatigue_alerts.sql',
    language: 'SQL',
    code: `-- mart_fatigue_alerts.sql
WITH athlete_baseline AS (
  SELECT
    athlete_id,
    exercise_type,
    PERCENTILE_CONT(0.25) WITHIN GROUP (ORDER BY
      CASE exercise_type
        WHEN 'CMJ'  THEN jump_height_cm
        WHEN 'IMTP' THEN max_force_n
      END
    ) AS p25,
    PERCENTILE_CONT(0.75) WITHIN GROUP (ORDER BY
      CASE exercise_type
        WHEN 'CMJ'  THEN jump_height_cm
        WHEN 'IMTP' THEN max_force_n
      END
    ) AS p75
  FROM measurements
  WHERE eval_date >= CURRENT_DATE - INTERVAL '90 days'
  GROUP BY athlete_id, exercise_type
),
latest_eval AS (
  SELECT DISTINCT ON (athlete_id, exercise_type)
    athlete_id, sport, exercise_type,
    jump_height_cm, max_force_n, eval_date
  FROM measurements
  ORDER BY athlete_id, exercise_type, eval_date DESC
)
SELECT
  l.athlete_id,
  l.sport,
  l.exercise_type,
  l.eval_date,
  COALESCE(l.jump_height_cm, l.max_force_n) AS metric_value,
  b.p25,
  b.p75,
  CASE
    WHEN COALESCE(l.jump_height_cm, l.max_force_n) >= b.p75 THEN 'SUPERCOMPENSACIÓN'
    WHEN COALESCE(l.jump_height_cm, l.max_force_n) <= b.p25 THEN 'FATIGADO'
    ELSE 'ATENCIÓN'
  END AS estado_neuromuscular
FROM latest_eval l
JOIN athlete_baseline b USING (athlete_id, exercise_type)
ORDER BY
  CASE estado_neuromuscular WHEN 'FATIGADO' THEN 1 WHEN 'ATENCIÓN' THEN 2 ELSE 3 END,
  l.sport`,
  },
  {
    id: 'rolling',
    file: 'mart_athlete_trend.sql',
    language: 'SQL',
    code: `-- mart_athlete_trend.sql
WITH ranked AS (
  SELECT
    athlete_id,
    sport,
    exercise_type,
    eval_date,
    COALESCE(jump_height_cm, max_force_n) AS metric_value,
    ROW_NUMBER() OVER (
      PARTITION BY athlete_id, exercise_type
      ORDER BY eval_date
    ) AS eval_num
  FROM measurements
),
rolling_avg AS (
  SELECT *,
    AVG(metric_value) OVER (
      PARTITION BY athlete_id, exercise_type
      ORDER BY eval_num
      ROWS BETWEEN 4 PRECEDING AND CURRENT ROW
    ) AS rolling_5_avg,
    FIRST_VALUE(metric_value) OVER (
      PARTITION BY athlete_id, exercise_type
      ORDER BY eval_num
    ) AS baseline_value
  FROM ranked
)
SELECT *,
  ROUND(
    (rolling_5_avg - baseline_value) / baseline_value * 100, 1
  ) AS pct_change_from_baseline
FROM rolling_avg
ORDER BY athlete_id, exercise_type, eval_num`,
  },
] as const

function CodeBlock({ snippet, copy }: {
  snippet: (typeof snippets)[number]
  copy: { title: string; description: string }
}) {
  const [open, setOpen] = useState(false)

  const langColor = snippet.language === 'Python' ? '#4ade80' : '#67e8f9'

  return (
    <div className="rounded-2xl overflow-hidden border border-[#1e1e32]" style={{ background: '#0f0f17' }}>
      <button
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        className="w-full flex items-start justify-between gap-4 px-6 py-5 text-left hover:bg-white/5 transition-colors"
      >
        <div className="min-w-0">
          <div className="flex items-center gap-3 mb-1 flex-wrap">
            <span
              className="text-[10px] font-bold px-2 py-0.5 rounded font-mono flex-shrink-0"
              style={{ background: `${langColor}20`, color: langColor, border: `1px solid ${langColor}30` }}
            >
              {snippet.language}
            </span>
            <span className="text-white font-semibold text-sm">{copy.title}</span>
          </div>
          <span className="text-zinc-500 text-xs font-mono">{snippet.file}</span>
          <p className="text-zinc-400 text-xs mt-2 leading-relaxed max-w-2xl">{copy.description}</p>
        </div>
        {open
          ? <ChevronUp className="h-4 w-4 text-zinc-500 flex-shrink-0 mt-1" />
          : <ChevronDown className="h-4 w-4 text-zinc-500 flex-shrink-0 mt-1" />}
      </button>

      {open && (
        <div className="border-t border-[#1e1e32] px-6 py-5 overflow-x-auto">
          <pre className="text-[12px] leading-[1.75] font-mono">
            {snippet.code.split('\n').map((line, i) => {
              const isComment  = line.trim().startsWith('#') || line.trim().startsWith('--')
              const isSqlKw    = snippet.language === 'SQL' && /^\s*(SELECT|FROM|WHERE|WITH|GROUP BY|ORDER BY|CASE|WHEN|THEN|ELSE|END|JOIN|ON|AND|PARTITION BY|ROWS BETWEEN|OVER|AS|DISTINCT|COALESCE|ROUND|AVG|INTERVAL)\b/.test(line)
              const isPyKw     = snippet.language === 'Python' && /^\s*(import|from|def|return|for|in|if|else|elif|class|with|as)\b/.test(line)
              const color      = isComment ? '#4b5563' : (isSqlKw || isPyKw) ? '#c084fc' : '#e2e8f0'
              return (
                <div key={i} style={{ color }}>{line || ' '}</div>
              )
            })}
          </pre>
        </div>
      )}
    </div>
  )
}

export default function PerformanceMonitorView({ lang, t, common }: {
  lang: Locale
  t: MonitorCopy
  common: Dictionary['common']
}) {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12 max-w-5xl">

        {/* Back */}
        <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={0}>
          <Link
            href={localizePath(lang, '/data-science')}
            className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-gray-900 dark:hover:text-gray-200 transition-colors mb-10"
          >
            <ArrowLeft className="h-4 w-4" />
            {common.backToDataScience}
          </Link>
        </motion.div>

        {/* Header */}
        <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={0.05} className="mb-10">
          <span className="inline-block text-xs font-semibold px-3 py-1 rounded-full bg-teal-100 dark:bg-teal-950/40 text-teal-700 dark:text-teal-400 mb-4">
            {t.badge}
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight text-gray-900 dark:text-white">
            Athlete Performance Monitor
          </h1>
          <p className="text-xl text-gray-500 dark:text-gray-400 font-medium mb-6">
            {t.subtitle}
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-3xl">
            {t.introA} <strong>{t.introStrong}</strong> {t.introB}
          </p>
        </motion.div>

        {/* Why synthetic data */}
        <motion.div
          variants={fadeUp} initial="hidden" animate="visible" custom={0.1}
          className="mb-10 p-5 rounded-xl border border-amber-200 dark:border-amber-900/40 bg-amber-50 dark:bg-amber-950/20"
        >
          <p className="text-sm text-amber-800 dark:text-amber-300 leading-relaxed">
            <strong>{t.whyTitle}</strong> {t.whyBody}
          </p>
        </motion.div>

        {/* Tags */}
        <motion.div
          variants={fadeUp} initial="hidden" animate="visible" custom={0.12}
          className="flex flex-wrap gap-2 mb-12"
        >
          {['Python', 'numpy', 'Faker', 'SQL', 'Window Functions', 'Percentile Alerts', 'Sport Science', 'Privacy-first'].map(tag => (
            <span key={tag} className="px-3 py-1.5 bg-teal-50 dark:bg-teal-950/30 text-teal-700 dark:text-teal-400 text-sm font-medium rounded-full border border-teal-100 dark:border-teal-900/40">
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
            { value: '150',                label: t.stats.athletes },
            { value: '7',                  label: t.stats.sports },
            { value: t.measurementsValue, label: t.stats.measurements },
            { value: '12',                 label: t.stats.months },
          ].map((stat) => (
            <div key={stat.label} className="bg-white dark:bg-[#0f0f17] rounded-xl border border-gray-200 dark:border-[#1e1e32] p-5 text-center">
              <p className="text-2xl font-bold text-teal-600 dark:text-teal-400 mb-1">{stat.value}</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">{stat.label}</p>
            </div>
          ))}
        </motion.div>

        {/* Pipeline */}
        <motion.div
          variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">{t.pipelineTitle}</h2>
          <p className="text-sm text-gray-400 dark:text-gray-500 mb-8">{t.pipelineIntro}</p>

          <div className="flex flex-col items-center gap-0">
            {[
              { label: 'generate_athlete_dataset.py', sub: t.nodes.generate, color: '#4ade80', bg: '#14532d' },
              { label: 'measurements.csv / athletes.csv', sub: t.nodes.csv, color: '#67e8f9', bg: '#164e63' },
              { label: 'mart_fatigue_alerts.sql', sub: t.nodes.alerts, color: '#c084fc', bg: '#4c1d95' },
              { label: 'mart_athlete_trend.sql', sub: t.nodes.trend, color: '#fb923c', bg: '#7c2d12' },
              { label: t.nodes.dashboardLabel, sub: t.nodes.dashboard, color: '#facc15', bg: '#713f12' },
            ].map((node, i, arr) => (
              <div key={node.label} className="flex flex-col items-center w-full max-w-lg">
                <div
                  className="w-full rounded-xl px-6 py-4 text-center"
                  style={{ background: `${node.bg}60`, border: `1px solid ${node.color}30` }}
                >
                  <p className="font-semibold text-sm mb-1 font-mono" style={{ color: node.color }}>{node.label}</p>
                  <p className="text-xs text-zinc-400">{node.sub}</p>
                </div>
                {i < arr.length - 1 && (
                  <div className="flex flex-col items-center my-1">
                    <div className="w-px h-4 bg-gray-700" />
                    <div className="w-0 h-0 border-l-[5px] border-l-transparent border-r-[5px] border-r-transparent border-t-[6px] border-t-gray-600" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Estado states */}
        <motion.div
          variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">{t.alertsTitle}</h2>
          <p className="text-sm text-gray-400 dark:text-gray-500 mb-8">{t.alertsIntro}</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { ...t.states.super,     color: '#4ade80', bg: '#14532d' },
              { ...t.states.attention, color: '#facc15', bg: '#713f12' },
              { ...t.states.fatigued,  color: '#f87171', bg: '#7f1d1d' },
            ].map((s) => (
              <div
                key={s.label}
                className="rounded-xl p-5"
                style={{ background: `${s.bg}50`, border: `1px solid ${s.color}30` }}
              >
                <span
                  className="inline-block text-xs font-bold font-mono px-2.5 py-1 rounded mb-3"
                  style={{ background: `${s.color}15`, color: s.color, border: `1px solid ${s.color}30` }}
                >
                  {s.label}
                </span>
                <p className="text-zinc-300 text-xs font-mono mb-2">{s.condition}</p>
                <p className="text-zinc-400 text-xs leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Code snippets */}
        <motion.div
          variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">{t.codeTitle}</h2>
          <p className="text-sm text-gray-400 dark:text-gray-500 mb-8">{t.codeIntro}</p>
          <div className="space-y-4">
            {snippets.map((s) => (
              <motion.div
                key={s.id}
                variants={fadeUp} initial="hidden" whileInView="visible"
                viewport={{ once: true, margin: '-40px' }}
              >
                <CodeBlock snippet={s} copy={t.snippets[s.id]} />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Links */}
        <motion.div
          variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="flex flex-col sm:flex-row gap-4 mb-16"
        >
          <a
            href="https://github.com/santiagomalak/Porfolio/blob/main/data-scripts/generate_athlete_dataset.py"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border-2 border-gray-200 dark:border-[#1e1e32] text-gray-700 dark:text-gray-300 rounded-xl hover:bg-gray-50 dark:hover:bg-white/5 transition-all font-medium"
          >
            <Github className="h-4 w-4" />
            {t.scriptOnGithub}
          </a>
          <Link
            href={localizePath(lang, '/data-science/ivolution')}
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border-2 border-blue-200 dark:border-blue-800/40 text-blue-700 dark:text-blue-400 rounded-xl hover:bg-blue-50 dark:hover:bg-blue-950/20 transition-all font-medium"
          >
            <ExternalLink className="h-4 w-4" />
            {t.realSystem}
          </Link>
          <Link
            href={localizePath(lang, '/contact')}
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border-2 border-primary-200 dark:border-primary-700/50 text-primary-700 dark:text-primary-400 rounded-xl hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-all font-medium"
          >
            {common.letsTalk}
          </Link>
        </motion.div>

      </div>
    </div>
  )
}
