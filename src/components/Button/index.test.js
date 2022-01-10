import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import Button from './index'

describe('Button Component', () => {
  test('Render', () => {
    const text = 'Get Started'
    const component = render(<Button text={text} />)
    expect(component.container).toHaveTextContent(text)
  })
})
