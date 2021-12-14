import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import classNames from 'classnames'
import './index.pcss'

// Import components and containers
import Button from '@components/Button'

// Import assets and media
import Logo from '@images/Logotype.svg'
import { TranslateIcon, MoonIcon } from '@heroicons/react/outline'

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

const Navbar = () => {
  const [tooltip, setTooltip] = useState(false)
  const { i18n } = useTranslation()

  const showTooltip = () => setTooltip(!tooltip)

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng)
    setTooltip(false)
  }

  const changeLangEn = () => changeLanguage('en')
  const changeLangEs = () => changeLanguage('es')

  const tooltipClasses = classNames('navbar__tooltip', {
    'navbar__tooltip--visible': tooltip
  })

  return (
    <header className="navbar">
      <a className="navbar__hotlink" href="/">
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
          <div className="navbar__action-language">
            <TranslateIcon
              className="navbar__icon navbar__icon--language"
              onClick={showTooltip}
            />
            <div className={tooltipClasses}>
              <button
                className="navbar__tooltip-button"
                type="button"
                onClick={changeLangEs}
              >
                Español
              </button>
              <button
                className="navbar__tooltip-button"
                type="button"
                onClick={changeLangEn}
              >
                English
              </button>
            </div>
          </div>
          <MoonIcon className="navbar__icon" />
        </div>
      </nav>
    </header>
  )
}

export default Navbar
