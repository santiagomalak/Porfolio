import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sobre mí',
  description: 'Hybrid Engineer: Data + Full Stack + IA. Founder de Coding Click y ex Data Scientist / Analytics Engineer en Ivolution Sport Science (967 atletas monitoreados). Abierto a roles remotos.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
