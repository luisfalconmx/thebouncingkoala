import React from 'react'
import Markdown from 'markdown-to-jsx'
import md from './index.md'

const PrivacyPolicy = () => {
  return (
    <section className="PrivacyPolicy">
      <Markdown className="PrivacyPolicy__Content">{md}</Markdown>
    </section>
  )
}

export default PrivacyPolicy
