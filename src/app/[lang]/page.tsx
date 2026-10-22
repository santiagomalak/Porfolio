import HomeView from './HomeView'
import { toLocale } from '@/i18n/config'
import { getDictionary } from '@/i18n/get-dictionary'

// Metadata for the home page comes from the [lang] layout.
export default function Home({ params }: { params: { lang: string } }) {
  const lang = toLocale(params.lang)
  const dict = getDictionary(lang)
  return <HomeView lang={lang} t={dict.home} workTogether={dict.common.workTogether} />
}
