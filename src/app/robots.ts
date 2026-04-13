import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://santiagomalak.is-a.dev/sitemap.xml',
    host: 'https://santiagomalak.is-a.dev',
  }
}
