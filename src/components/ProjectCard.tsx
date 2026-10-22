'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ExternalLink, Github, BookOpen, ChevronDown } from 'lucide-react'
import type { Project } from '@/data/projects'
import type { Dictionary } from '@/i18n/get-dictionary'

type ProjectCardProps = Project & { labels: Dictionary['projectCard'] }

const gradients: Record<string, string> = {
  blue:   'from-blue-50 to-indigo-100 dark:from-blue-950/40 dark:to-indigo-950/40',
  purple: 'from-purple-50 to-violet-100 dark:from-purple-950/40 dark:to-violet-950/40',
  green:  'from-emerald-50 to-teal-100 dark:from-emerald-950/40 dark:to-teal-950/40',
  orange: 'from-orange-50 to-amber-100 dark:from-orange-950/40 dark:to-amber-950/40',
  teal:   'from-teal-50 to-cyan-100 dark:from-teal-950/40 dark:to-cyan-950/40',
}

const iconColors: Record<string, string> = {
  blue: 'text-blue-300', purple: 'text-purple-300',
  green: 'text-emerald-300', orange: 'text-orange-300', teal: 'text-teal-300',
}

const tagColors: Record<string, string> = {
  blue:   'bg-blue-50 text-blue-700 dark:bg-blue-950/50 dark:text-blue-400',
  purple: 'bg-purple-50 text-purple-700 dark:bg-purple-950/50 dark:text-purple-400',
  green:  'bg-emerald-50 text-emerald-700 dark:bg-emerald-950/50 dark:text-emerald-400',
  orange: 'bg-orange-50 text-orange-700 dark:bg-orange-950/50 dark:text-orange-400',
  teal:   'bg-teal-50 text-teal-700 dark:bg-teal-950/50 dark:text-teal-400',
}

const highlightColors: Record<string, string> = {
  blue: 'bg-blue-600', purple: 'bg-purple-600',
  green: 'bg-emerald-700', orange: 'bg-orange-700', teal: 'bg-teal-700',
}

const langColors: Record<string, string> = {
  SQL: '#67e8f9', Python: '#4ade80', dbt: '#f97316',
}

export default function ProjectCard({
  title, description, tags, highlight, image,
  githubUrl, liveUrl, notebookUrl, type,
  accentColor = 'blue', codeSnippet, labels,
}: ProjectCardProps) {
  const [codeOpen, setCodeOpen] = useState(false)

  const gradient      = gradients[accentColor]
  const iconColor     = iconColors[accentColor]
  const tagColor      = tagColors[accentColor]
  const highlightColor = highlightColors[accentColor]
  const langColor     = langColors[codeSnippet?.language ?? ''] ?? '#e2e8f0'

  return (
    <div className="group relative bg-white dark:bg-[#0f0f17] rounded-2xl border border-gray-200 dark:border-[#1e1e32] overflow-hidden hover:shadow-xl dark:hover:shadow-[#1e1e32]/50 hover:-translate-y-1 transition-all duration-300 flex flex-col h-full">

      {/* Header visual */}
      <div className={`aspect-video bg-gradient-to-br ${gradient} relative overflow-hidden`}>
        {image ? (
          <Image
            src={image}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className={`w-full h-full flex items-center justify-center text-5xl ${iconColor} select-none`}>
            {type === 'web' ? '🌐' : '📊'}
          </div>
        )}
        {highlight && (
          <span className={`absolute top-3 right-3 ${highlightColor} text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md`}>
            {highlight}
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white leading-snug">{title}</h3>
        <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-3 flex-grow">{description}</p>

        <div className="flex flex-wrap gap-1.5 mb-5">
          {tags.map((tag, i) => (
            <span key={i} className={`px-2.5 py-0.5 ${tagColor} text-xs font-medium rounded-full`}>{tag}</span>
          ))}
        </div>

        <div className="flex gap-4 mt-auto border-t border-gray-100 dark:border-[#1e1e32] pt-4">
          {githubUrl && (
            <a href={githubUrl} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors font-medium">
              <Github className="h-4 w-4" /> {labels.code}
            </a>
          )}
          {notebookUrl && (
            <a href={notebookUrl} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors font-medium">
              <BookOpen className="h-4 w-4" /> {labels.notebook}
            </a>
          )}
          {liveUrl && (
            liveUrl.startsWith('/') ? (
              <Link href={liveUrl}
                className="flex items-center gap-1.5 text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors font-medium">
                <ExternalLink className="h-4 w-4" /> {labels.viewDetail}
              </Link>
            ) : (
              <a href={liveUrl} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors font-medium">
                <ExternalLink className="h-4 w-4" /> {labels.viewProject}
              </a>
            )
          )}
        </div>
      </div>

      {/* Code snippet toggle */}
      {codeSnippet && (
        <div className="border-t border-gray-100 dark:border-[#1e1e32]">
          <button
            onClick={() => setCodeOpen(!codeOpen)}
            aria-expanded={codeOpen}
            className="w-full flex items-center justify-between px-6 py-2.5 text-xs font-medium text-gray-400 dark:text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 hover:bg-gray-50 dark:hover:bg-[#111120] transition-all"
          >
            <span className="flex items-center gap-1.5">
              <span className="font-mono text-[11px]">{'{ }'}</span>
              {codeOpen ? labels.hideCode : labels.showCode}
            </span>
            <span className="flex items-center gap-2">
              <span className="font-mono text-[10px] px-1.5 py-0.5 rounded" style={{ color: langColor, background: `${langColor}15`, border: `1px solid ${langColor}30` }}>
                {codeSnippet.language}
              </span>
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${codeOpen ? 'rotate-180' : ''}`} />
            </span>
          </button>

          <div className={`overflow-hidden transition-all duration-300 ${codeOpen ? 'max-h-80' : 'max-h-0'}`}>
            <div style={{ background: '#080810', borderTop: '1px solid #1e1e32' }}>
              <pre className="p-4 text-[11px] font-mono leading-5 overflow-x-auto text-[#e2e8f0] overflow-y-auto max-h-72">
                <code>{codeSnippet.code}</code>
              </pre>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
