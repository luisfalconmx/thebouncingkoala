import React from 'react'
import CardService from '@components/CardService'
import './index.pcss'

const Services = () => {
  return (
    <section className="Services">
      <b className="Services__Label">WHY DFLEX</b>
      <h2 className="Services__Title">
        Creativity is nothing but the way to solve new problems.
      </h2>
      <div className="Services__Track">
        <CardService />
        <CardService />
        <CardService />
        <CardService />
      </div>
    </section>
  )
}

export default Services
