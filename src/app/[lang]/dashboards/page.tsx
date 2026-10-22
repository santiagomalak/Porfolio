import type { Metadata } from 'next'
import DashboardsView from './DashboardsView'
import { toLocale } from '@/i18n/config'
import { getDictionary } from '@/i18n/get-dictionary'
import { pageMetadata } from '@/i18n/metadata'

type Props = { params: { lang: string } }

export function generateMetadata({ params }: Props): Metadata {
  const lang = toLocale(params.lang)
  return pageMetadata(lang, '/dashboards', getDictionary(lang).meta.dashboards)
}

export default function DashboardsPage({ params }: Props) {
  return <DashboardsView t={getDictionary(toLocale(params.lang)).dashboards} />
}
