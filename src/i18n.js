import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import Backend from 'i18next-http-backend'
import LanguageDetector from 'i18next-browser-languagedetector'

const languages = ['en', 'es']

i18n
  // load translation using http -> /public/locales
  .use(Backend)
  // detect user language
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  .init({
    fallbackLng: 'en',
    debug: true,
    supportedLngs: languages,
    interpolation: {
      escapeValue: false
    },
    backend: {
      loadPath: '/lang/{{lng}}/{{ns}}.json'
    }
  })

export default i18n
