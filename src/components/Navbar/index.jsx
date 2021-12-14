import React from 'react'
import Button from '@components/Button'
// import { useTranslation } from 'react-i18next'
import './index.pcss'

// Import assets
import Logo from '@images/Logotype.svg'
import { TranslateIcon, MoonIcon } from '@heroicons/react/outline'

const Navbar = () => {
  // const { t, i18n } = useTranslation()

  const links = [
    {
      text: 'Home',
      href: '/'
    },
    {
      text: 'Services',
      href: '/'
    },
    {
      text: 'About us',
      href: '/'
    },
    {
      text: 'Blog',
      href: '/'
    }
  ]

  // const changeLanguage = (lng) => {
  //   i18n.changeLanguage(lng)
  //   // onClick={() => changeLanguage('es')}
  // }

  return (
    <header className="navbar">
      <a className="na" href="/">
        <img className="navbar__logo" src={Logo} />
      </a>
      <nav className="navbar__nav">
        <ul className="navbar__list">
          {links.map((link) => (
            <li className="navbar__item" key={link.text}>
              <a className="navbar__link" href={link.href}>
                {link.text}
              </a>
            </li>
          ))}
        </ul>
        <Button />
        <div className="navbar__actions">
          <TranslateIcon className="navbar__icon" />
          <MoonIcon className="navbar__icon" />
        </div>
      </nav>
    </header>
  )
}

export default Navbar
