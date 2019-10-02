import uuid from 'uuid/v4'
import { genSaltSync, hashSync, compareSync } from 'bcryptjs'
import db from '../db'
import { createToken } from '../utils'

async function register({ email, password }) {
  const emailCheck = await db('users').where({ email }).first()

  if (emailCheck) throw new AuthenticationError('email exists.')

  const salt = genSaltSync()
  const hash = hashSync(password, salt)

  const [user] = await db('users')
    .insert({
      id: uuid(),
      username,
      password: hash,
    })
    .returning(['id', 'email', 'created_at', 'updated_at'])

  const token = createToken(user)

  return {
    ...user,
    ...token,
  }
}

async function login({ email, password }) {
  const user = await db('users')
    .where({ email })
    .first()

  if (!user) throw new AuthenticationError('Invalid email/password.')

  const valid = compareSync(password, user.password)

  if (!valid) throw new AuthenticationError('Invalid email/password')

  const token = await createToken(user)

  return {
    ...user,
    ...token,
  }
}

export default {
  register,
  login,
}
