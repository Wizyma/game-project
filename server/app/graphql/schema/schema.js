const typeDefs = `
scalar IMG

type schema {
    query: Query
}

type Query {
    searchGame(name: String!, limit: Int! = 5): [Game!]!
    popularGames(limit: Int! = 20): [Game!]!
    searchGameById(id: ID!): Game!
    cloudinaryImg(id: String!): IMG!
}

type Game {
    id: ID! @unique
    name: String
    slug: String
    created_at: Int
    updated_at: Int
    summary: String
    collection: Int
    franchise: Int
    franchises: [Int]
    popularity: Float
    games: [Int]
    tags: [Int]
    developers: [Int]
    publishers: [Int]
    category: Int!
    game_mode: [Int]
    keywords: [Int]
    storyline: String
    hypes: Int
    # Users Rating
    rating: Float
    # Critics Rating
    aggregated_rating: Float
    aggregated_rating_count: Int
    total_rating: Float
    total_rating_count: Int
    rating_count: Int
    game_engines: [Int]
    time_to_beat: TimeToBeat
    player_perspectives: [Int]
    game_modes: [Int]
    themes: [Int]
    status: Int
    genres: [Int]
    expansions: [Int]
    dlcs: [Int]
    first_release_date: Int
    pulse_count: Int
    platforms: [Int]
    release_dates: ReleaseDates
    alternative_names: [AlternativeNames]
    screenshots: [CloudinaryImage]
    videos: [Videos]
    cover: CloudinaryImage
    esrb: ESRB
    pegi: PEGI
    websites: [Websites]
    external: External
    reviews: [Reviews]
    credits: [Credits]
}

type Credits {
    id: ID!
    name: String
    slug: String
    url: String!
    created_at: Int
    updated_at: Int
    game: ID!
    category: Int
    company: ID
    position: Int
    person: Int
    character: Int
    person_title: ID
    country: Int
    credited_name: String
    character_credited_name: String
}

type Reviews {
    id: ID! 
    username: String!
    slug: String!
    title: String!
    url: String!
    created_at: Int!
    updated_at: Int
    # ID of a game record
    game: ID!
    category: Int!
    likes: Int!
    views: Int!
    rating_category: Int!
    platform: Int
    # Youtube video slug
    video: String
    introduction: String
    content: String!
    conclusion: String
    positive_points: String
    negative_points: String
}

type External {
    steam: Int!
}

type Websites {
    category: Int!
    url: String!
}

type PEGI {
    synopsis: String!
    rating: Int!
}

type ESRB {
    synopsis: String!
    rating: Int!
}

type Videos {
    name: String!
    video_id: String!
}

type CloudinaryImage {
    url: String!
    cloudinary_id: String!
    width: Int!
    height: Int!
}

type AlternativeNames {
    name: String!
    comment: String!
}

type ReleaseDates {
    category: Int!
    platform: Int!
    date: Int!
    region: Int!
    human: String!
    y: Int!
    m: Int!
}

type TimeToBeat {
    hastly: Int!
    normally: Int!
    completely: Int!
}
`

export {
	typeDefs
}
