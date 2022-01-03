import React from 'react'
import propTypes from 'prop-types'
import classNames from 'classnames'
import './index.pcss'

const Button = ({ text = 'Get Started', className }) => {
  const buttonClass = classNames('Button', className, 'transform')

  return <button className={buttonClass}>{text}</button>
}

Button.propTypes = {
  text: propTypes.string,
  className: propTypes.string
}

export default Button
