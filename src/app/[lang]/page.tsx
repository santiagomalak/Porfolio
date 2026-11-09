import HomeView from './HomeView'
import { education } from '@/data/education'
import { getFeaturedProjects } from '@/data/projects'
import { getRibbonRows } from '@/data/skills'
import { cvPath, toLocale } from '@/i18n/config'
import { getDictionary } from '@/i18n/get-dictionary'

// Metadata for the home page comes from the [lang] layout.
export default function Home({ params }: { params: { lang: string } }) {
  const lang = toLocale(params.lang)
  const dict = getDictionary(lang)
  const studies = education.map((e) => {
    const copy = dict.education.items[e.id]
    return {
      id: e.id,
      badge: copy.badge,
      title: copy.title,
      institution: copy.institution,
      period: copy.period,
      certificateUrl: e.certificateUrl,
      color: e.color,
      border: e.border,
      tag: e.tag,
    }
  })

  return (
    <HomeView
      lang={lang}
      t={dict.home}
      roleShort={dict.common.roleShort}
      downloadCv={dict.common.downloadCv}
      cvHref={cvPath[lang]}
      featured={getFeaturedProjects(lang)}
      ribbon={getRibbonRows(lang)}
      studies={studies}
      dashboards={{ live: dict.dashboards.live, items: dict.dashboards.items }}
      workTogether={dict.common.workTogether}
    />
  )
}
