import React from 'react'
import { useTranslation } from 'react-i18next'
import Image from '@components/Image'
import Button from '@components/Button'
import ImageFeaturedMockup from '@images/featured-mockup.png'
import ImageFeaturedMockupWebp from '@images/featured-mockup.png?as=webp'
import './index.pcss'

const Featured = () => {
  const { t } = useTranslation()

  return (
    <section className="Featured">
      <div className="Featured__Content">
        <h2 className="Featured__Title">{t('featured.title')}</h2>
        <p className="Featured__Description">{t('featured.description')}</p>
        <Button text={t('button')} className="Featured__Button" />
      </div>
      <Image
        className="Featured__Image"
        src={ImageFeaturedMockup}
        srcSet={ImageFeaturedMockupWebp}
        alt="featured image"
      />
    </section>
  )
}

export default Featured
