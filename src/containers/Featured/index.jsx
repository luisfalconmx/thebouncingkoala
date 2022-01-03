import React from 'react'
import { useTranslation } from 'react-i18next'
import Button from '@components/Button'
import Image from '@images/featured-mockup.png'
import './index.pcss'

const Featured = () => {
  const { t } = useTranslation()

  return (
    <section className="Featured">
      <div className="Featured__Content">
        <h2 className="Featured__Title">{t('featured.title')}</h2>
        <p className="Featured__Description">{t('featured.description')}</p>
        <Button translate="button" className="Featured__Button" />
      </div>
      <img className="Featured__Image" src={Image} alt="featured image" />
    </section>
  )
}

export default Featured
