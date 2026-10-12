'use client'

import { motion } from 'framer-motion'
import ProjectCard from '@/components/ProjectCard'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1], delay },
  }),
}

const webProjects = [
  {
    title: 'Instituto Coubertin — Plataforma LMS',
    description: 'Plataforma educativa a medida para un instituto de formación deportiva (proyecto de cliente vía Coding Click). Catálogo con buscador y filtros, compra con Stripe e inscripción automática, aula virtual con progreso, foro por curso, evaluaciones con nota y devolución, y panel de administración con estadísticas. Supabase para auth, base de datos con RLS y storage. En etapa final de testing y carga de contenido.',
    tags: ['Next.js', 'TypeScript', 'Supabase', 'PostgreSQL', 'RLS', 'Stripe', 'Resend', 'Vercel'],
    highlight: 'Cliente · Live',
    image: '/project-coubertin.svg',
    liveUrl: 'https://institutocoubertin.com',
    type: 'web' as const,
    accentColor: 'orange' as const,
  },
  {
    title: 'Turnex — Gestión de complejos deportivos',
    description: 'Sistema de gestión para complejos deportivos: socios y cuentas corrientes, cuotas, reservas de canchas, turnos fijos, control de acceso con carnet QR, cobros, caja diaria y portal del socio. PostgreSQL con SQL directo (sin ORM) y migraciones versionadas, roles por perfil (admin, recepción, cobranzas, socio), cron diario idempotente y tests con Vitest + Playwright. Demo funcional con datos ficticios.',
    tags: ['Next.js 16', 'TypeScript', 'PostgreSQL', 'SQL', 'Supabase Auth', 'Zod', 'Vitest', 'Playwright'],
    highlight: 'Demo funcional',
    image: '/project-turnex.svg',
    githubUrl: 'https://github.com/santiagomalak/Turnex',
    type: 'web' as const,
    accentColor: 'green' as const,
  },
  {
    title: 'StackAdvisor',
    description: 'SaaS propia: un cuestionario evalúa 35 combinaciones de stacks y recomienda el óptimo con justificación, roadmap de 12 semanas y estimador de costos. El Blueprint premium usa Gemini para generar arquitectura, base de datos, plan semana a semana y prompts para desarrollar con IA. Pensado para developers independientes y founders latinoamericanos.',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Gemini', 'Decision Engine', 'SaaS'],
    highlight: 'En producción',
    image: '/project-stackadvisor.png',
    githubUrl: 'https://github.com/santiagomalak/stackadvisor-',
    liveUrl: 'https://stackadvisor-nu.vercel.app',
    type: 'web' as const,
    accentColor: 'purple' as const,
  },
  {
    title: 'Coding Click — Sitio de la agencia',
    description: 'Sitio de Coding Click, mi marca de desarrollo para PYMEs: web, sistemas a medida, data y automatización. Multi-página en React + Vite con escena 3D con física (Three.js + cannon-es), motion con GSAP y Lenis, y un recomendador interactivo que sugiere el pack según las necesidades del cliente.',
    tags: ['React', 'TypeScript', 'Vite', 'Three.js', 'GSAP', 'Tailwind CSS'],
    highlight: 'Live',
    image: '/project-codingclick.svg',
    githubUrl: 'https://github.com/santiagomalak/Coding-Click',
    liveUrl: 'https://coding-click.vercel.app',
    type: 'web' as const,
    accentColor: 'teal' as const,
  },
  {
    title: 'Crypto Live Dashboard',
    description: 'Dashboard en tiempo real conectado a Binance WebSocket: velas, volumen, 6 timeframes (1m→1d) y detección de anomalías por z-score sobre retornos de precio. Feed de trades en vivo con color buy/sell. BTC · ETH · SOL · BNB · XRP. Sin API key — datos 100% públicos.',
    tags: ['Next.js', 'WebSocket', 'Binance API', 'lightweight-charts', 'Zustand', 'Z-score'],
    highlight: 'Tiempo real · LIVE',
    image: '/crypto-cover.svg',
    githubUrl: 'https://github.com/santiagomalak/crypto-dashboard',
    liveUrl: 'https://crypto-dashboard-five-dun.vercel.app',
    type: 'web' as const,
    accentColor: 'purple' as const,
  },
  {
    title: 'FreelanceOS — Propuestas con IA',
    description: 'App en React que genera propuestas freelance personalizadas a partir del brief del cliente usando LLMs. La migré de Claude a Groq + Llama 3.3 70B para reducir el costo de inferencia sin perder calidad en la salida.',
    tags: ['React', 'LLMs', 'Groq', 'Llama 3.3 70B', 'Prompt Engineering'],
    highlight: 'IA aplicada',
    image: '/project-freelanceos.svg',
    githubUrl: 'https://github.com/santiagomalak/freelance-os',
    type: 'web' as const,
    accentColor: 'blue' as const,
  },
  {
    title: 'Wayra Huasi — Plataforma de Alquiler',
    description: 'Sitio web completo para complejo de departamentos amueblados en Córdoba, Argentina. Galería interactiva de unidades, sección de amenities, mapa de ubicación y sistema de reservas con contacto directo vía WhatsApp. Diseño responsivo optimizado para conversión.',
    tags: ['HTML', 'CSS', 'JavaScript', 'Responsive Design', 'WhatsApp API'],
    highlight: 'Live',
    image: '/project-wayrahuasi.png',
    githubUrl: 'https://github.com/santiagomalak/Servicios---Tu-Complejo',
    liveUrl: 'https://resplendent-kangaroo-a8dbd3.netlify.app/',
    type: 'web' as const,
    accentColor: 'green' as const,
  },
]

export default function WebProjects() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">

        {/* Header */}
        <motion.div
          variants={fadeUp} initial="hidden" animate="visible" custom={0}
          className="max-w-3xl mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-primary-700 dark:text-primary-400">Proyectos</span>{' '}
            <span className="text-secondary-500">Full Stack</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Del modelo de datos al deploy: sistemas a medida para clientes, productos propios con IA y
            apps en tiempo real. Next.js, TypeScript, PostgreSQL/Supabase y LLMs.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {webProjects.map((project, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              custom={index * 0.1}
            >
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  )
}
