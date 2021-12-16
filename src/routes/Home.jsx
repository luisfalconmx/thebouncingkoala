import React from 'react'
import { useTranslation } from 'react-i18next'
import FeaturedItem from '@components/FeaturedItem'

const Home = () => {
  const { t } = useTranslation()

  return (
    <section>
      <b>{t('welcome')}</b>
      <FeaturedItem />
    </section>
  )
}

export default Home
