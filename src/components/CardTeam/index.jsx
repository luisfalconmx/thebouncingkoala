import React from 'react'
import propTypes from 'prop-types'
import Image from '@components/Image'
import { ReactSVG } from 'react-svg'
import iconFacebook from '@images/icon-facebook.svg'
import iconTwitter from '@images/icon-twitter.svg'
import './index.pcss'

const CardTeam = ({ name, bio, image, website, facebook, twitter, url }) => {
  const social = [
    {
      conditional: facebook,
      icon: iconFacebook,
      url: `https://www.facebook.com/${facebook}`
    },
    {
      conditional: twitter,
      icon: iconTwitter,
      url: `https://twitter.com/${twitter}`
    }
  ]

  return (
    <div className="CardTeam">
      <a href={website} target="_blank" rel="noreferrer">
        <Image className="CardTeam__Image" src={image} alt={name} />
      </a>
      <div className="CardTeam__Content">
        <a href={website} target="_blank" rel="noreferrer">
          <h3 className="CardTeam__Name">{name}</h3>
          {bio && <p className="CardTeam__Position">{bio}</p>}
        </a>
        <div className="CardTeam__Social">
          {social.map(
            ({ conditional, icon, url }) =>
              conditional && (
                <a
                  className="CardTeam__SocialIcon"
                  target="_blank"
                  rel="noreferrer"
                  href={url}
                  key={url}
                >
                  <ReactSVG src={icon} width={10} />
                </a>
              )
          )}
        </div>
      </div>
    </div>
  )
}

CardTeam.propTypes = {
  name: propTypes.string.isRequired,
  bio: propTypes.string,
  image: propTypes.string,
  website: propTypes.string,
  facebook: propTypes.string,
  twitter: propTypes.string,
  url: propTypes.string
}

export default CardTeam
