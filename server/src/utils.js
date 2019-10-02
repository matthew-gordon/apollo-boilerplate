import jwt from 'jsonwebtoken'
import moment from 'moment'

export async function createToken({ id }) {
  const accessPayload = {
    exp: moment()
      .add(15, 'minutes')
      .unix(),
    iat: moment().unix(),
    sub: id,
  }

  return {
    accessToken: jwt.sign(accessPayload, process.env.TOKEN_SECRET, {}),
  }
}
