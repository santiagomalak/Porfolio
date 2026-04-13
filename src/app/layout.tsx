import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Analytics } from '@vercel/analytics/react'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const BASE_URL = 'https://santiagomalak.is-a.dev'

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: 'Santiago Malak — Analytics Engineer & Data Scientist',
    template: '%s | Santiago Malak',
  },
  description:
    'Portfolio de Santiago Malak: Analytics Engineer y Data Scientist. BigQuery, dbt, Metabase, SQL, Python, Next.js. 967 atletas monitoreados en producción real. Disponible para roles remotos.',
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
    title: 'Santiago Malak — Analytics Engineer & Data Scientist',
    description:
      'Analytics Engineer con experiencia real en BigQuery, dbt y Metabase. 967 atletas monitoreados en producción.',
    images: [
      {
        url: '/og-image.svg',
        width: 1200,
        height: 630,
        alt: 'Santiago Malak — Analytics Engineer & Data Scientist',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Santiago Malak — Analytics Engineer & Data Scientist',
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={inter.variable}>
      <body className={`${inter.className} antialiased`}>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
        <Analytics />
      </body>
    </html>
  )
}
