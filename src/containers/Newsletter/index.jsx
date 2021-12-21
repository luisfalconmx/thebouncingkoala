import React from 'react'
import Input from '@components/Input'
import Button from '@components/Button'
import './index.pcss'

const Newsletter = () => {
  return (
    <section className="Newsletter">
      <div className="Newsletter__Container">
        <div className="Newsletter__Info">
          <h2 className="Newsletter__Title">Sign up for our newsletter</h2>
          <p className="Newsletter__Description">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint velit officia consequat duis enim velit mollit.
          </p>
        </div>
        <form className="Newsletter__Form">
          <div className="Newsletter__FormElement">
            <Input className="Newsletter__Input" />
            <Button className="Newsletter__Button" />
          </div>
          <small className="Newsletter__Leyend">
            We care about the protection of your data. read our{' '}
            <a href="/">Privacy policy</a>
          </small>
        </form>
      </div>
    </section>
  )
}

export default Newsletter
