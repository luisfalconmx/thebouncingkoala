import React from 'react'
import propTypes from 'prop-types'
import { useTranslation } from 'react-i18next'
import './index.pcss'

const Button = ({ className = '', text = 'Get Started' }) => {
  const { t } = useTranslation()

  return <button className={`Button ${className}`}>{t('button')}</button>
}

Button.propTypes = {
  className: propTypes.string,
  text: propTypes.string
}

export default Button
