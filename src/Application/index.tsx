import React, { FC } from 'react'

import Providers from './Providers'
import Routes from './Routes'

const Application: FC = () => (
  <Providers>
    <Routes />
  </Providers>
)

export default Application
