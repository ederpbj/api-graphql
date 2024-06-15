// src/index.js
const { ApolloServer } = require('apollo-server');
const typeDefs = require('./typeDefs');
const resolvers = require('./resolvers');

// Crie uma instância do ApolloServer
const server = new ApolloServer({ typeDefs, resolvers });

// Inicie o servidor
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
