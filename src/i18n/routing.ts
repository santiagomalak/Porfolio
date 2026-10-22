import { defaultLocale, isLocale, locales, type Locale } from './config'

export const BASE_URL = 'https://santiagomalak.is-a.dev'

/** '/about' → '/about' (es), '/en/about' (en). '/' → '/' or '/en'. */
export function localizePath(lang: Locale, path: string): string {
  if (lang === defaultLocale) return path
  return path === '/' ? `/${lang}` : `/${lang}${path}`
}

/** Inverse of localizePath: '/en/about' → '/about', '/about' → '/about'. */
export function stripLocale(pathname: string): string {
  const [, first, ...rest] = pathname.split('/')
  if (isLocale(first)) return '/' + rest.join('/')
  return pathname || '/'
}

/** hreflang map for <link rel="alternate"> and the sitemap. */
export function languageAlternates(path: string): Record<string, string> {
  const map: Record<string, string> = {}
  for (const l of locales) map[l] = `${BASE_URL}${localizePath(l, path)}`
  map['x-default'] = `${BASE_URL}${localizePath(defaultLocale, path)}`
  return map
}

// Every page route, without locale prefix. Used by the sitemap.
export const routes = [
  '/',
  '/about',
  '/web-projects',
  '/data-science',
  '/data-science/ivolution',
  '/data-science/olist',
  '/data-science/performance-monitor',
  '/dashboards',
  '/certifications',
  '/contact',
] as const
