import type { Locale } from './config'
import es, { type Dictionary } from './dictionaries/es'
import en from './dictionaries/en'
import pt from './dictionaries/pt'

// Server-side only: import this from Server Components and pass the slice a
// client component needs down as props. Importing it from a 'use client' file
// would ship all three languages to the browser.
const dictionaries: Record<Locale, Dictionary> = { es, en, pt }

export function getDictionary(lang: Locale): Dictionary {
  return dictionaries[lang]
}

export type { Dictionary }

// Client components must import `format` from './format' directly.
export { format } from './format'
