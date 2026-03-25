import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contacto',
  description: 'Abierto a roles remotos de Analytics Engineer, Data Engineer, Data Scientist o Full-Stack Developer. También a proyectos freelance. Escribime.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
