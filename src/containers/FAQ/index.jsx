import React from 'react'
import CardFAQ from '@components/CardFAQ'
import './index.pcss'

const FAQ = () => {
  return (
    <section className="FAQ">
      <h2 className="FAQ__Title">Frequently asked questions</h2>
      <p className="FAQ__Description">
        Get the best services at the lowest price
      </p>
      <div className="FAQ__Grid">
        <CardFAQ />
        <CardFAQ />
        <CardFAQ />
        <CardFAQ />
      </div>
    </section>
  )
}

export default FAQ
