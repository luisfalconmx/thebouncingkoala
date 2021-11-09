import React from 'react'
import Hero from './index'
import { mount } from 'enzyme'

describe('Testing Hero component', () => {
  test('Mount component', () => {
    const hero = mount(<Hero />)
    expect(hero).toHaveLength(1)
  })
})
