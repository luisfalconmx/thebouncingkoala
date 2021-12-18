import React from 'react'
import propTypes from 'prop-types'
import defaultImage from '@images/User.png'
import './index.pcss'

const User = ({
  image = defaultImage,
  name = 'Kristin Watson',
  label = 'Jun 27, 2020 · 6 min read'
}) => {
  return (
    <div className="User">
      <img src={image} alt={name} />
      <div className="User__Info">
        <b className="User__Name">{name}</b>
        <small className="User__Label">{label}</small>
      </div>
    </div>
  )
}

User.propTypes = {
  image: propTypes.string,
  name: propTypes.string,
  label: propTypes.string
}

export default User
