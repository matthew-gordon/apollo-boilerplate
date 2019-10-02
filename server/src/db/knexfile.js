import path from 'path'

const ROOT = path.resolve(__dirname, '../')

const options = {
  client: 'pg',
  connection: 'postgres://localhost:5432/apollo_boilerplate',
  migrations: {
    directory: path.join(ROOT, '/db/migrations'),
  },
  seeds: {
    directory: path.join(ROOT, '/db/seeds'),
  },
  debug: false,
  pool: {
    min: 2,
    max: 10,
  },
}

const connection = {
  development: Object.assign({}, options),
}

module.exports = connection
