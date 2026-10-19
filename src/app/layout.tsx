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
    default: 'Santiago Aragon Malak — Hybrid Engineer: Data + Full Stack + IA',
    template: '%s | Santiago Aragon Malak',
  },
  description:
    'Hybrid Engineer: Data + Full Stack + IA. Construyo pipelines en BigQuery + dbt, dashboards, aplicaciones React/Next.js y automatizaciones con n8n + LLMs. 967 atletas monitoreados en producción en Ivolution. Abierto a roles remotos.',
  keywords: [
    'Santiago Aragon Malak',
    'Santiago Malak',
    'Hybrid Engineer',
    'Analytics Engineer',
    'Full Stack Developer',
    'AI Automation Engineer',
    'Data Analyst',
    'Data Scientist',
    'BigQuery',
    'dbt',
    'SQL',
    'Python',
    'React',
    'Next.js',
    'TypeScript',
    'Supabase',
    'n8n',
    'LLMs',
    'portfolio',
  ],
  authors: [{ name: 'Santiago Aragon Malak' }],
  creator: 'Santiago Aragon Malak',
  openGraph: {
    type: 'website',
    locale: 'es_AR',
    url: BASE_URL,
    siteName: 'Santiago Aragon Malak',
    title: 'Santiago Aragon Malak — Hybrid Engineer: Data + Full Stack + IA',
    description:
      'Modelo los datos, construyo la interfaz que los consume y automatizo el proceso completo. BigQuery · dbt · Next.js · n8n + LLMs.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Santiago Aragon Malak — Hybrid Engineer: Data + Full Stack + IA',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Santiago Aragon Malak — Hybrid Engineer: Data + Full Stack + IA',
    description:
      'Modelo los datos, construyo la interfaz que los consume y automatizo el proceso completo. BigQuery · dbt · Next.js · n8n + LLMs.',
    images: ['/og-image.png'],
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
    <html lang="es" className={inter.variable} suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
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
