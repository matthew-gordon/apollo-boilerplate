import { verify } from 'jsonwebtoken'
import db from '../db'

export default async (ctx, next) => {
  const accessToken = ctx.header['x-access-token']

  if (!accessToken) {
    return next()
  }

  if (accessToken && accessToken.split(' ')[0] === 'Bearer') {
    const checkToken = accessToken.split(' ')[1]

    try {
      const payload = verify(checkToken, process.env.TOKEN_SECRET)

      const user = await db('users')
        .where({ id: payload.sub })
        .first()

      ctx.state.user = user
      return next()
    } catch (err) {
      return next()
    }
  }

  return next()
}