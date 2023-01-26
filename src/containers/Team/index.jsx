import React from 'react'
import { useTranslation } from 'react-i18next'
import CardTeam from '@components/CardTeam'
import './index.pcss'

const Team = () => {
  const { t } = useTranslation()
  const team = [
    {
      name: 'Jesus Adair',
      image: require('@images/team/jesus.jpeg')
    },
    {
      name: "Ana d'Argence",
      image: require('@images/team/ana.jpeg')
    },
    {
      name: 'Mariam Noriega',
      image: require('@images/team/mariam.jpeg')
    }
  ]

  return (
    <section className="Team" id="team">
      <b className="Team__Label">{t('team.label')}</b>
      <h2 className="Team__Title">{t('team.title')}</h2>
      <p className="Team__Description">{t('team.description')}</p>
      <div className="Team__Track">
        {team.map((member) => (
          <CardTeam key={member.name} />
        ))}
      </div>
    </section>
  )
}

export default Team
