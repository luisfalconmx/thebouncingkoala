import React from 'react'
import CardService from '@components/CardService'
import { useTranslation } from 'react-i18next'
import './index.pcss'

const Services = () => {
  const { t } = useTranslation()
  const numberOfServices = 4

  return (
    <section className="Services">
      <b className="Services__Label">{t('services.label')}</b>
      <h2 className="Services__Title">{t('services.title')}</h2>
      <div className="Services__Track">
        {Array.from({ length: numberOfServices }).map((_, index) => (
          <CardService
            key={index}
            title={t(`services.cards.${index}.title`)}
            description={t(`services.cards.${index}.description`)}
            link="/"
            linkText={t(`services.cards.${index}.button`)}
          />
        ))}
      </div>
    </section>
  )
}

export default Services
