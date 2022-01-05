import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useDarkmode } from '@hooks/useDarkmode'
import classNames from 'classnames'
import Image from '@components/Image'
import Button from '@components/Button'
import Logo from '@images/Logotype.svg?inline'
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
      href: '/'
    },
    {
      text: t('navbar.link_2'),
      href: '/'
    },
    {
      text: t('navbar.link_3'),
      href: '/'
    },
    {
      text: t('navbar.link_4'),
      href: '/'
    }
  ]

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng)
    setTooltip(false)
  }

  const changeLangEn = () => changeLanguage('en')
  const changeLangEs = () => changeLanguage('es')

  const showTooltip = () => setTooltip(!tooltip)
  const toggleOffCanvas = () => setOffCanvas(!offCanvas)

  const tooltipClasses = classNames('Navbar__Tooltip', {
    'Navbar__Tooltip--Visible': tooltip
  })

  const navbarNavClasses = classNames('Navbar__Nav', {
    'Navbar__Nav--Visible': offCanvas
  })

  return (
    <header className="Navbar">
      <div className="Navbar__Container">
        <a className="Navbar__Hotlink" href="/">
          <Image
            className="Navbar__Logo"
            alt="Logo The Bouncing Koala"
            src={Logo}
            width="64"
            height="52"
          />
        </a>
        <nav className={navbarNavClasses}>
          <ul className="Navbar__List">
            {links.map((link) => (
              <li className="Navbar__Item" key={link.text}>
                <a className="Navbar__Link" href={link.href}>
                  {link.text}
                </a>
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
                <button
                  className="Navbar__TooltipButton"
                  type="button"
                  onClick={changeLangEs}
                >
                  Español
                </button>
                <button
                  className="Navbar__TooltipButton"
                  type="button"
                  onClick={changeLangEn}
                >
                  English
                </button>
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
