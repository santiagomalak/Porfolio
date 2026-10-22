import { Inter } from 'next/font/google'
import '@/app/globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import OpenToWorkBanner from '@/components/OpenToWorkBanner'
import { Analytics } from '@vercel/analytics/react'
import { ThemeProvider } from '@/components/ThemeProvider'
import { SITE_NAME, cvPath, type Locale } from '@/i18n/config'
import { getDictionary } from '@/i18n/get-dictionary'
import { BASE_URL, localizePath } from '@/i18n/routing'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

/**
 * <html> + header/footer for one language. Shared by app/[lang]/layout.tsx
 * (every page) and app/not-found.tsx (the 404, which lives outside [lang]).
 */
export default function SiteShell({ lang, children }: { lang: Locale; children: React.ReactNode }) {
  const dict = getDictionary(lang)

  const personJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: SITE_NAME,
    alternateName: 'Santiago Malak',
    url: `${BASE_URL}${localizePath(lang, '/')}`,
    jobTitle: dict.common.roleFull,
    description: dict.meta.personDescription,
    knowsLanguage: ['es', 'en', 'pt'],
    alumniOf: {
      '@type': 'CollegeOrUniversity',
      name: 'Universidad Nacional de Córdoba',
    },
    knowsAbout: ['Analytics Engineering', 'Data Science', 'Full Stack Development', 'AI Automation', 'BigQuery', 'dbt', 'SQL', 'Python', 'React', 'Next.js', 'TypeScript', 'Supabase', 'n8n'],
    sameAs: [
      'https://github.com/santiagomalak',
      'https://www.linkedin.com/in/aragonmalak/',
      'https://www.credly.com/users/santiago-aragon-malak',
    ],
  }

  return (
    <html lang={lang} className={inter.variable} suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <ThemeProvider>
          <div className="flex flex-col min-h-screen">
            <OpenToWorkBanner lang={lang} t={dict.common.banner} />
            <Header lang={lang} t={dict.common} cvHref={cvPath[lang]} />
            <main className="flex-grow">
              {children}
            </main>
            <Footer rights={dict.common.rights} />
          </div>
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}
