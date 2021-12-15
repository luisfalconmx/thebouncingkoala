import React from 'react'
import { useTranslation } from 'react-i18next'
import CardService from '@components/CardService'

const Home = () => {
  const { t } = useTranslation()

  return (
    <section>
      <b>{t('welcome')}</b>
      <CardService />
    </section>
  )
}

export default Home
