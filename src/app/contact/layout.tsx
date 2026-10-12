import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contacto',
  description: 'Abierto a roles remotos junior / semi-senior: Analytics Engineer, Data Analyst, Data Scientist, Full Stack o AI/Automation Engineer. También proyectos freelance. Escribime.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
