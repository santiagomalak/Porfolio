// Single place that knows which languages exist. Everything else (middleware,
// routing helpers, metadata, sitemap) derives from this list.

export const locales = ['es', 'en', 'pt'] as const
export type Locale = (typeof locales)[number]

// Spanish is served at the unprefixed URLs (/about); the others are prefixed
// (/en/about, /pt/about). See docs/adr/0004-i18n-locale-routing.md.
export const defaultLocale: Locale = 'es'

// Cookie the language switcher writes, so the middleware's browser-language
// detection never overrides an explicit choice.
export const LOCALE_COOKIE = 'NEXT_LOCALE'

// Request header the middleware sets with the URL's language. Only the global
// 404 reads it (it renders outside app/[lang], so it gets no route params).
export const LOCALE_HEADER = 'x-site-locale'

export function isLocale(value: unknown): value is Locale {
  return typeof value === 'string' && (locales as readonly string[]).includes(value)
}

export const localeLabels: Record<Locale, { short: string; name: string }> = {
  es: { short: 'ES', name: 'Español' },
  en: { short: 'EN', name: 'English' },
  pt: { short: 'PT', name: 'Português' },
}

// BCP 47 tags for Intl APIs, and Open Graph locale codes.
export const intlLocale: Record<Locale, string> = { es: 'es-AR', en: 'en-US', pt: 'pt-BR' }
export const ogLocale: Record<Locale, string> = { es: 'es_AR', en: 'en_US', pt: 'pt_BR' }

// CV served per language. Point a locale at its own PDF once it exists in
// public/ — until then English and Portuguese visitors get the Spanish CV.
export const cvPath: Record<Locale, string> = {
  es: '/CV_Santiago_Malak.pdf',
  en: '/CV_Santiago_Malak.pdf',
  pt: '/CV_Santiago_Malak.pdf',
}

/**
 * Route param → Locale. The middleware only routes valid locales into
 * app/[lang], so the fallback is a type guard, not a user-facing behavior.
 */
export function toLocale(raw: string): Locale {
  return isLocale(raw) ? raw : defaultLocale
}
