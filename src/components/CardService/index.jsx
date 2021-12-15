import React from 'react'
import propTypes from 'prop-types'
import { ArrowNarrowRightIcon } from '@heroicons/react/outline'
import defaultImage from '@images/CardService__icon.png'
import './index.pcss'

const CardService = ({
  image = defaultImage,
  title = 'UI Design',
  description = 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat.',
  link = '/'
}) => {
  return (
    <div className="CardService">
      <img className="CardService__Image" src={image} alt={title} />
      <h3 className="CardService__Title">{title}</h3>
      <p className="CardService__Description">{description}</p>
      <div className="CardService__Hotlink">
        <a className="CardService__Link" href={link}>
          {link}
        </a>
        <ArrowNarrowRightIcon className="CardService__Icon" />
      </div>
    </div>
  )
}

CardService.propTypes = {
  image: propTypes.string,
  title: propTypes.string,
  description: propTypes.string,
  link: propTypes.string
}

export default CardService
