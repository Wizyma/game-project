import { client } from '../../api/'

const resolvers = {
	Query: {
		searchGame: async (_, { name, limit }) => {
			const games = await client.games({
				fields: '*',
				limit,
				offset: 15,
				search: name
			})

			return games.body
		}
	}
}

export {
	resolvers
}
