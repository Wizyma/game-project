require('dotenv').config()
import { Server } from './app/server'

const server = new Server({
    port: process.env.PORT,
    endpoint: '/graphql',
    subscriptions: '/subscriptions',
    playground: '/playground',
})
