import React from 'react'
import Hero from '@containers/Hero'
import Services from '@containers/Services'
import Team from '@containers/Team'
import Featured from '@containers/Featured'
import FeaturedBlog from '@containers/FeaturedBlog'
import Newsletter from '@containers/Newsletter'

const Home = () => (
  <>
    <Hero />
    <Services />
    <Team />
    <Featured />
    <FeaturedBlog />
    <Newsletter />
  </>
)

export default Home
