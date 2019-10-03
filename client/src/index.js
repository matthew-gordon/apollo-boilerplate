import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider, useQuery } from '@apollo/react-hooks'
import gql from 'graphql-tag'
import * as serviceWorker from './serviceWorker'
import configureClient from './client'
import Pages from './pages'

const client = configureClient()

export const ME_QUERY = gql`
  query me {
    me {
      id
      email
    }
  }
`

const App = () => {
  const { data, loading, error } = useQuery(ME_QUERY)

  if (loading) return <h1>Loading...</h1>

  if (error) return <h1>Error</h1>

  return <Pages currentUser={data.me ? data.me : null} />
}

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
