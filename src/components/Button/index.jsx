import React from 'react'
import propTypes from 'prop-types'
import './index.pcss'

const Button = ({ className = '', text = 'Get Started' }) => {
  return <button className={`Button ${className}`}>{text}</button>
}

Button.propTypes = {
  className: propTypes.string,
  text: propTypes.string
}

export default Button
