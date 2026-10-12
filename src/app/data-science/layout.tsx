import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Proyectos de Data',
  description: 'Proyectos de datos: sistema de monitoreo para 967 atletas en Ivolution (BigQuery + dbt + Metabase), plataforma dbt sobre 100k+ órdenes Olist, machine learning con scikit-learn y segmentación de usuarios.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
