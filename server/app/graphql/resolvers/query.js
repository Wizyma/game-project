import { client } from '../../api/'

const resolvers = {
	Query: {
		searchGame: async (_, { name, limit }) => {
			const games = await client.games({
				fields: '*',
				limit,
				offset: 0,
				search: name,
				order: 'release_dates.date:desc'
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
				offset: 0,
				order: 'rating:desc'
			})

			return games.body
		},

		cloudinaryImg: async (_, { id }) => {
			const img = await client.image({
				cloudinary_id: id
			}, 'cover_big')

			return img
		},

		searchGameById: async (_, { id }) => {
			const game = await client.games({
				fields: '*',
				offset: 0,
				order: 'release_dates.date:desc',
				ids: [
					id
				]
			})

			return game.body[0]
		}
	}
}

export {
	resolvers
}
