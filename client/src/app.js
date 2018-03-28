import React from 'react'
import { Switch, Route } from 'react-router-dom'
import NavBar from './components/nav'
import Home from './components/home'

export default () => (
  <div>
    <NavBar />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route render={() => <h1>Not Found</h1>} />
    </Switch>
  </div>
)
 
