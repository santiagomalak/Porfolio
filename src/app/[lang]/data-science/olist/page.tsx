import type { Metadata } from 'next'
import OlistView from './OlistView'
import { toLocale } from '@/i18n/config'
import { getDictionary } from '@/i18n/get-dictionary'
import { pageMetadata } from '@/i18n/metadata'

type Props = { params: { lang: string } }

export function generateMetadata({ params }: Props): Metadata {
  const lang = toLocale(params.lang)
  return pageMetadata(lang, '/data-science/olist', getDictionary(lang).meta.olist)
}

export default function OlistPage({ params }: Props) {
  const lang = toLocale(params.lang)
  const dict = getDictionary(lang)
  return <OlistView lang={lang} t={dict.olist} common={dict.common} />
}
