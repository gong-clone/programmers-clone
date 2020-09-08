import React from 'react'
import { render } from '@testing-library/react'
import Providers from '../../Application/Providers'
import Main from '.'

test('renders <Main /> Compoent - getByText', () => {
  const { getByText } = render(
    <Providers>
      <Main />
    </Providers>
  )

  expect(getByText(/Hello, Programmers-clone!/i)).toBeInTheDocument()
})
