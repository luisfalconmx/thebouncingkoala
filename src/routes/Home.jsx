import React from 'react'
import Hero from '@containers/Hero'
import Services from '@containers/Services'
import Team from '@containers/Team'
// import Pricing from '@containers/Pricing'
import Featured from '@containers/Featured'
import FeaturedBlog from '@containers/FeaturedBlog'
import FAQ from '@containers/FAQ'
import Newsletter from '@containers/Newsletter'

const Home = () => (
  <>
    <Hero />
    <Services />
    <Team />
    <Featured />
    {/* <Pricing /> */}
    <FeaturedBlog />
    <FAQ />
    <Newsletter />
  </>
)

export default Home
