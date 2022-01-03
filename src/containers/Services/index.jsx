import React from 'react'
import CardService from '@components/CardService'
import { useTranslation } from 'react-i18next'
import './index.pcss'

const Services = () => {
  const { t } = useTranslation()

  return (
    <section className="Services">
      <b className="Services__Label">{t('services.label')}</b>
      <h2 className="Services__Title">{t('services.title')}</h2>
      <div className="Services__Track">
        <CardService
          title={t('cardService.title')}
          description={t('cardService.description')}
          link="/"
          linkText={t('cardService.button')}
        />
        <CardService
          title={t('cardService.title')}
          description={t('cardService.description')}
          link="/"
          linkText={t('cardService.button')}
        />
        <CardService
          title={t('cardService.title')}
          description={t('cardService.description')}
          link="/"
          linkText={t('cardService.button')}
        />
        <CardService
          title={t('cardService.title')}
          description={t('cardService.description')}
          link="/"
          linkText={t('cardService.button')}
        />
      </div>
    </section>
  )
}

export default Services
