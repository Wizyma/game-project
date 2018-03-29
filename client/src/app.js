import React from 'react'
import { Switch, Route } from 'react-router-dom'
import NavBar from './components/nav'
import Home from './components/home'
import MoreInfo from './components/more-info'

export default () => (
  <div>
    <NavBar />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/more" component={MoreInfo} />
      <Route render={() => <h1>Not Found</h1>} />
    </Switch>
  </div>
)
 
