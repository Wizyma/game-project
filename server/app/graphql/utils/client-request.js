import { client } from '../../api/'

async function Games (limit, name) {
	let games

	if (name) {
		games = await client.games({
			fields: '*',
			limit,
			offset: 0,
			search: name,
			order: 'release_dates.date:desc'
		})
	} else {
		games = await client.games({
			fields: '*',
			filters: {
				'popularity-gt': 80
			},
			limit,
			offset: 0,
			order: 'rating:desc'
		})
	}

	const withReviews = await Promise.all(games.body.map(async game => {
		const reviews = await client.reviews({
			fields: '*',
			filters: {
				'game-eq': game.id
			}
		})

		return {
			...game,
			reviews: reviews.body
		}
	}))

	const withCredits = await Promise.all(withReviews.map(async game => {
		const credits = await client.credits({
			fields: '*',
			filters: {
				'game-eq': game.id
			}
		})

		return {
			...game,
			credits: credits.game
		}
	}))

	return withCredits
}

async function GameById (id) {
	const game = await client.games({
		fields: '*',
		offset: 0,
		order: 'release_dates.date:desc',
		ids: [
			id
		]
	})

	const reviews = await client.reviews({
		fields: '*',
		filters: {
			'game-eq': id
		}
	})

	const credits = await client.credits({
		fields: '*',
		filters: {
			'game-eq': id
		}
	})

	return {
		...game.body[0],
		reviews: reviews.body,
		credits: credits.body
	}
}

async function GetCloudinaryImg (id) {
	const img = await client.image({
		cloudinary_id: id
	}, 'cover_big')

	return img
}

export {
	Games,
	GameById,
	GetCloudinaryImg
}
