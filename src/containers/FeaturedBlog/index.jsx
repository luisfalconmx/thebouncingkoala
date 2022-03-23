import React, { useState, useEffect, useContext } from 'react'
import { useTranslation } from 'react-i18next'
import AppContext from '@context/AppContext'
import CardBlog from '@components/CardBlog'
import './index.pcss'

const FeaturedBlog = () => {
  const { api } = useContext(AppContext)
  const { t } = useTranslation()
  const [posts, setPosts] = useState([])

  useEffect(() => {
    const apiOptions = {
      limit: 3,
      include: 'tags,authors',
      filter: 'featured:true'
    }

    api.posts
      .browse(apiOptions)
      .then((posts) => setPosts(posts))
      .catch((err) => console.error(err))
  }, [])

  console.log('posts', posts)

  return (
    <section className="FeaturedBlog">
      <b className="FeaturedBlog__Label">{t('featuredBlog.label')}</b>
      <h2 className="FeaturedBlog__Title">{t('featuredBlog.title')}</h2>
      <p className="FeaturedBlog__Description">
        {t('featuredBlog.description')}
      </p>
      <div className="FeaturedBlog__Track">
        {posts.map((post) => (
          <CardBlog
            key={post.title}
            image={post.feature_image}
            type={post.primary_tag.name}
            link={`/blog/${post.slug}`}
            title={post.title}
            description={post.excerpt}
            author={post.primary_author.name}
            authorImage={post.primary_author.profile_image}
            label={post.primary_author.bio}
          />
        ))}
      </div>
    </section>
  )
}

export default FeaturedBlog
