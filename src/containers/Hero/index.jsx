import React from 'react'
import { useTranslation } from 'react-i18next'
import Button from '@components/Button'
import Image from '@images/HeroImage.png'
import './index.pcss'

const Hero = () => {
  const { t } = useTranslation()

  return (
    <section className="Hero">
      <div className="Hero__Content">
        <h1 className="Hero__Title">{t('hero.title')}</h1>
        <p className="Hero__Description">{t('hero.description')}</p>
        <Button />
      </div>
      <img className="Hero__Image" src={Image} alt="thebouncingkoala hero" />
    </section>
  )
}

export default Hero
