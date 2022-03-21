import React, { useState, useEffect, useContext } from 'react'
import { useTranslation } from 'react-i18next'
import AppContext from '@context/AppContext'
import CardTeam from '@components/CardTeam'
import './index.pcss'

const Team = () => {
  const { t } = useTranslation()
  const { api } = useContext(AppContext)
  const [team, setTeam] = useState([])

  useEffect(() => {
    api.authors
      .browse()
      .then((authors) => setTeam(authors))
      .catch((err) => console.error(err))
  }, [])

  console.log(team)
  return (
    <section className="Team">
      <b className="Team__Label">{t('team.label')}</b>
      <h2 className="Team__Title">{t('team.title')}</h2>
      <p className="Team__Description">{t('team.description')}</p>
      <div className="Team__Track">
        {team.map((member) => (
          <CardTeam
            key={member.name}
            image={member.profile_image}
            {...member}
          />
        ))}
      </div>
    </section>
  )
}

export default Team
