import { client } from '../../api/'

const resolvers = {
	Query: {
		searchGame: async (_, { name, limit }) => {
			console.log(name)
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
				offset: 30,
				order: 'rating:desc'
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
