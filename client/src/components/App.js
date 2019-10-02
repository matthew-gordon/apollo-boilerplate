import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import gql from 'graphql-tag'

// local state management
const appName = gql`
  query appName {
    appName @client
    helloWorld
  }
`

export default function App() {
  const { data, loading, error } = useQuery(appName)

  if (loading) return <h1>Loading...</h1>

  if (error) return <h1>Error {`${error}`}</h1>

  return (
    <>
      <h1>Welcome to {data.appName}!</h1>
      <p>{data.helloWorld}</p>
    </>
  )
}
