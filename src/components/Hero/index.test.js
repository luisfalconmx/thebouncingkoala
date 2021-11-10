import React from 'react'
import Hero from './index'
import { mount } from 'enzyme'
import { create } from 'react-test-renderer'

describe('<Hero />', () => {
  test('Mount component', () => {
    const hero = mount(<Hero />)
    expect(hero).toHaveLength(1)
  })
  test('Check the UI', () => {
    const hero = create(<Hero />)
    expect(hero.toJSON()).toMatchSnapshot()
  })
})
