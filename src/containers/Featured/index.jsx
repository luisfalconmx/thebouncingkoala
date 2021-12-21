import React from 'react'
import Button from '@components/Button'
import Image from '@images/featured-mockup.png'
import './index.pcss'

const Featured = () => {
  return (
    <section className="Featured">
      <div className="Featured__Content">
        <h2 className="Featured__Title">Instant email & postal delivery.</h2>
        <p className="Featured__Description">
          Simplify your integration using Stripe Checkout. It dynamically adapts
          to your customer’s device and location to increase conversion.
        </p>
        <Button className="Featured__Button" />
      </div>
      <img className="Featured__Image" src={Image} alt="featured image" />
    </section>
  )
}

export default Featured
