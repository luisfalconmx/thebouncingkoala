import { useState, useEffect } from 'react'
import GhostContentAPI from '@tryghost/content-api'

const useInitialState = () => {
  const key = 'koala-theme'
  const matchType = '(prefers-color-scheme: dark)'
  const preference = window.localStorage.getItem(key) === 'dark'
  const browserTheme = window.matchMedia(matchType).matches
  const keyExist = key in localStorage
  const isDark = preference || (!keyExist && browserTheme)
  const [darkmode, setDarkmode] = useState(isDark)

  const api = new GhostContentAPI({
    url: process.env.API_URL,
    key: process.env.API_KEY,
    version: process.env.API_VERSION
  })

  const setPreferences = () => {
    const root = document.documentElement

    if (darkmode) {
      if (keyExist) localStorage.setItem(key, 'dark')
      root.classList.add('dark')
    } else {
      if (keyExist) localStorage.setItem(key, 'light')
      root.classList.remove('dark')
    }
  }

  const toggleDarkmode = () => {
    localStorage.setItem('koala-theme', darkmode ? 'dark' : 'light')
    setDarkmode(!darkmode)
  }

  useEffect(() => {
    setPreferences()
  }, [darkmode])

  return {
    api,
    darkmode,
    toggleDarkmode
  }
}

export default useInitialState
