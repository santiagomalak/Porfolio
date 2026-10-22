import type { Metadata } from 'next'
import IvolutionView from './IvolutionView'
import { toLocale } from '@/i18n/config'
import { getDictionary } from '@/i18n/get-dictionary'
import { pageMetadata } from '@/i18n/metadata'

type Props = { params: { lang: string } }

export function generateMetadata({ params }: Props): Metadata {
  const lang = toLocale(params.lang)
  return pageMetadata(lang, '/data-science/ivolution', getDictionary(lang).meta.ivolution)
}

export default function IvolutionPage({ params }: Props) {
  const lang = toLocale(params.lang)
  const dict = getDictionary(lang)
  return <IvolutionView lang={lang} t={dict.ivolution} common={dict.common} />
}
