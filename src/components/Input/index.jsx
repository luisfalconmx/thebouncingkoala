import React from 'react'
import propTypes from 'prop-types'
import classNames from 'classnames'
import './index.pcss'

const Input = ({
  className = '',
  type = 'email',
  placeholder = 'Enter email address',
  required = true
}) => {
  const inputClass = classNames('Input', className)

  return (
    <input
      className={inputClass}
      type={type}
      placeholder={placeholder}
      required={required}
    />
  )
}

Input.propTypes = {
  className: propTypes.string,
  type: propTypes.string,
  placeholder: propTypes.string,
  required: propTypes.bool
}

export default Input
