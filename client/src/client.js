import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { typeDefs, resolvers } from './resolvers'

export default function configureClient() {
  const cache = new InMemoryCache()

  const httpLink = new HttpLink({
    uri: 'http://localhost:3000/graphql',
    headers: {},
    name: 'app [web]',
    version: '1.0.0',
  })

  const client = new ApolloClient({
    cache,
    link: httpLink,
    typeDefs,
    resolvers,
  })

  cache.writeData({
    data: {
      appName: 'Rob\'s awesome apollo hooks app',
    },
  });

  return client
}
