import React from 'react'
import { useTranslation } from 'react-i18next'
import CardFAQ from '@components/CardFAQ'

const Home = () => {
  const { t } = useTranslation()

  return (
    <section>
      <b>{t('welcome')}</b>
      <CardFAQ />
    </section>
  )
}

export default Home
