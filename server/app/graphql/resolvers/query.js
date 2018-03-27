const resolvers = {
    Query: {
      hello: (_, { name }) => `Hello ${name || 'World'}`,
    },
}

export {
    resolvers
}