const typeDefs = `
type schema {
    query: Query
}

type Query {
    hello(name: String): String!
}`

export {
	typeDefs
}
