import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sobre mí',
  description: 'Data Engineer, Analytics Engineer y Full-Stack Developer. Ex Ivolution Sport Science — sistema de análisis para 300+ personas. Actualmente construyendo StackAdvisor y abierto a roles remotos.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
