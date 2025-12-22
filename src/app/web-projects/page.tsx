import ProjectCard from '@/components/ProjectCard'

const webProjects = [
  {
    title: 'Wayra Huasi - Rental Platform',
    description: 'Landing page profesional para servicio de alquiler de departamentos amueblados. Sitio estático con diseño limpio, galería de imágenes y sistema de contacto integrado con WhatsApp.',
    tags: ['HTML', 'CSS', 'JavaScript', 'Responsive Design'],
    githubUrl: 'https://github.com/santiagomalak/Servicios---Tu-Complejo',
    liveUrl: 'https://resplendent-kangaroo-a8dbd3.netlify.app/',
    type: 'web' as const,
  },
  {
    title: 'Portfolio Personal',
    description: 'Portfolio profesional de doble especialidad (Desarrollo Web & Data Science) construido con Next.js 14 y App Router. Sistema de diseño personalizado con Tailwind CSS.',
    tags: ['Next.js 14', 'TypeScript', 'Tailwind CSS', 'React'],
    githubUrl: 'https://github.com/santiagomalak/Porfolio',
    type: 'web' as const,
  },
]

export default function WebProjects() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-primary-700">Proyectos de</span>{' '}
            <span className="text-secondary-500">Desarrollo Web</span>
          </h1>
          <p className="text-xl text-gray-600">
            Aplicaciones web modernas construidas con las últimas tecnologías y mejores prácticas.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {webProjects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>

        {/* Empty state si no hay proyectos */}
        {webProjects.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-500">
              Próximamente se añadirán proyectos aquí.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
