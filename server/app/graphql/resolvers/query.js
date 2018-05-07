import { Games, GameById, GetCloudinaryImg } from '../utils/client-request'

const resolvers = {
	Query: {
		searchGame: async (_, { name, limit }) => await Games(limit, name),

		popularGames: async (_, { limit }) => await Games(limit),

		cloudinaryImg: async (_, { id }) => await GetCloudinaryImg(id),

		searchGameById: async (_, { id }) => await GameById(id)
	}
}

export {
	resolvers
}
