export default {
  Queries: {
    me: (_, __, { currentUser }) => currentUser,
  },
  Mutations: {
    login: async (_, { email, password }, { dataSources }) => {
      const user = await dataSources.userAPI.login({ email, password })

      return user ? user : null
    },
    register: async (_, { email, password }, { dataSources }) => {
      const user = await dataSources.userAPI.register({ email, password })

      return user ? user : null
    },
    updateUser: async (_, { email }, { dataSources, currentUser }) => {
      const user = await dataSources.userAPI.updateUser({ email, currentUser })

      return user ? user : null
    },
  },
}
