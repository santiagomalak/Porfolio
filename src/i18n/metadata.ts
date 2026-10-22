import type { Metadata } from 'next'
import { SITE_NAME, ogLocale, locales, type Locale } from './config'
import { getDictionary } from './get-dictionary'
import { BASE_URL, languageAlternates, localizePath } from './routing'

/**
 * Per-page metadata with canonical URL + hreflang alternates, so search engines
 * index each language version separately instead of treating them as duplicates.
 */
export function pageMetadata(
  lang: Locale,
  path: string,
  { title, description }: { title?: string; description: string },
): Metadata {
  const url = `${BASE_URL}${localizePath(lang, path)}`
  // Next.js replaces (doesn't deep-merge) a parent's openGraph/twitter objects,
  // so every page restates siteName, type and the image.
  const alt = `${SITE_NAME} — ${getDictionary(lang).common.roleFull}`
  const image = { url: ogImagePath(lang), width: 1200, height: 630, alt }
  return {
    ...(title ? { title } : {}),
    description,
    alternates: { canonical: url, languages: languageAlternates(path) },
    openGraph: {
      type: 'website',
      siteName: SITE_NAME,
      ...(title ? { title } : {}),
      description,
      url,
      locale: ogLocale[lang],
      alternateLocale: locales.filter((l) => l !== lang).map((l) => ogLocale[l]),
      images: [image],
    },
    twitter: { card: 'summary_large_image', ...(title ? { title } : {}), description, images: [image.url] },
  }
}

/** Static PNG generated at build time by src/app/og/[lang]/route.tsx. */
export function ogImagePath(lang: Locale): string {
  return `/og/${lang}`
}
