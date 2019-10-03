import React, { useState } from 'react'
import { useQuery, useMutation } from '@apollo/react-hooks'
import gql from 'graphql-tag'

import { ME_QUERY } from '../../'

import LogoutButton from '../../containers/LogoutButton'

const UPDATE_USER = gql`
  mutation updateUser($email: String!) {
    updateUser(email: $email) {
      id
      email
    }
  }
`

export default function Account({ update }) {
  const [email, setEmail] = useState('')

  const { data } = useQuery(ME_QUERY, { fetchPolicy: 'cache-only' })

  const [updateUser, { loading, error }] = useMutation(
    UPDATE_USER,
    { refetchQueries: [{ query: ME_QUERY }] }
  )

  if (loading) return <h1>Loading...</h1>

  if (error) return <h1>Error</h1>

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      await updateUser({ variables: { email } })
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <>
      <h3>My account</h3>
      <p>{data.me.email}</p>
      <form onSubmit={handleSubmit}>
        <input
          name="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button>update</button>
      </form>
      <LogoutButton />
    </>
  )
}
