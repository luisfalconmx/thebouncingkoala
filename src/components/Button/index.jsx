import React from 'react'
import propTypes from 'prop-types'
import './index.pcss'

const Button = ({ text = 'Get Started' }) => {
  return <button className="Button">{text}</button>
}

Button.propTypes = {
  text: propTypes.string
}

export default Button
