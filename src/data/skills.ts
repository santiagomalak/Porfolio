import type { Locale } from '@/i18n/config'

/**
 * Single source of truth for tools/skills: the home ribbon and the About
 * "Tech stack" cards both read from here. Group titles live in the dictionary.
 */
export type SkillGroup = 'data' | 'fullstack' | 'ai'

export type ChipColor = 'blue' | 'orange' | 'indigo' | 'teal' | 'yellow' | 'purple' | 'green' | 'cyan' | 'gray'

interface SkillSource {
  /** Tool names are language-neutral; the few that aren't carry one per locale. */
  name: string | Record<Locale, string>
  group: SkillGroup
  /** Chip color on the About page. */
  color: ChipColor
  /** Shown in the home ribbon (max 12 in total). */
  ribbon?: boolean
}

export interface Skill {
  name: string
  group: SkillGroup
  color: ChipColor
  ribbon: boolean
}

// Ribbon order follows the array order.
const skills: SkillSource[] = [
  // Data
  { name: 'SQL', group: 'data', color: 'teal', ribbon: true },
  { name: 'Python', group: 'data', color: 'yellow', ribbon: true },
  { name: 'dbt', group: 'data', color: 'orange', ribbon: true },
  { name: 'Metabase', group: 'data', color: 'indigo', ribbon: true },
  { name: 'Power BI', group: 'data', color: 'yellow', ribbon: true },
  { name: 'BigQuery', group: 'data', color: 'blue', ribbon: true },
  { name: 'PostgreSQL', group: 'data', color: 'purple', ribbon: true },
  { name: 'pandas', group: 'data', color: 'blue' },
  { name: 'scikit-learn', group: 'data', color: 'orange' },
  // Full stack
  { name: 'React', group: 'fullstack', color: 'cyan', ribbon: true },
  { name: 'Next.js', group: 'fullstack', color: 'gray', ribbon: true },
  { name: 'TypeScript', group: 'fullstack', color: 'blue' },
  { name: 'Node.js · APIs REST', group: 'fullstack', color: 'green' },
  { name: 'Supabase', group: 'fullstack', color: 'green' },
  { name: 'Tailwind CSS', group: 'fullstack', color: 'cyan' },
  { name: 'Docker · Vercel', group: 'fullstack', color: 'gray' },
  { name: 'Git', group: 'fullstack', color: 'orange', ribbon: true },
  // AI & automation
  { name: 'n8n', group: 'ai', color: 'orange', ribbon: true },
  {
    name: { es: 'IA (Claude / Gemini)', en: 'AI (Claude / Gemini)', pt: 'IA (Claude / Gemini)' },
    group: 'ai',
    color: 'purple',
    ribbon: true,
  },
  { name: 'Make · Zapier', group: 'ai', color: 'purple' },
  { name: 'Groq · Ollama', group: 'ai', color: 'gray' },
]

export function getSkills(lang: Locale): Skill[] {
  return skills.map((s) => ({
    name: typeof s.name === 'string' ? s.name : s.name[lang],
    group: s.group,
    color: s.color,
    ribbon: s.ribbon ?? false,
  }))
}

/** The two ribbon rows: data tools first, then the complements (dev + AI). */
export function getRibbonRows(lang: Locale): { data: string[]; complements: string[] } {
  const ribbon = getSkills(lang).filter((s) => s.ribbon)
  return {
    data: ribbon.filter((s) => s.group === 'data').map((s) => s.name),
    complements: ribbon.filter((s) => s.group !== 'data').map((s) => s.name),
  }
}
