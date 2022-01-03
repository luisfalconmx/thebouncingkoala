import React from 'react'
import propTypes from 'prop-types'

const Image = ({ src, srcSet, alt, className }) => {
  return (
    <picture className={className}>
      {srcSet && <source type="image/webp" srcSet={srcSet} />}
      <img src={src} alt={alt} />
    </picture>
  )
}

Image.propTypes = {
  src: propTypes.string.isRequired,
  srcSet: propTypes.string,
  alt: propTypes.string.isRequired,
  className: propTypes.string
}

export default Image
