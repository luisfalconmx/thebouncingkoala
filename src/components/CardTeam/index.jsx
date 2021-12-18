import React from 'react'
import propTypes from 'prop-types'
import defaultImage from '@images/CardService__Image.png'
import './index.pcss'

const CardTeam = ({
  image = defaultImage,
  name = 'Wade Warren',
  position = 'Creative director'
}) => {
  return (
    <div className="CardTeam">
      <img src={image} alt={name} />
      <div className="CardTeam__Content">
        <h3 className="CardTeam__Name">{name}</h3>
        <p className="CardTeam__Position">{position}</p>
      </div>
    </div>
  )
}

CardTeam.propTypes = {
  image: propTypes.string,
  name: propTypes.string,
  position: propTypes.string
}

export default CardTeam
