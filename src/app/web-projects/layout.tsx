import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Proyectos Web',
  description: 'Proyectos de desarrollo web: StackAdvisor (SaaS en producción), Wayra Huasi rental platform y más. Construidos con Next.js, TypeScript y TailwindCSS.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
