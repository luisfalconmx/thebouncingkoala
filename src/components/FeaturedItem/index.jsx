import React from 'react'
import propTypes from 'prop-types'
import { useTranslation } from 'react-i18next'
import { BadgeCheckIcon } from '@heroicons/react/outline'
import './index.pcss'

const FeaturedItem = ({ content = 'Email Comments and Attachments' }) => {
  const { t } = useTranslation()

  return (
    <div className="FeaturedItem">
      <BadgeCheckIcon className="FeaturedItem__Icon" />
      <p className="FeaturedItem__Content">{t('featuredItem.item_1')}</p>
    </div>
  )
}

FeaturedItem.propTypes = {
  content: propTypes.string
}

export default FeaturedItem
