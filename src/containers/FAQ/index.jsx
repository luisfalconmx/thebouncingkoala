import React from 'react'
import { useTranslation } from 'react-i18next'
import CardFAQ from '@components/CardFAQ'
import './index.pcss'

const FAQ = () => {
  const { t } = useTranslation()

  return (
    <section className="FAQ">
      <h2 className="FAQ__Title">{t('faq.title')}</h2>
      <p className="FAQ__Description">{t('faq.description')}</p>
      <div className="FAQ__Grid">
        <CardFAQ
          question={t('cardFaq.question')}
          answer={t('cardFaq.answer')}
        />
        <CardFAQ
          question={t('cardFaq.question')}
          answer={t('cardFaq.answer')}
        />
        <CardFAQ
          question={t('cardFaq.question')}
          answer={t('cardFaq.answer')}
        />
        <CardFAQ
          question={t('cardFaq.question')}
          answer={t('cardFaq.answer')}
        />
      </div>
    </section>
  )
}

export default FAQ
