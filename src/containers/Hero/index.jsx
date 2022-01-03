import React from 'react'
import { useTranslation } from 'react-i18next'
import Image from '@components/Image'
import Button from '@components/Button'
import HeroImage from '@images/HeroImage.png'
import HeroImageWebp from '@images/HeroImage.png?as=webp'
import './index.pcss'

const Hero = () => {
  const { t } = useTranslation()

  return (
    <section className="Hero">
      <div className="Hero__Content">
        <h1 className="Hero__Title">{t('hero.title')}</h1>
        <p className="Hero__Description">{t('hero.description')}</p>
        <Button text={t('button')} className="Hero__Button" />
      </div>
      <Image
        className="Hero__Image"
        src={HeroImage}
        srcSet={HeroImageWebp}
        alt="The bouncing koala hero"
      />
    </section>
  )
}

export default Hero
