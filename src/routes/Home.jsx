import React from 'react'
import { useTranslation } from 'react-i18next'
import User from '@components/User'

const Home = () => {
  const { t } = useTranslation()

  return (
    <section>
      <b>{t('welcome')}</b>
      <User />
    </section>
  )
}

export default Home
