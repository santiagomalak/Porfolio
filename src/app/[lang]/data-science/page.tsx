import ProjectCard from '@/components/ProjectCard'
import Reveal from '@/components/Reveal'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { dataScienceProjects } from '@/data/projects'

export default function DataScience() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">

        {/* Header */}
        <Reveal className="max-w-3xl mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-secondary-500">Proyectos de</span>{' '}
            <span className="text-primary-700 dark:text-primary-400">Data Science</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Machine learning, análisis estadístico y pipelines de datos — del dataset al insight accionable.
          </p>
        </Reveal>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {dataScienceProjects.map((project, index) => (
            <Reveal key={project.title} delay={index * 100}>
              <ProjectCard {...project} />
            </Reveal>
          ))}
        </div>

        {/* GitHub CTA */}
        <Reveal className="bg-white dark:bg-[#0f0f17] rounded-2xl border border-gray-200 dark:border-[#1e1e32] p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">Jupyter Notebooks & más análisis</h2>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Explorá todos mis notebooks y proyectos de análisis de datos en GitHub.
            </p>
          </div>
          <a
            href="https://github.com/santiagomalak?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary-600 text-white rounded-xl hover:bg-primary-700 transition-all font-medium whitespace-nowrap shadow-lg shadow-primary-200 hover:scale-[1.02]"
          >
            Ver en GitHub
            <ArrowRight className="h-4 w-4" />
          </a>
        </Reveal>

      </div>
    </div>
  )
}
