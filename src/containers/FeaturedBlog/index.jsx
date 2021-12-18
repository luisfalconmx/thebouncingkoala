import React from 'react'
import CardBlog from '@components/CardBlog'
import './index.pcss'

const FeaturedBlog = () => {
  return (
    <section className="FeaturedBlog">
      <b className="FeaturedBlog__Label">FEATURED BLOG POSTS</b>
      <h2 className="FeaturedBlog__Title">From our blog</h2>
      <p className="FeaturedBlog__Description">
        Creativity is a highfalutin word for the work I have to do between now
        and Tuesday.
      </p>
      <div className="FeaturedBlog__Track">
        <CardBlog />
        <CardBlog />
        <CardBlog />
      </div>
    </section>
  )
}

export default FeaturedBlog
