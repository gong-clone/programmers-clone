import React, { FC } from 'react'
import { Switch, Route } from 'react-router-dom'

import Main from '../Pages/Main'

const Routes: FC = () => (
  <Switch>
    <Route path="/" exact>
      <Main />
    </Route>
  </Switch>
)

export default Routes
