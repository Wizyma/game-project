import React from 'react'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { BrowserRouter as Router } from 'react-router-dom'
import { render } from 'react-dom'
import App from './src/app'

const client = new ApolloClient({
	uri: 'http://localhost:4000/graphql',
	cacheRedirects: new InMemoryCache(),
})

/* eslint-disable */
render(
    <ApolloProvider client={client}> 
        <Router> 
            <App /> 
        </Router> 
    </ApolloProvider>, document.getElementById('root'))
module.hot.accept()

