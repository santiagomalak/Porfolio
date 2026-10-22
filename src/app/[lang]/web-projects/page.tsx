import ProjectCard from '@/components/ProjectCard'
import Reveal from '@/components/Reveal'
import { webProjects } from '@/data/projects'

export default function WebProjects() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">

        {/* Header */}
        <Reveal className="max-w-3xl mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-primary-700 dark:text-primary-400">Proyectos de</span>{' '}
            <span className="text-secondary-500">Desarrollo Web</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Aplicaciones web modernas construidas con las últimas tecnologías y mejores prácticas.
          </p>
        </Reveal>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {webProjects.map((project, index) => (
            <Reveal key={project.title} delay={index * 100}>
              <ProjectCard {...project} />
            </Reveal>
          ))}
        </div>

      </div>
    </div>
  )
}
