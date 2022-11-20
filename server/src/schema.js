import { gql } from 'apollo-server';

const typeDefs = gql`
  type Query {
    "Query to get tracks fot the home page "
    tracksForHome: [Track!]!
    track(id: ID!): Track
    module(id: ID!): Module
  }

  type Mutation {
    incrementTrackViews(trackId: ID!): IncrementTrackViewsResponse!
  }

  type IncrementTrackViewsResponse {
    "Similar to HTTP status code, represents the status of the mutation"
    code: Int!
    "Indicates whether the mutation was successful"
    success: Boolean!
    "Human-readable message for the UI"
    message: String!
    "Newly updated track after a successful mutation"
    track: Track
  }

  "A track is group of modules that teaches about a specifi topic"
  type Track {
    id: ID!
    title: String!
    author: Author!
    thumbnail: String
    length: Int
    modulesCount: Int
    "The track's complete description, can be in Markdown format"
    description: String
    "The number of times a track has been viewed"
    numberOfViews: Int
    modules: [Module!]!
  }

  "A Module is a single unit of teaching. Multiple Modules compose a Track"
  type Module {
    id: ID!
    title: String!
    length: Int
    videoUrl: String
    content: String
  }

  type Author {
    id: ID!
    name: String!
    photo: String!
  }
`;

export { typeDefs };
