import { gql } from 'apollo-server';

const typeDefs = gql`
  type Query {
    "Query to get tracks fot the home page "
    tracksForHome: [Track!]!
  }

  "A track is group of modules that teaches about a specifi topic"
  type Track {
    id: ID!
    title: String!
    author: Author!
    thumbnail: String
    length: Int
    modulesCount: Int
  }

  type Author {
    id: ID!
    name: String!
    photo: String!
  }
`;

export { typeDefs };
