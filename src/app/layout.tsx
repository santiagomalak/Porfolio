import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import OpenToWorkBanner from '@/components/OpenToWorkBanner'
import { Analytics } from '@vercel/analytics/react'
import { ThemeProvider } from '@/components/ThemeProvider'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const BASE_URL = 'https://santiagomalak.is-a.dev'

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: 'Santiago Malak — Analytics Engineer & Full-Stack Developer',
    template: '%s | Santiago Malak',
  },
  description:
    'Portfolio de Santiago Malak: Analytics Engineer y Full-Stack Developer. BigQuery, dbt, Metabase, SQL, Python, Next.js. 967 atletas monitoreados en producción real. Disponible para roles remotos.',
  keywords: [
    'Santiago Malak',
    'Analytics Engineer',
    'Data Engineer',
    'Data Scientist',
    'BigQuery',
    'dbt',
    'Metabase',
    'SQL',
    'Python',
    'Next.js',
    'TypeScript',
    'portfolio',
    'analytics engineering',
    'data pipeline',
  ],
  authors: [{ name: 'Santiago Malak' }],
  creator: 'Santiago Malak',
  openGraph: {
    type: 'website',
    locale: 'es_AR',
    url: BASE_URL,
    siteName: 'Santiago Malak',
    title: 'Santiago Malak — Analytics Engineer & Full-Stack Developer',
    description:
      'Analytics Engineer con experiencia real en BigQuery, dbt y Metabase. 967 atletas monitoreados en producción.',
    images: [
      {
        url: '/og-image.svg',
        width: 1200,
        height: 630,
        alt: 'Santiago Malak — Analytics Engineer & Full-Stack Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Santiago Malak — Analytics Engineer & Full-Stack Developer',
    description:
      'Analytics Engineer con experiencia real en BigQuery, dbt y Metabase. 967 atletas monitoreados en producción.',
    images: ['/og-image.svg'],
  },
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Santiago Malak',
  alternateName: 'Santiago Aragon Malak',
  url: BASE_URL,
  jobTitle: 'Analytics Engineer & Full-Stack Developer',
  description:
    'Analytics Engineer y Full-Stack Developer. BigQuery, dbt, Metabase, SQL, Python, Next.js.',
  alumniOf: {
    '@type': 'CollegeOrUniversity',
    name: 'Universidad Nacional de Córdoba',
  },
  knowsAbout: ['Analytics Engineering', 'Data Science', 'BigQuery', 'dbt', 'SQL', 'Python', 'Next.js', 'TypeScript'],
  sameAs: [
    'https://github.com/santiagomalak',
    'https://www.linkedin.com/in/aragonmalak/',
    'https://www.credly.com/users/santiago-aragon-malak',
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={inter.variable} suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <ThemeProvider>
          <div className="flex flex-col min-h-screen">
            <OpenToWorkBanner />
            <Header />
            <main className="flex-grow">
              {children}
            </main>
            <Footer />
          </div>
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}
