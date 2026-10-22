import type { Metadata } from 'next'
import ProjectCard from '@/components/ProjectCard'
import Reveal from '@/components/Reveal'
import { ArrowRight } from 'lucide-react'
import { getDataScienceProjects } from '@/data/projects'
import { toLocale } from '@/i18n/config'
import { getDictionary } from '@/i18n/get-dictionary'
import { pageMetadata } from '@/i18n/metadata'

type Props = { params: { lang: string } }

export function generateMetadata({ params }: Props): Metadata {
  const lang = toLocale(params.lang)
  return pageMetadata(lang, '/data-science', getDictionary(lang).meta.dataScience)
}

export default function DataScience({ params }: Props) {
  const lang = toLocale(params.lang)
  const dict = getDictionary(lang)
  const t = dict.dataScience

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">

        {/* Header */}
        <Reveal className="max-w-3xl mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-secondary-500">{t.titleA}</span>{' '}
            <span className="text-primary-700 dark:text-primary-400">{t.titleB}</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">{t.intro}</p>
        </Reveal>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {getDataScienceProjects(lang).map((project, index) => (
            <Reveal key={project.title} delay={index * 100}>
              <ProjectCard {...project} labels={dict.projectCard} />
            </Reveal>
          ))}
        </div>

        {/* GitHub CTA */}
        <Reveal className="bg-white dark:bg-[#0f0f17] rounded-2xl border border-gray-200 dark:border-[#1e1e32] p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{t.githubTitle}</h2>
            <p className="text-gray-600 dark:text-gray-400 text-sm">{t.githubBody}</p>
          </div>
          <a
            href="https://github.com/santiagomalak?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary-600 text-white rounded-xl hover:bg-primary-700 transition-all font-medium whitespace-nowrap shadow-lg shadow-primary-200 dark:shadow-primary-900/30 hover:scale-[1.02]"
          >
            {t.githubCta}
            <ArrowRight className="h-4 w-4" />
          </a>
        </Reveal>

      </div>
    </div>
  )
}
