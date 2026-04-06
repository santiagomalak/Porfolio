import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Interactive Dashboards',
  description: 'Dashboards productivos con datos reales: E-Commerce Analytics sobre 100k+ órdenes Olist con dbt + PostgreSQL, y Crypto Live Dashboard con WebSocket Binance y detección de anomalías por z-score.',
  openGraph: {
    title: 'Interactive Dashboards — Santiago Aragon',
    description: 'E-Commerce Analytics + Crypto Live Dashboard. Datos reales, deployados en producción.',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
