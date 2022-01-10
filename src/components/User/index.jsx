import React from 'react'
import propTypes from 'prop-types'
import Image from '@components/Image'
import defaultImage from '@images/user.png'
import defaultImageWebp from '@images/user.png?as=webp'
import './index.pcss'

const User = ({
  image = defaultImage,
  name = 'Kristin Watson',
  label = 'Jun 27, 2020 · 6 min'
}) => {
  return (
    <div className="User">
      <Image
        src={image}
        srcSet={defaultImageWebp}
        alt={name}
        width="48"
        height="48"
      />
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
