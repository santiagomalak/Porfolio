import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Data Science & Analytics Engineering',
  description: 'Proyectos de Data Science y Analytics Engineering: sistema para 300+ usuarios en Ivolution, machine learning con Scikit-learn, pipelines BigQuery/dbt y segmentación de usuarios.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
