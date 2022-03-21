import React, { useState, useEffect, useContext } from 'react'
import AppContext from '@context/AppContext'
import { useParams } from 'react-router-dom'

const Post = () => {
  const [content, setContent] = useState([])
  const { api } = useContext(AppContext)
  const { slug } = useParams()

  useEffect(() => {
    api.posts
      .read({ slug }, { formats: ['html', 'plaintext'] })
      .then((posts) => setContent(posts))
      .catch((error) => console.error(error))
  }, [])

  return (
    <div>
      <h1>{content?.title}</h1>
      <img src={content?.feature_image} />
      <p>{content?.html}</p>
    </div>
  )
}

export default Post
