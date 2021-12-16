import React from 'react'
import { useTranslation } from 'react-i18next'
import Input from '@components/Input'

const Home = () => {
  const { t } = useTranslation()

  return (
    <section>
      <b>{t('welcome')}</b>
      <Input />
    </section>
  )
}

export default Home
