import React from 'react'
import { useTranslation } from 'react-i18next'
import CardBlog from '@components/CardBlog'
import './index.pcss'

const FeaturedBlog = () => {
  const { t } = useTranslation()

  return (
    <section className="FeaturedBlog">
      <b className="FeaturedBlog__Label">{t('featuredBlog.label')}</b>
      <h2 className="FeaturedBlog__Title">{t('featuredBlog.title')}</h2>
      <p className="FeaturedBlog__Description">
        {t('featuredBlog.description')}
      </p>
      <div className="FeaturedBlog__Track">
        <CardBlog
          type={t('cardBlog.type')}
          title={t('cardBlog.title')}
          description={t('cardBlog.description')}
        />
        <CardBlog
          type={t('cardBlog.type')}
          title={t('cardBlog.title')}
          description={t('cardBlog.description')}
        />
        <CardBlog
          type={t('cardBlog.type')}
          title={t('cardBlog.title')}
          description={t('cardBlog.description')}
        />
      </div>
    </section>
  )
}

export default FeaturedBlog
