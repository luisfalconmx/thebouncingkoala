import React from 'react'
import { useTranslation } from 'react-i18next'
import CardBlog from '@components/CardBlog'
import './index.pcss'

const FeaturedBlog = () => {
  const { t } = useTranslation()

  return (
    <section className="FeaturedBlog" id="blog">
      <b className="FeaturedBlog__Label">{t('featuredBlog.label')}</b>
      <h2 className="FeaturedBlog__Title">{t('featuredBlog.title')}</h2>
      <p className="FeaturedBlog__Description">
        {t('featuredBlog.description')}
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
