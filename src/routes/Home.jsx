import React from 'react'
import { useTranslation } from 'react-i18next'
import CardBlog from '@components/CardBlog'

const Home = () => {
  const { t } = useTranslation()

  return (
    <section>
      <b>{t('welcome')}</b>
      <CardBlog />
    </section>
  )
}

export default Home
