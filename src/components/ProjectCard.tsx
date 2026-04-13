import Link from 'next/link'
import { ExternalLink, Github, BookOpen } from 'lucide-react'

interface ProjectCardProps {
  title: string
  description: string
  tags: string[]
  highlight?: string
  image?: string
  githubUrl?: string
  liveUrl?: string
  notebookUrl?: string
  type: 'web' | 'datascience'
  accentColor?: 'blue' | 'purple' | 'green' | 'orange' | 'teal'
}

const gradients: Record<string, string> = {
  blue:   'from-blue-50 to-indigo-100',
  purple: 'from-purple-50 to-violet-100',
  green:  'from-emerald-50 to-teal-100',
  orange: 'from-orange-50 to-amber-100',
  teal:   'from-teal-50 to-cyan-100',
}

const iconColors: Record<string, string> = {
  blue:   'text-blue-300',
  purple: 'text-purple-300',
  green:  'text-emerald-300',
  orange: 'text-orange-300',
  teal:   'text-teal-300',
}

const tagColors: Record<string, string> = {
  blue:   'bg-blue-50 text-blue-700',
  purple: 'bg-purple-50 text-purple-700',
  green:  'bg-emerald-50 text-emerald-700',
  orange: 'bg-orange-50 text-orange-700',
  teal:   'bg-teal-50 text-teal-700',
}

const highlightColors: Record<string, string> = {
  blue:   'bg-blue-600',
  purple: 'bg-purple-600',
  green:  'bg-emerald-600',
  orange: 'bg-orange-500',
  teal:   'bg-teal-600',
}

export default function ProjectCard({
  title,
  description,
  tags,
  highlight,
  image,
  githubUrl,
  liveUrl,
  notebookUrl,
  type,
  accentColor = 'blue',
}: ProjectCardProps) {
  const gradient = gradients[accentColor]
  const iconColor = iconColors[accentColor]
  const tagColor = tagColors[accentColor]
  const highlightColor = highlightColors[accentColor]

  return (
    <div className="group relative bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full">

      {/* Header visual */}
      <div className={`aspect-video bg-gradient-to-br ${gradient} relative overflow-hidden`}>
        {image ? (
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className={`w-full h-full flex items-center justify-center text-5xl ${iconColor} select-none`}>
            {type === 'web' ? '🌐' : '📊'}
          </div>
        )}
        {/* Highlight badge */}
        {highlight && (
          <span className={`absolute top-3 right-3 ${highlightColor} text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md`}>
            {highlight}
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-lg font-bold mb-2 text-gray-900 leading-snug">
          {title}
        </h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-3 flex-grow">
          {description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {tags.map((tag, index) => (
            <span
              key={index}
              className={`px-2.5 py-0.5 ${tagColor} text-xs font-medium rounded-full`}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-4 mt-auto border-t border-gray-100 pt-4">
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm text-gray-500 hover:text-gray-900 transition-colors font-medium"
            >
              <Github className="h-4 w-4" />
              Código
            </a>
          )}
          {notebookUrl && (
            <a
              href={notebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm text-gray-500 hover:text-gray-900 transition-colors font-medium"
            >
              <BookOpen className="h-4 w-4" />
              Notebook
            </a>
          )}
          {liveUrl && (
            liveUrl.startsWith('/') ? (
              <Link
                href={liveUrl}
                className="flex items-center gap-1.5 text-sm text-gray-500 hover:text-gray-900 transition-colors font-medium"
              >
                <ExternalLink className="h-4 w-4" />
                Ver detalle
              </Link>
            ) : (
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-sm text-gray-500 hover:text-gray-900 transition-colors font-medium"
              >
                <ExternalLink className="h-4 w-4" />
                Ver proyecto
              </a>
            )
          )}
        </div>
      </div>
    </div>
  )
}
