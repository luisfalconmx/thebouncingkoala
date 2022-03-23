import React, { useState, useEffect, useContext } from 'react'
import AppContext from '@context/AppContext'
import CardBlog from '@components/CardBlog'
import './index.pcss'

const BlogPosts = () => {
  const [posts, setPosts] = useState([])
  const { api } = useContext(AppContext)

  useEffect(() => {
    api.posts
      .browse({ limit: 10, include: 'tags,authors' })
      .then((posts) => setPosts(posts))
      .catch((error) => console.error(error))
  }, [])

  return (
    <section className="BlogPosts">
      <h1 className="BlogPosts__Title">Blog</h1>
      <div className="BlogPosts__Grid">
        {posts.map((post) => (
          <CardBlog
            key={post?.title}
            image={post?.feature_image}
            type={post?.primary_tag?.name}
            link={`/blog/${post?.slug}`}
            title={post?.title}
            description={post?.excerpt}
            author={post?.primary_author?.name}
            authorImage={post?.primary_author?.profile_image}
            label={post?.primary_author?.bio}
          />
        ))}
      </div>
    </section>
  )
}

export default BlogPosts
