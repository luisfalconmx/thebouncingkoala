import React from 'react'
import propTypes from 'prop-types'
import Navbar from '@components/Navbar'
import Footer from '@components/Footer'

const Layout = ({ children }) => (
  <>
    <Navbar />
    {children}
    <Footer />
  </>
)

Layout.propTypes = {
  children: propTypes.node.isRequired
}

export default Layout
