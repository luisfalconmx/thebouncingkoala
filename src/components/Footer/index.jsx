import React from 'react'
import './index.pcss'

import LogoFacebook from '@images/logo-facebook.svg'
import LogoTwitter from '@images/logo-twitter.svg'
import LogoInstagram from '@images/logo-instagram.svg'
import LogoGithub from '@images/logo-github.svg'

const SocialIcons = [
  {
    icon: LogoFacebook,
    link: 'https://www.facebook.com/'
  },
  {
    icon: LogoTwitter,
    link: 'https://www.twitter.com/'
  },
  {
    icon: LogoInstagram,
    link: 'https://www.instagram.com/'
  },
  {
    icon: LogoGithub,
    link: 'https://www.github.com/'
  }
]

const Footer = () => {
  return (
    <footer className="footer">
      <strong className="footer__leyend">
        © 2020 Dlex, Inc. All rights reserved
      </strong>
      <ul className="footer__list">
        {SocialIcons.map((item) => (
          <li className="footer__item" key={item.link}>
            <a className="footer__link" href={item.link}>
              <img src={item.icon} />
            </a>
          </li>
        ))}
      </ul>
    </footer>
  )
}

export default Footer
