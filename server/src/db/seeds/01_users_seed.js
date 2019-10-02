import { genSaltSync, hashSync } from 'bcryptjs'

export function seed(knex) {
  return knex('users')
    .del()
    .then(() => {
      const salt = genSaltSync()
      const hash = hashSync('password123', salt)

      return knex('users').insert({
        id: '277f15c8-141f-4fdc-a716-716a0ad7970b',
        email: 'matt@email.com',
        password: hash,
      })
    })
}
