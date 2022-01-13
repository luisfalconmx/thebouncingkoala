import React from 'react'
import { useTranslation } from 'react-i18next'
import { ReactSVG } from 'react-svg'
import LogoFacebook from '@images/logo-facebook.svg'
import LogoTwitter from '@images/logo-twitter.svg'
import LogoInstagram from '@images/logo-instagram.svg'
import LogoGithub from '@images/logo-github.svg'
import './index.pcss'

const SocialIcons = [
  {
    icon: LogoFacebook,
    alt: 'Facebook',
    link: 'https://www.facebook.com'
  },
  {
    icon: LogoTwitter,
    alt: 'Twitter',
    link: 'https://www.twitter.com'
  },
  {
    icon: LogoInstagram,
    alt: 'Instagram',
    link: 'https://www.instagram.com'
  },
  {
    icon: LogoGithub,
    alt: 'Github',
    link: 'https://github.com/thebouncingkoala'
  }
]

const Footer = () => {
  const { t } = useTranslation()

  return (
    <footer className="Footer">
      <div className="Footer__Container">
        <strong className="Footer__Leyend">{t('footer.leyend')}</strong>
        <ul className="Footer__List">
          {SocialIcons.map((item) => (
            <li className="Footer__Item" key={item.link}>
              <a className="Footer__Link" href={item.link}>
                <ReactSVG className="Footer__Icon" src={item.icon} />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  )
}

export default Footer
