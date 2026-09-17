import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sobre mí',
  description: 'Analytics Engineer y Full-Stack Developer. Ex Ivolution Sport Science — sistema de análisis para 967 atletas en 13 deportes. Actualmente construyendo StackAdvisor y abierto a roles remotos.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
