import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const BASE_URL = 'https://santiagoaragon.vercel.app'

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: 'Santiago Aragon — Data Scientist & Full-Stack Developer',
    template: '%s | Santiago Aragon',
  },
  description:
    'Portfolio de Santiago Aragon: Data Scientist y Full-Stack Developer. Especializado en React, Next.js, Python y Machine Learning. Disponible para proyectos freelance.',
  keywords: [
    'Santiago Aragon',
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
  authors: [{ name: 'Santiago Aragon' }],
  creator: 'Santiago Aragon',
  openGraph: {
    type: 'website',
    locale: 'es_AR',
    url: BASE_URL,
    siteName: 'Santiago Aragon',
    title: 'Santiago Aragon — Data Scientist & Full-Stack Developer',
    description:
      'Portfolio profesional combinando desarrollo web moderno y análisis de datos impactante.',
    images: [
      {
        url: '/og-image.svg',
        width: 1200,
        height: 630,
        alt: 'Santiago Aragon — Data Scientist & Full-Stack Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Santiago Aragon — Data Scientist & Full-Stack Developer',
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
      </body>
    </html>
  )
}
