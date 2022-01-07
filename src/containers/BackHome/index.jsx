import React from 'react'
import Button from '@components/Button'
import Image from '@components/Image'
import ImgFlowers from '@images/flowers-vectors.png'
import ImgFlowersWebp from '@images/flowers-vectors.png?as=webp'
import './index.pcss'

const BackHome = () => (
  <section className="BackHome">
    <Image
      className="BackHome__ImageTop"
      src={ImgFlowers}
      srcSet={ImgFlowersWebp}
      alt="Flowers in top of screen"
      width="500"
      height="500"
    />
    <div className="BackHome__Content">
      <h1 className="BackHome__Title">Not Found</h1>
      <p className="BackHome__Description">
        The url you were looking for is not available. Try searching for a new
        url or go back home.
      </p>
      <a href="/">
        <Button className="BackHome__Button" text="Back to home" />
      </a>
    </div>
    <Image
      className="BackHome__ImageBottom"
      src={ImgFlowers}
      srcSet={ImgFlowersWebp}
      alt="Flowes in bottom of screen"
      width="500"
      height="500"
    />
  </section>
)

export default BackHome
