import React, { useState, useEffect, useContext } from 'react'
import propTypes from 'prop-types'
import { useParams } from 'react-router-dom'
import parse from 'html-react-parser'
import Image from '@components/Image'
import AppContext from '@context/AppContext'
import './index.pcss'

const PostContent = () => {
  const [content, setContent] = useState([])
  const [html, setHtml] = useState(undefined)
  const { api } = useContext(AppContext)
  const { slug } = useParams()

  useEffect(() => {
    api.posts
      .read({ slug }, { formats: ['html', 'plaintext'] })
      .then((posts) => {
        setContent(posts)
        setHtml(parse(posts.html))
      })
      .catch((error) => console.error(error))
  }, [])

  return (
    <section className="PostContent">
      <h1 className="PostContent__Title">{content.title}</h1>
      <Image
        className="PostContent__Image"
        src={content.feature_image || ''}
        alt={content.title || ''}
      />
      <div className="PostContent__Body">{html}</div>
    </section>
  )
}

PostContent.propTypes = {
  title: propTypes.string,
  featureImage: propTypes.string,
  html: propTypes.string
}

export default PostContent
