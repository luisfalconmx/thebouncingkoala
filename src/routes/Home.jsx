import React from 'react'
import { useTranslation } from 'react-i18next'
import CardTeam from '@components/CardTeam'

const Home = () => {
  const { t } = useTranslation()

  return (
    <section>
      <b>{t('welcome')}</b>
      <CardTeam />
    </section>
  )
}

export default Home
