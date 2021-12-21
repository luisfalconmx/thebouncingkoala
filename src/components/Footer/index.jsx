import React from 'react'
import LogoFacebook from '@images/logo-facebook.svg'
import LogoTwitter from '@images/logo-twitter.svg'
import LogoInstagram from '@images/logo-instagram.svg'
import LogoGithub from '@images/logo-github.svg'
import './index.pcss'

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
    <footer className="Footer">
      <div className="Footer__Container">
        <strong className="Footer__Leyend">
          © 2020 Dlex, Inc. All rights reserved
        </strong>
        <ul className="Footer__List">
          {SocialIcons.map((item) => (
            <li className="Footer__Item" key={item.link}>
              <a className="Footer__Link" href={item.link}>
                <img className="Footer__Icon" src={item.icon} />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  )
}

export default Footer
