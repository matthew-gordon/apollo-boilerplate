import userResolvers from './user'

export default {
  Query: {
    ...userResolvers.Queries,
  },
  Mutation: {
    ...userResolvers.Mutations,
  },
}
