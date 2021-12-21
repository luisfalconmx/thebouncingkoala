import React from 'react'
import Button from '@components/Button'
import FeaturedItem from '@components/FeaturedItem'
import './index.pcss'

const Pricing = () => {
  return (
    <section className="Pricing">
      <div className="Pricing__Head">
        <div>
          <p className="Pricing__HeadTitle">
            Everything you need for <i>$99 a month</i>
          </p>
          <p className="Pricing__HeadDescription">
            Includes every feature we offer plus unlimited projects and
            unlimited users
          </p>
        </div>
        <Button className="Pricing__HeadButton" />
      </div>
      <div className="Pricing__Separator" />
      <div className="Pricing__Content">
        <div className="Pricing__Info">
          <b className="Pricing__Label">EVERYTHING YOU NEED</b>
          <h2 className="Pricing__Title">All in one platform</h2>
          <p className="Pricing__Description">
            Lorem ipsum dolor sit amet minim mollit non deserunt ullamco est sit
            aliqua dolor do amet sint velit officia consequat duis enim velit
            mollit.
          </p>
        </div>
        <div className="Pricing__List">
          <FeaturedItem />
          <FeaturedItem />
          <FeaturedItem />
          <FeaturedItem />
          <FeaturedItem />
          <FeaturedItem />
          <FeaturedItem />
          <FeaturedItem />
        </div>
      </div>
    </section>
  )
}

export default Pricing
