import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import SiteShell from '@/components/SiteShell'
import { isLocale, locales, toLocale } from '@/i18n/config'
import { getDictionary } from '@/i18n/get-dictionary'
import { pageMetadata } from '@/i18n/metadata'
import { BASE_URL } from '@/i18n/routing'

// One static build per language: /es, /en, /pt. The middleware maps the
// unprefixed Spanish URLs onto /es internally.
export function generateStaticParams() {
  return locales.map((lang) => ({ lang }))
}

// Anything that isn't one of those three is a 404, not a page. The middleware
// never routes such paths here, but URLs with a dot (/missing.pdf) skip the
// middleware and would otherwise render the home page with a 200.
// dynamicParams alone doesn't cover this on Next 14 (it isn't applied to the
// page below this layout), hence the explicit check in the layout too.
export const dynamicParams = false

type Params = { params: { lang: string } }

export function generateMetadata({ params }: Params): Metadata {
  const lang = toLocale(params.lang)
  const t = getDictionary(lang).meta
  return {
    metadataBase: new URL(BASE_URL),
    keywords: [
      'Santiago Malak',
      'Analytics Engineer',
      'Data Engineer',
      'Data Scientist',
      'BigQuery',
      'dbt',
      'Metabase',
      'SQL',
      'Python',
      'Next.js',
      'TypeScript',
      'portfolio',
      'analytics engineering',
      'data pipeline',
    ],
    authors: [{ name: 'Santiago Malak' }],
    creator: 'Santiago Malak',
    icons: { icon: '/favicon.svg', shortcut: '/favicon.svg' },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
    },
    // Home page values; every other page overrides these with its own.
    ...pageMetadata(lang, '/', { title: t.siteTitle, description: t.siteDescription }),
    // After the spread: the layout's title must be the template, not a string.
    title: { default: t.siteTitle, template: '%s | Santiago Malak' },
  }
}

export default function LangLayout({ children, params }: { children: React.ReactNode } & Params) {
  if (!isLocale(params.lang)) notFound()
  return <SiteShell lang={params.lang}>{children}</SiteShell>
}
