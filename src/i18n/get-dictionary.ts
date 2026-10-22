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

/** format('Cargando {title}...', { title: 'X' }) → 'Cargando X...' */
export function format(template: string, vars: Record<string, string>): string {
  return template.replace(/\{(\w+)\}/g, (_, key: string) => vars[key] ?? `{${key}}`)
}
