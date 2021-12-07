/* eslint-disable no-unused-vars */
import React from 'react'
import PropTypes from 'prop-types'
import Logo from '@images/tailwindcss.png'
import './index.pcss'

const Hero = (props) => {
  const { title, image, imageAlt } = props

  return (
    <div className="hero">
      <img src={image} alt={imageAlt} />
      <img src={Logo} alt="Tailwindcss Logo" />
      <h1 className="hero__title">{title}</h1>
    </div>
  )
}

Hero.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string,
  imageAlt: PropTypes.string
}

export default Hero
