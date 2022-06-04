import React from 'react'
import { useTranslation } from 'react-i18next'
import Button from '@components/Button'
import FeaturedItem from '@components/FeaturedItem'
import './index.pcss'

const Pricing = () => {
  const { t } = useTranslation()

  return (
    <section className="Pricing" id="pricing">
      <div className="Pricing__Head">
        <div>
          <p className="Pricing__HeadTitle">{t('pricing.caption')}</p>
          <p className="Pricing__HeadDescription">{t('pricing.text')}</p>
        </div>
        <Button text={t('button')} className="Pricing__HeadButton" />
      </div>
      <div className="Pricing__Separator" />
      <div className="Pricing__Content">
        <div className="Pricing__Info">
          <b className="Pricing__Label">{t('pricing.label')}</b>
          <h2 className="Pricing__Title">{t('pricing.title')}</h2>
          <p className="Pricing__Description">{t('pricing.description')}</p>
        </div>
        <div className="Pricing__List">
          <FeaturedItem content={t('featuredItem.item_1')} />
          <FeaturedItem content={t('featuredItem.item_1')} />
          <FeaturedItem content={t('featuredItem.item_1')} />
          <FeaturedItem content={t('featuredItem.item_1')} />
          <FeaturedItem content={t('featuredItem.item_1')} />
          <FeaturedItem content={t('featuredItem.item_1')} />
          <FeaturedItem content={t('featuredItem.item_1')} />
          <FeaturedItem content={t('featuredItem.item_1')} />
        </div>
      </div>
    </section>
  )
}

export default Pricing
