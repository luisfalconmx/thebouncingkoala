import React from 'react'
import { useTranslation } from 'react-i18next'
import CardTeam from '@components/CardTeam'
import './index.pcss'

const Team = () => {
  const { t } = useTranslation()

  return (
    <section className="Team">
      <b className="Team__Label">{t('team.label')}</b>
      <h2 className="Team__Title">{t('team.title')}</h2>
      <div className="Team__Track">
        <CardTeam
          name="Wade Warren"
          linkedin="https://www.linkedin.com"
          gmail="test@gmail.com"
        />
        <CardTeam
          name="Wade Warren"
          gmail="test@gmail.com"
          behance="https://behance.net"
        />
        <CardTeam
          name="Wade Warren"
          linkedin="https://www.linkedin.com"
          github="https://github.com"
        />
      </div>
    </section>
  )
}

export default Team
