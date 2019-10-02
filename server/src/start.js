import Koa from 'koa'
import { ApolloServer } from 'apollo-server-koa'
import resolvers from './resolvers'
import typeDefs from './schema'
import dataSources from './datasources'
import dotenv from 'dotenv'

import auth from './middleware/auth'

dotenv.config()

export default async function start() {
  const app = new Koa()

  app.use(auth)

  const apollo = new ApolloServer({
    typeDefs,
    resolvers,
    context: ({ ctx }) => {
      const currentUser = ctx.state.user || null

      return {
        ctx,
        dataSources,
        currentUser,
      }
    },
  })

  apollo.applyMiddleware({ app })

  app.listen({ port: 3000 }, () =>
    console.log(`🚀  Server ready at http://localhost:3000${apollo.graphqlPath}`),
  )
}
