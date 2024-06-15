// src/typeDefs.js
const { gql } = require('apollo-server');

const typeDefs = gql`
  type Query {
    hello: String
    books: [Book]
  }

  type Book {
    title: String
    author: String
  }

  type Mutation {
    addBook(title: String, author: String): Book
  }
`;

module.exports = typeDefs;
