import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { ReactSVG } from 'react-svg'
import { useDarkmode } from '@hooks/useDarkmode'
import classNames from 'classnames'
import Button from '@components/Button'
import Logo from '@images/logo.svg'
import {
  TranslateIcon,
  MoonIcon,
  SunIcon,
  MenuIcon,
  XIcon
} from '@heroicons/react/outline'
import './index.pcss'

const Navbar = () => {
  const [tooltip, setTooltip] = useState(false)
  const [offCanvas, setOffCanvas] = useState(false)
  const { darkmode, toggleDarkmode } = useDarkmode()
  const { t, i18n } = useTranslation()

  const links = [
    {
      text: t('navbar.link_1'),
      route: '/'
    },
    {
      text: t('navbar.link_2'),
      route: '/services'
    },
    {
      text: t('navbar.link_3'),
      route: '/about-us'
    },
    {
      text: t('navbar.link_4'),
      route: '/blog'
    }
  ]

  const languageButtons = [
    {
      text: 'English',
      lang: 'en'
    },
    {
      text: 'Español',
      lang: 'es'
    }
  ]

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng)
    setTooltip(false)
  }

  const showTooltip = () => setTooltip(!tooltip)
  const toggleOffCanvas = () => setOffCanvas(!offCanvas)

  const tooltipClasses = classNames('Navbar__Tooltip', {
    'Navbar__Tooltip--Visible': tooltip
  })

  const navbarNavClasses = classNames('Navbar__Nav', {
    'Navbar__Nav--Visible': offCanvas
  })

  const resizeMenu = () => {
    const root = document.documentElement
    const height = window.innerHeight
    root.style.setProperty('--full-height', `${height}px`)
  }

  useEffect(() => {
    resizeMenu()
    window.addEventListener('resize', resizeMenu)
  }, [])

  return (
    <header className="Navbar">
      <div className="Navbar__Container">
        <Link className="Navbar__Hotlink" to="/">
          <ReactSVG className="Navbar__Logo" src={Logo} />
        </Link>
        <nav className={navbarNavClasses}>
          <ul className="Navbar__List">
            {links.map((link) => (
              <li className="Navbar__Item" key={link.text}>
                <Link className="Navbar__Link" to={link.route}>
                  {link.text}
                </Link>
              </li>
            ))}
          </ul>
          <Button text={t('button')} className="Navbar__Button" />
          <div className="Navbar__Actions">
            <div className="Navbar__ActionLanguage">
              <TranslateIcon
                className="Navbar__Icon Navbar__Icon--Language"
                onClick={showTooltip}
              />
              <div className={tooltipClasses}>
                {languageButtons.map((button) => (
                  <button
                    className="Navbar__TooltipButton"
                    type="button"
                    onClick={() => changeLanguage(button.lang)}
                    key={button.text}
                  >
                    {button.text}
                  </button>
                ))}
              </div>
            </div>
            {darkmode ? (
              <SunIcon className="Navbar__Icon" onClick={toggleDarkmode} />
            ) : (
              <MoonIcon className="Navbar__Icon" onClick={toggleDarkmode} />
            )}
          </div>
        </nav>
        <div className="Navbar__OffcanvasButton">
          {offCanvas ? (
            <XIcon
              className="Navbar__OffcanvasIcon"
              onClick={toggleOffCanvas}
            />
          ) : (
            <MenuIcon
              className="Navbar__OffcanvasIcon"
              onClick={toggleOffCanvas}
            />
          )}
        </div>
      </div>
    </header>
  )
}

export default Navbar
