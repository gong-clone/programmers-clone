import React from 'react'
import { render } from '@testing-library/react'
import App from '.'

test('Application Render Test', () => {
  const { container } = render(<App />)
  expect(container).toBeInstanceOf(HTMLDivElement)
})
