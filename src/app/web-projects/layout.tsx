import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Proyectos Full Stack',
  description: 'Proyectos full stack: Instituto Coubertin (LMS a medida), Turnex (gestión de complejos deportivos), StackAdvisor (SaaS con IA), sitio de Coding Click y más. Next.js, TypeScript, Supabase y PostgreSQL.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
