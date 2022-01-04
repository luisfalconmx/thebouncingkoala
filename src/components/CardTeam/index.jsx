import React from 'react'
import propTypes from 'prop-types'
import Image from '@components/Image'
import defaultImage from '@images/CardTeam__Image.png'
import defaultImageWebp from '@images/CardTeam__Image.png?as=webp'
import './index.pcss'

const CardTeam = ({
  image = defaultImage,
  imageWebp = defaultImageWebp,
  name = 'Wade Warren',
  position = 'Creative director'
}) => {
  return (
    <div className="CardTeam">
      <Image
        src={image}
        srcSet={imageWebp}
        alt={name}
        width={360}
        height={352}
      />
      <div className="CardTeam__Content">
        <h3 className="CardTeam__Name">{name}</h3>
        <p className="CardTeam__Position">{position}</p>
      </div>
    </div>
  )
}

CardTeam.propTypes = {
  image: propTypes.string,
  imageWebp: propTypes.string,
  name: propTypes.string,
  position: propTypes.string
}

export default CardTeam
