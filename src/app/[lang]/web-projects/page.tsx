import type { Metadata } from 'next'
import ProjectCard from '@/components/ProjectCard'
import Reveal from '@/components/Reveal'
import { getWebProjects } from '@/data/projects'
import { toLocale } from '@/i18n/config'
import { getDictionary } from '@/i18n/get-dictionary'
import { pageMetadata } from '@/i18n/metadata'

type Props = { params: { lang: string } }

export function generateMetadata({ params }: Props): Metadata {
  const lang = toLocale(params.lang)
  return pageMetadata(lang, '/web-projects', getDictionary(lang).meta.webProjects)
}

export default function WebProjects({ params }: Props) {
  const lang = toLocale(params.lang)
  const dict = getDictionary(lang)
  const t = dict.webProjects

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">

        {/* Header */}
        <Reveal className="max-w-3xl mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-primary-700 dark:text-primary-400">{t.titleA}</span>{' '}
            <span className="text-secondary-500">{t.titleB}</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">{t.intro}</p>
        </Reveal>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {getWebProjects(lang).map((project, index) => (
            <Reveal key={project.title} delay={index * 100}>
              <ProjectCard {...project} labels={dict.projectCard} />
            </Reveal>
          ))}
        </div>

      </div>
    </div>
  )
}
