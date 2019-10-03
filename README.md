# apollo-boilerplate

setup and run server first, then the client.

## Server

`$ export DATABASE_URL=postgres://localhost:5432/<db_address>`

`$ export TOKEN_SECRET=changeme`

`$ cd server`

`$ yarn install`

`$ yarn migrate`

`$ yarn seed`

`$ yarn dev`

server should be running at http://localhost:3000/graphql

then start the client

## Client

`$ cd client`

`$ yarn install`

`$ yarn start`

client should be running at http://localhost:3001/
