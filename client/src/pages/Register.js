import React from 'react'
import { useMutation, useApolloClient } from '@apollo/react-hooks'
import gql from 'graphql-tag'

import RegisterForm from '../components/RegisterForm'

const REGISTER_MUTATION = gql`
  mutation register($email: String!, $password: String!) {
    register(email: $email, password: $password) {
      id
      email
      accessToken
    }
  }
`

export default function Register() {
  const client = useApolloClient()
  const [register, { loading, error }] = useMutation(
    REGISTER_MUTATION,
    {
      onCompleted({ register }) {
        localStorage.setItem('accessToken', register);
        client.writeData({ data: { me: register } })
      }
    }
  )

  if (loading) return <h1>Loading...</h1>
  if (error) return <p>An error occurred</p>

  return <RegisterForm register={register} />
}