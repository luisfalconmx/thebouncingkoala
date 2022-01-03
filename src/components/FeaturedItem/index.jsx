import React from 'react'
import propTypes from 'prop-types'
import { BadgeCheckIcon } from '@heroicons/react/outline'
import './index.pcss'

const FeaturedItem = ({ content = 'Email Comments and Attachments' }) => {
  return (
    <div className="FeaturedItem">
      <BadgeCheckIcon className="FeaturedItem__Icon" />
      <p className="FeaturedItem__Content">{content}</p>
    </div>
  )
}

FeaturedItem.propTypes = {
  content: propTypes.string
}

export default FeaturedItem
