import React from 'react'
// import { useTranslation } from 'react-i18next'
import Hero from '@containers/Hero'
import Services from '@containers/Services'
import Team from '@containers/Team'

const Home = () => {
  // const { t } = useTranslation()

  return (
    <>
      <Hero />
      <Services />
      <Team />
    </>
  )
}

export default Home
