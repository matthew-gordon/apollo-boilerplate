import { gql } from 'apollo-server-koa'

const User = gql`
  type User {
    id: ID!
    email: String!
    password: String!
    accessToken: String
    refreshToken: String
  }

  extend type Query {
    me: User
  }

  extend type Mutation {
    login(email: String!, password: String!): User!
    register(email: String!, password: String!): User!
    updateUser(email: String!): User!
  }
`

export default User
