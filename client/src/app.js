import React from 'react'
import { Switch, Route } from 'react-router-dom'
import NavBar from './components/nav'
import Popular from './components/popular'

export default () => (
	<div>
		<NavBar />
		<Switch>
			<Route exact path="/" component={Popular} />
			<Route render={() => <h1>Not Found</h1>} />
		</Switch>
	</div>
)
 
