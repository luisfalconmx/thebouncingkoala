import React from 'react'
import propTypes from 'prop-types'
import { useTranslation } from 'react-i18next'
import classNames from 'classnames'
import './index.pcss'

const Button = ({ text = 'Get Started', translate, namespace, className }) => {
  const { t } = useTranslation(namespace)
  const buttonClass = classNames('Button', className, 'transform')
  const content = translate ? t(translate) : text

  return <button className={buttonClass}>{content}</button>
}

Button.propTypes = {
  text: propTypes.string,
  translate: propTypes.string,
  namespace: propTypes.array,
  className: propTypes.string
}

export default Button
