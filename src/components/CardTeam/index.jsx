import React from 'react'
import propTypes from 'prop-types'
import Image from '@components/Image'
import defaultImage from '@images/cardteam-image.png'
import defaultImageWebp from '@images/cardteam-image.png?as=webp'
import {
  Gmail,
  Linkedin,
  Behance,
  Github
} from '@icons-pack/react-simple-icons'
import './index.pcss'

const CardTeam = ({
  image = defaultImage,
  imageWebp = defaultImageWebp,
  name,
  position,
  gmail,
  linkedin,
  behance,
  github
}) => {
  const socialIcons = [
    {
      icon: <Gmail className="text-[#EA4335]" width={24} />,
      prefix: 'mailto:',
      url: gmail
    },
    {
      icon: <Linkedin className="text-[#0A66C2]" width={24} />,
      url: linkedin
    },
    {
      icon: <Behance className="text-[#1769FF]" width={24} />,
      url: behance
    },
    {
      icon: (
        <Github className="text-[#181717] dark:text-[#F5F5F5]" width={24} />
      ),
      url: github
    }
  ].filter(({ url }) => url)

  return (
    <div className="CardTeam">
      <Image
        src={image}
        srcSet={imageWebp}
        alt={name}
        width="360"
        height="352"
      />
      <div className="CardTeam__Content">
        <h3 className="CardTeam__Name">{name}</h3>
        {position && <p className="CardTeam__Position">{position}</p>}
        <div className="CardTeam__Social">
          {socialIcons.map(({ icon, prefix, url }) => (
            <a
              className="CardTeam__SocialIcon"
              target="_blank"
              rel="noreferrer"
              href={prefix + url}
              key={url}
            >
              {icon}
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}

CardTeam.propTypes = {
  image: propTypes.string,
  imageWebp: propTypes.string,
  name: propTypes.string.isRequired,
  position: propTypes.string,
  gmail: propTypes.string,
  linkedin: propTypes.string,
  behance: propTypes.string,
  github: propTypes.string
}

export default CardTeam
