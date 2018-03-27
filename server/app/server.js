import { GraphQLServer } from 'graphql-yoga'
import morgan from 'morgan'
import { resolvers, typeDefs } from './graphql'
import cors from 'cors'
require('dotenv').config()
class Server {
	constructor (options = {}) {
		this.options = options

		this.server = new GraphQLServer({
			typeDefs,
			resolvers,
			context: req => ({
				...req,
				key: process.env.IGDB_KEY
			})
		})

		this.boot()
	}

    config = () => {
    	// redirect request to playground
    	this.server.use('*', (req, res, next) => {
    		if (req.method === 'GET' && req.originalUrl !== '/playground') {
    			return res.redirect('/playground')
    		}
    		next()
    	})

    	if (process.env.DEV) {
    		this.server.use(cors())
    		this.server.use(morgan('dev'))
    	}
    }

    boot = () => {
    	this.config()
    	this.server.start(this.options, ({ port }) => console.log(`> Server started listenning at port: ${port}`))
    }
}

export {
	Server
}
