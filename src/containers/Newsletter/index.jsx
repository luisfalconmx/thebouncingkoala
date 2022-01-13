import React from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import Input from '@components/Input'
import Button from '@components/Button'
import './index.pcss'

const Newsletter = () => {
  const { t } = useTranslation()

  return (
    <section className="Newsletter">
      <div className="Newsletter__Container">
        <div className="Newsletter__Info">
          <h2 className="Newsletter__Title">{t('newsletter.title')}</h2>
          <p className="Newsletter__Description">
            {t('newsletter.description')}
          </p>
        </div>
        <form className="Newsletter__Form">
          <div className="Newsletter__FormElement">
            <Input className="Newsletter__Input" />
            <Button text={t('button')} className="Newsletter__Button" />
          </div>
          <small className="Newsletter__Leyend">
            {t('newsletter.leyend')}{' '}
            <Link to="/privacy">{t('newsletter.privacy')}</Link>
          </small>
        </form>
      </div>
    </section>
  )
}

export default Newsletter
