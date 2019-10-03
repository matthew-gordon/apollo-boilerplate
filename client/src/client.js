import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { typeDefs, resolvers } from './resolvers'

export default function configureClient() {
  const cache = new InMemoryCache()

  const accessToken = localStorage.getItem('accessToken')

  const httpLink = new HttpLink({
    uri: 'http://localhost:3000/graphql',
    headers: {
      'x-access-token': accessToken ? `Bearer ${accessToken}` : '',
    },
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
      appName: 'apollo boilerplate',
    },
  });

  return client
}
