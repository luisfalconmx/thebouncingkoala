// Dependencies
import React from 'react'
import Hero from '@components/Hero'
import { useTranslation } from 'react-i18next'

// Assets
import Logo from '@images/tailwindcss.png'

const App = () => {
  const { t, i18n } = useTranslation()

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng)
  }

  return (
    <>
      <Hero title={t('welcome')} image={Logo} imageAlt="Tailwindcss Logo" />
      <button
        className="bg-indigo-800 p-4"
        onClick={() => changeLanguage('es')}
      >
        Cambiar a español
      </button>
      <button className="bg-red-600 p-4" onClick={() => changeLanguage('en')}>
        Change to english
      </button>
    </>
  )
}

export default App
