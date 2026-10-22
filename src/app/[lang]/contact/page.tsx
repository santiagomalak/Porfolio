import type { Metadata } from 'next'
import ContactForm from './ContactForm'
import { toLocale } from '@/i18n/config'
import { getDictionary } from '@/i18n/get-dictionary'
import { pageMetadata } from '@/i18n/metadata'

type Props = { params: { lang: string } }

export function generateMetadata({ params }: Props): Metadata {
  const lang = toLocale(params.lang)
  return pageMetadata(lang, '/contact', getDictionary(lang).meta.contact)
}

export default function ContactPage({ params }: Props) {
  const lang = toLocale(params.lang)
  return <ContactForm lang={lang} t={getDictionary(lang).contact} />
}
