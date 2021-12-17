import React from 'react'
// import { useTranslation } from 'react-i18next'
import Hero from '@containers/Hero'
import Services from '@containers/Services'
import Team from '@containers/Team'
import Featured from '@containers/Featured'

const Home = () => {
  // const { t } = useTranslation()

  return (
    <>
      <Hero />
      <Services />
      <Team />
      <Featured />
    </>
  )
}

export default Home
