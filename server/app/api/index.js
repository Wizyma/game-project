import igdb from 'igdb-api-node'
require('dotenv').config()

const client = igdb(process.env.IGDB_KEY)

export {
	client
}
