import React from 'react'
import { useMutation, useApolloClient } from '@apollo/react-hooks'
import { navigate } from '@reach/router'
import gql from 'graphql-tag'

import LoginForm from '../components/LoginForm'

const LOGIN_MUTATION = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      id
      email
      accessToken
    }
  }
`

export default function Register() {
  const client = useApolloClient()
  const [login, { loading, error }] = useMutation(
    LOGIN_MUTATION,
    {
      onCompleted({ login }) {
        localStorage.setItem('accessToken', login.accessToken);
        client.writeData({ data: { me: login } })
        navigate('/dashboard')
      }
    }
  )

  if (loading) return <h1>Loading...</h1>
  if (error) return <p>An error occurred</p>

  return <LoginForm login={login} />
}