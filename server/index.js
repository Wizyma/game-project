import { Server } from './app/server'
require('dotenv').config()

const server = new Server({ // eslint-disable-line no-unused-vars
	port: process.env.PORT,
	endpoint: '/graphql',
	subscriptions: '/subscriptions',
	playground: '/playground'
})
