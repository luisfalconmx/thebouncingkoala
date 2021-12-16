import React from 'react'
import propTypes from 'prop-types'
import './index.pcss'

const Input = ({
  type = 'email',
  placeholder = 'Enter email address',
  required = true
}) => {
  return (
    <input
      className="Input"
      type={type}
      placeholder={placeholder}
      required={required}
    />
  )
}

Input.propTypes = {
  type: propTypes.string,
  placeholder: propTypes.string,
  required: propTypes.bool
}

export default Input
