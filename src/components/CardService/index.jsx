import React from 'react'
import propTypes from 'prop-types'
import { ArrowNarrowRightIcon } from '@heroicons/react/outline'
import Image from '@components/Image'
import defaultImage from '@images/cardservice-icon.png'
import './index.pcss'

const CardService = ({
  image = defaultImage,
  title = 'UI Design',
  description = 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat.',
  link = '/',
  linkText = 'View service'
}) => {
  return (
    <div className="CardService">
      <Image
        className="CardService__Image"
        src={image}
        alt={title}
        width="48"
        height="48"
      />
      <h3 className="CardService__Title">{title}</h3>
      <p className="CardService__Description">{description}</p>
      <a className="CardService__Link" href={link}>
        <b className="CardService__LinkText">{linkText}</b>
        <ArrowNarrowRightIcon className="CardService__Icon" />
      </a>
    </div>
  )
}

CardService.propTypes = {
  image: propTypes.string,
  title: propTypes.string,
  description: propTypes.string,
  link: propTypes.string,
  linkText: propTypes.string
}

export default CardService
