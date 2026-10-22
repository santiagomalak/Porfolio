'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft, ExternalLink, Github, ChevronDown, ChevronUp } from 'lucide-react'
import { useState } from 'react'
import type { Locale } from '@/i18n/config'
import type { Dictionary } from '@/i18n/get-dictionary'
import { localizePath } from '@/i18n/routing'

type OlistCopy = Dictionary['olist']

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1], delay },
  }),
}

const snippets = [
  {
    id: 'rfm',
    title: 'RFM Segmentation',
    file: 'marts/mart_customer_rfm.sql',
    language: 'SQL',
    code: `-- marts/mart_customer_rfm.sql
WITH rfm_raw AS (
  SELECT
    customer_unique_id,
    DATE_DIFF(CURRENT_DATE, MAX(order_purchase_date)::date, DAY) AS recency_days,
    COUNT(DISTINCT order_id)                                      AS frequency,
    SUM(payment_value)                                            AS monetary
  FROM {{ ref('int_orders_enriched') }}
  WHERE order_status = 'delivered'
  GROUP BY 1
),
rfm_scored AS (
  SELECT *,
    NTILE(5) OVER (ORDER BY recency_days ASC)  AS r_score,
    NTILE(5) OVER (ORDER BY frequency DESC)    AS f_score,
    NTILE(5) OVER (ORDER BY monetary DESC)     AS m_score
  FROM rfm_raw
)
SELECT *,
  r_score + f_score + m_score AS rfm_total,
  CASE
    WHEN r_score >= 4 AND f_score >= 4 THEN 'Champions'
    WHEN r_score >= 3 AND f_score >= 3 THEN 'Loyal Customers'
    WHEN r_score >= 4 AND f_score <= 2 THEN 'New Customers'
    WHEN r_score <= 2 AND f_score >= 3 THEN 'At Risk'
    ELSE 'Hibernating'
  END AS rfm_segment
FROM rfm_scored`,
  },
  {
    id: 'cohort',
    title: 'Cohort Retention Analysis',
    file: 'marts/mart_cohort_retention.sql',
    language: 'SQL',
    code: `-- marts/mart_cohort_retention.sql
WITH first_purchase AS (
  SELECT
    customer_unique_id,
    DATE_TRUNC('month', MIN(order_purchase_date)) AS cohort_month
  FROM {{ ref('int_orders_enriched') }}
  WHERE order_status = 'delivered'
  GROUP BY 1
),
monthly_activity AS (
  SELECT
    customer_unique_id,
    DATE_TRUNC('month', order_purchase_date) AS activity_month
  FROM {{ ref('int_orders_enriched') }}
  WHERE order_status = 'delivered'
),
cohort_data AS (
  SELECT
    f.cohort_month,
    DATE_DIFF(m.activity_month, f.cohort_month, MONTH) AS month_number,
    COUNT(DISTINCT m.customer_unique_id)               AS active_customers
  FROM first_purchase f
  JOIN monthly_activity m USING (customer_unique_id)
  GROUP BY 1, 2
)
SELECT
  cohort_month,
  month_number,
  active_customers,
  FIRST_VALUE(active_customers) OVER (
    PARTITION BY cohort_month ORDER BY month_number
  ) AS cohort_size,
  ROUND(
    active_customers::numeric /
    FIRST_VALUE(active_customers) OVER (
      PARTITION BY cohort_month ORDER BY month_number
    ) * 100, 1
  ) AS retention_rate
FROM cohort_data
ORDER BY cohort_month, month_number`,
  },
  {
    id: 'revenue',
    title: 'Revenue Trends — Window Functions',
    file: 'marts/mart_revenue_trends.sql',
    language: 'SQL',
    code: `-- marts/mart_revenue_trends.sql
WITH monthly_revenue AS (
  SELECT
    DATE_TRUNC('month', order_purchase_date) AS month,
    seller_state,
    product_category_name_english            AS category,
    COUNT(DISTINCT order_id)                 AS orders,
    SUM(payment_value)                       AS revenue,
    AVG(payment_value)                       AS avg_order_value
  FROM {{ ref('int_orders_enriched') }}
  WHERE order_status = 'delivered'
  GROUP BY 1, 2, 3
)
SELECT *,
  SUM(revenue) OVER (
    PARTITION BY seller_state, category
    ORDER BY month
    ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW
  ) AS cumulative_revenue,
  revenue - LAG(revenue) OVER (
    PARTITION BY seller_state, category ORDER BY month
  ) AS mom_delta
FROM monthly_revenue`,
  },
] as const

const dbtLayers = [
  {
    id: 'staging',
    name: 'staging/',
    color: '#67e8f9',
    bg: '#0e7490',
    models: ['stg_orders', 'stg_customers', 'stg_products', 'stg_sellers', 'stg_payments', 'stg_reviews'],
  },
  {
    id: 'intermediate',
    name: 'intermediate/',
    color: '#c084fc',
    bg: '#7e22ce',
    models: ['int_orders_enriched', 'int_seller_performance'],
  },
  {
    id: 'marts',
    name: 'marts/',
    color: '#4ade80',
    bg: '#15803d',
    models: ['mart_customer_rfm', 'mart_cohort_retention', 'mart_revenue_trends'],
  },
] as const

function CodeBlock({ snippet, description }: { snippet: (typeof snippets)[number]; description: string }) {
  const [open, setOpen] = useState(false)

  return (
    <div
      className="rounded-2xl overflow-hidden border border-gray-200 dark:border-[#1e1e32]"
      style={{ background: '#0f0f17' }}
    >
      <button
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        className="w-full flex items-start justify-between gap-4 px-6 py-5 text-left hover:bg-white/5 transition-colors"
      >
        <div>
          <div className="flex items-center gap-3 mb-1">
            <span
              className="text-[10px] font-bold px-2 py-0.5 rounded font-mono"
              style={{ background: '#67e8f920', color: '#67e8f9', border: '1px solid #67e8f930' }}
            >
              SQL
            </span>
            <span className="text-white font-semibold text-sm">{snippet.title}</span>
          </div>
          <span className="text-zinc-500 text-xs font-mono">{snippet.file}</span>
          <p className="text-zinc-400 text-xs mt-2 leading-relaxed max-w-2xl">{description}</p>
        </div>
        {open
          ? <ChevronUp className="h-4 w-4 text-zinc-500 flex-shrink-0 mt-1" />
          : <ChevronDown className="h-4 w-4 text-zinc-500 flex-shrink-0 mt-1" />}
      </button>

      {open && (
        <div className="border-t border-[#1e1e32] px-6 py-5 overflow-x-auto">
          <pre className="text-[12.5px] leading-[1.7] font-mono">
            {snippet.code.split('\n').map((line, i) => {
              const isComment = line.trim().startsWith('--')
              const isKeyword = /^\s*(SELECT|FROM|WHERE|WITH|GROUP BY|ORDER BY|CASE|WHEN|THEN|ELSE|END|JOIN|ON|AND|PARTITION BY|ROWS BETWEEN|OVER|AS)\b/.test(line)
              return (
                <div key={i} style={{ color: isComment ? '#4b5563' : isKeyword ? '#c084fc' : '#e2e8f0' }}>
                  {line || ' '}
                </div>
              )
            })}
          </pre>
        </div>
      )}
    </div>
  )
}

export default function OlistView({ lang, t, common }: {
  lang: Locale
  t: OlistCopy
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
          <span className="inline-block text-xs font-semibold px-3 py-1 rounded-full bg-orange-100 dark:bg-orange-950/40 text-orange-700 dark:text-orange-400 mb-4">
            {t.badge}
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight text-gray-900 dark:text-white">
            E-Commerce Data Platform
          </h1>
          <p className="text-xl text-gray-500 dark:text-gray-400 font-medium mb-6">{t.subtitle}</p>
          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-3xl">
            {t.introA} <strong>{t.introStrong}</strong> {t.introB}
          </p>
        </motion.div>

        {/* Tags */}
        <motion.div
          variants={fadeUp} initial="hidden" animate="visible" custom={0.1}
          className="flex flex-wrap gap-2 mb-12"
        >
          {['PostgreSQL', 'dbt', 'Python', 'Docker', 'GitHub Actions', 'SQL Window Functions', 'RFM', 'Cohort Analysis'].map(tag => (
            <span key={tag} className="px-3 py-1.5 bg-orange-50 dark:bg-orange-950/30 text-orange-700 dark:text-orange-400 text-sm font-medium rounded-full border border-orange-100 dark:border-orange-900/40">
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
            { value: '100k+', label: t.stats.orders },
            { value: '4',     label: t.stats.layers },
            { value: '3',     label: t.stats.marts },
            { value: 'CI/CD', label: t.stats.ci },
          ].map((stat) => (
            <div key={stat.label} className="bg-white dark:bg-[#0f0f17] rounded-xl border border-gray-200 dark:border-[#1e1e32] p-5 text-center">
              <p className="text-2xl font-bold text-orange-600 dark:text-orange-400 mb-1">{stat.value}</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">{stat.label}</p>
            </div>
          ))}
        </motion.div>

        {/* Architecture */}
        <motion.div
          variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">{t.architectureTitle}</h2>
          <p className="text-sm text-gray-400 dark:text-gray-500 mb-8">{t.architectureIntro}</p>

          <div className="flex flex-col items-center gap-0">
            {[
              { label: 'Raw CSV Files', sub: t.nodes.raw, color: '#4b5563', bg: '#1f2937' },
              { label: 'PostgreSQL', sub: t.nodes.postgres, color: '#67e8f9', bg: '#0e7490' },
              { label: 'dbt — Staging', sub: 'stg_orders · stg_customers · stg_products · stg_payments · stg_sellers', color: '#67e8f9', bg: '#164e63' },
              { label: 'dbt — Intermediate', sub: t.nodes.intermediate, color: '#c084fc', bg: '#4c1d95' },
              { label: 'dbt — Marts', sub: 'mart_customer_rfm · mart_cohort_retention · mart_revenue_trends', color: '#4ade80', bg: '#14532d' },
              { label: 'Live Dashboard', sub: 'Next.js · Vercel · ecommerce-dashboard-puce.vercel.app', color: '#fb923c', bg: '#7c2d12' },
            ].map((node, i, arr) => (
              <div key={node.label} className="flex flex-col items-center w-full max-w-lg">
                <div
                  className="w-full rounded-xl px-6 py-4 text-center"
                  style={{ background: `${node.bg}60`, border: `1px solid ${node.color}30` }}
                >
                  <p className="font-semibold text-sm mb-1" style={{ color: node.color }}>{node.label}</p>
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

        {/* dbt Model Structure */}
        <motion.div
          variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">{t.modelsTitle}</h2>
          <p className="text-sm text-gray-400 dark:text-gray-500 mb-8">{t.modelsIntro}</p>

          <div className="grid md:grid-cols-3 gap-4">
            {dbtLayers.map((layer) => (
              <div
                key={layer.name}
                className="rounded-2xl p-5"
                style={{ background: '#0f0f17', border: `1px solid ${layer.color}25` }}
              >
                <div
                  className="inline-block text-xs font-bold font-mono px-2.5 py-1 rounded mb-3"
                  style={{ background: `${layer.color}15`, color: layer.color, border: `1px solid ${layer.color}30` }}
                >
                  {layer.name}
                </div>
                <p className="text-zinc-400 text-xs mb-4 leading-relaxed">{t.layers[layer.id]}</p>
                <div className="space-y-1.5">
                  {layer.models.map(m => (
                    <div key={m} className="text-[11px] font-mono text-zinc-300 flex items-center gap-2">
                      <span style={{ color: layer.color }}>▸</span>
                      {m}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* SQL Snippets */}
        <motion.div
          variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">{t.sqlTitle}</h2>
          <p className="text-sm text-gray-400 dark:text-gray-500 mb-8">{t.sqlIntro}</p>

          <div className="space-y-4">
            {snippets.map((s) => (
              <motion.div
                key={s.id}
                variants={fadeUp} initial="hidden" whileInView="visible"
                viewport={{ once: true, margin: '-40px' }}
              >
                <CodeBlock snippet={s} description={t.snippets[s.id]} />
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
            href="https://ecommerce-dashboard-puce.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-orange-600 hover:bg-orange-700 text-white rounded-xl transition-all font-medium shadow-lg shadow-orange-200 dark:shadow-orange-900/30 hover:scale-[1.02]"
          >
            <ExternalLink className="h-4 w-4" />
            {t.liveDashboard}
          </a>
          <a
            href="https://github.com/santiagomalak/ecommerce-data-platform"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border-2 border-gray-200 dark:border-[#1e1e32] text-gray-700 dark:text-gray-300 rounded-xl hover:bg-gray-50 dark:hover:bg-white/5 transition-all font-medium"
          >
            <Github className="h-4 w-4" />
            {t.githubCode}
          </a>
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
