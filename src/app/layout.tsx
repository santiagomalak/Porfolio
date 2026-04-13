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
    default: 'Santiago Malak — Data Scientist & Full-Stack Developer',
    template: '%s | Santiago Malak',
  },
  description:
    'Portfolio de Santiago Malak: Data Scientist y Full-Stack Developer. Especializado en React, Next.js, Python y Machine Learning. Disponible para proyectos freelance.',
  keywords: [
    'Santiago Malak',
    'Data Scientist',
    'Full-Stack Developer',
    'React',
    'Next.js',
    'Python',
    'Machine Learning',
    'TypeScript',
    'SQL',
    'portfolio',
    'desarrollo web',
    'ciencia de datos',
  ],
  authors: [{ name: 'Santiago Malak' }],
  creator: 'Santiago Malak',
  openGraph: {
    type: 'website',
    locale: 'es_AR',
    url: BASE_URL,
    siteName: 'Santiago Malak',
    title: 'Santiago Malak — Data Scientist & Full-Stack Developer',
    description:
      'Portfolio profesional combinando desarrollo web moderno y análisis de datos impactante.',
    images: [
      {
        url: '/og-image.svg',
        width: 1200,
        height: 630,
        alt: 'Santiago Malak — Data Scientist & Full-Stack Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Santiago Malak — Data Scientist & Full-Stack Developer',
    description:
      'Portfolio profesional combinando desarrollo web moderno y análisis de datos impactante.',
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
