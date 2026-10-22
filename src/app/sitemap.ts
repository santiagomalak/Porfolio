import { MetadataRoute } from 'next'
import { locales } from '@/i18n/config'
import { BASE_URL, languageAlternates, localizePath, routes } from '@/i18n/routing'

const priority: Record<(typeof routes)[number], number> = {
  '/': 1,
  '/about': 0.9,
  '/dashboards': 0.9,
  '/web-projects': 0.8,
  '/data-science': 0.8,
  '/certifications': 0.8,
  '/data-science/ivolution': 0.7,
  '/data-science/olist': 0.7,
  '/data-science/performance-monitor': 0.7,
  '/contact': 0.6,
}

// Every page in every language, each entry listing its translations so search
// engines connect the versions instead of flagging duplicate content.
export default function sitemap(): MetadataRoute.Sitemap {
  return routes.flatMap((route) =>
    locales.map((lang) => ({
      url: `${BASE_URL}${localizePath(lang, route)}`,
      lastModified: new Date(),
      changeFrequency: route === '/contact' ? ('yearly' as const) : ('monthly' as const),
      priority: priority[route],
      alternates: { languages: languageAlternates(route) },
    })),
  )
}
