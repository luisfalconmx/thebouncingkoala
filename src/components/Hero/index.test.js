import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Hero from './index'

describe('<Hero />', () => {
  test('Renders component', () => {
    const title = 'Test Title'
    const component = render(<Hero title={title} />)
    expect(component.container).toHaveTextContent(title)
    component.debug()
  })
})
