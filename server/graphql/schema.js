const { buildSchema } = require("graphql");

module.exports = buildSchema(`
  type Movie {
    id: ID!
    posterPath: String!
    releaseDate: String!
    title: String!
    voteAverage: Float!
  }

  type MovieDetails {
    backdropPath: String!
    genres: [String!]
    id: ID!
    overview: String!
    posterPath: String!
    releaseDate: String!
    runtime: Int!
    tagline: String!
    title: String!
    voteAverage: Float!
  }

  type Query {
    movie(id: Int!): MovieDetails
    popularMovies: [Movie!]
  }
`);