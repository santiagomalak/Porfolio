import type { Metadata } from 'next'
import PerformanceMonitorView from './PerformanceMonitorView'
import { toLocale } from '@/i18n/config'
import { getDictionary } from '@/i18n/get-dictionary'
import { pageMetadata } from '@/i18n/metadata'

type Props = { params: { lang: string } }

export function generateMetadata({ params }: Props): Metadata {
  const lang = toLocale(params.lang)
  return pageMetadata(lang, '/data-science/performance-monitor', getDictionary(lang).meta.performanceMonitor)
}

export default function PerformanceMonitorPage({ params }: Props) {
  const lang = toLocale(params.lang)
  const dict = getDictionary(lang)
  return <PerformanceMonitorView lang={lang} t={dict.performanceMonitor} common={dict.common} />
}
