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
		},

		popularGames: async (_, { limit }) => {
			const games = await client.games({
				fields: '*',
				filters: {
					'popularity-gt': 80
				},
				limit,
				offset: 30
			})

			return games.body
		},

		cloudinaryImg: async (_, { id }) => {
			const img = await client.image({
				cloudinary_id: id
			}, 'cover_big')

			return img
		}
	}
}

export {
	resolvers
}
