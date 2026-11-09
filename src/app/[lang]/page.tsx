import HomeView from './HomeView'
import { cvPath, toLocale } from '@/i18n/config'
import { getDictionary } from '@/i18n/get-dictionary'

// Metadata for the home page comes from the [lang] layout.
export default function Home({ params }: { params: { lang: string } }) {
  const lang = toLocale(params.lang)
  const dict = getDictionary(lang)
  return (
    <HomeView
      lang={lang}
      t={dict.home}
      roleShort={dict.common.roleShort}
      downloadCv={dict.common.downloadCv}
      cvHref={cvPath[lang]}
      dashboards={{ live: dict.dashboards.live, items: dict.dashboards.items }}
      workTogether={dict.common.workTogether}
    />
  )
}
