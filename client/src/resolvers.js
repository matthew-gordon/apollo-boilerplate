import gql from 'graphql-tag'

export const typeDefs = gql`
  extend type Query {
    appName: String!
  }
`

export const resolvers = {}
