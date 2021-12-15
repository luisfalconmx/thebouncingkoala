/* eslint-disable no-unused-vars */
import React from 'react'
import PropTypes from 'prop-types'
import Logo from '@images/tailwindcss.png'
import './index.pcss'

const Hero = ({ title, image, imageAlt }) => {
  return (
    <div className="Hero">
      <img src={image} alt={imageAlt} />
      <img src={Logo} alt="Tailwindcss Logo" />
      <h1 className="Hero__Title">{title}</h1>
    </div>
  )
}

Hero.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string,
  imageAlt: PropTypes.string
}

export default Hero
