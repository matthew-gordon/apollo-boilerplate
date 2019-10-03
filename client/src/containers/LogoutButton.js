import React from 'react'
import { useApolloClient } from '@apollo/react-hooks'

export default function LogoutButton() {
  const client = useApolloClient()

  return (
    <button
      data-testid="logout-button"
      onClick={() => {
        localStorage.clear()
        client.writeData({ data: { me: null } })
      }}
    >
      Logout
    </button>
  )
}
