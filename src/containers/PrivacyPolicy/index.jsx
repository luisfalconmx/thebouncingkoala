import React from 'react'
import { useTranslation } from 'react-i18next'
import Markdown from 'markdown-to-jsx'
import policyEN from '@documents/privacy-policy.en.md'
import policyES from '@documents/privacy-policy.es.md'
import './index.pcss'

const PrivacyPolicy = () => {
  const { i18n } = useTranslation()

  return (
    <section className="PrivacyPolicy">
      <Markdown className="PrivacyPolicy__Content">
        {i18n.language === 'en' ? policyEN : policyES}
      </Markdown>
    </section>
  )
}

export default PrivacyPolicy
