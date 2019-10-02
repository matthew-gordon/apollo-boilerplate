import { gql } from 'apollo-server-koa'
import User from './User'

const Root = gql`
  type Query {
    dummyText: String
  }

  type Mutation {
    dummyText: String
  }
`

export default [Root, User]
