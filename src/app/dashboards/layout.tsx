import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Dashboards interactivos',
  description: 'Dashboards productivos con datos reales: E-Commerce Analytics sobre 100k+ órdenes Olist con dbt + PostgreSQL, y Crypto Live Dashboard con WebSocket Binance y detección de anomalías por z-score.',
  openGraph: {
    title: 'Dashboards interactivos — Santiago Aragon Malak',
    description: 'E-Commerce Analytics + Crypto Live Dashboard. Datos reales, deployados en producción.',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
