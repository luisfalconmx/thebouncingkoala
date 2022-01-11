import React from 'react'
import propTypes from 'prop-types'
import Navbar from '@containers/Navbar'
import Footer from '@containers/Footer'

const Layout = ({ children }) => (
  <>
    <Navbar />
    <div className="Layout__Content">{children}</div>
    <Footer />
  </>
)

Layout.propTypes = {
  children: propTypes.node.isRequired
}

export default Layout
