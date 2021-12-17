import React from 'react'
import CardTeam from '@components/CardTeam'
import './index.pcss'

const Team = () => {
  return (
    <section className="Team">
      <b className="Team__Label">OUR TEAM</b>
      <h2 className="Team__Title">Meet the creative team</h2>
      <div className="Team__Track">
        <CardTeam />
        <CardTeam />
        <CardTeam />
      </div>
    </section>
  )
}

export default Team
