import React from 'react'
import propTypes from 'prop-types'
import { QuestionMarkCircleIcon } from '@heroicons/react/solid'
import './index.pcss'

const CardFAQ = ({
  question = 'How long do payouts take?',
  answer = 'Once you’re set up, payouts arrive in your bank account on a 2-day rolling basis. Or you can opt to receive payouts weekly or monthly.',
  link
}) => {
  return (
    <div className="CardFAQ">
      <QuestionMarkCircleIcon className="CardFAQ__Icon" />
      <div className="CardFAQ__Content">
        <h3 className="CardFAQ__Question">{question}</h3>
        <p className="CardFAQ__Answer">{answer}</p>
        <a href={link}>
          <button className="CardFAQ__Button" type="button">
            Read more
          </button>
        </a>
      </div>
    </div>
  )
}

CardFAQ.propTypes = {
  question: propTypes.string,
  answer: propTypes.string,
  link: propTypes.string
}

export default CardFAQ
