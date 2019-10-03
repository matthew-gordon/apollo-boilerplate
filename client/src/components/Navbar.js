import React from 'react'
import { Link } from '@reach/router'
import { useQuery } from '@apollo/react-hooks'

import { ME_QUERY } from '../'

export default function Navbar({ appName }) {
  const { data } = useQuery(ME_QUERY)

  const LoggedInView = ({ currentUser }) => {
    return (
      <>
        <li>
          <Link to="/dashboard">
            {currentUser.email}
          </Link>
        </li>
      </>
    )
  }

  const LoggedOutView = () => {
    return (
      <>
        <li>
          <Link to="/login">
            login
          </Link>
        </li>
        <li>
          <Link to="/register">
            register
          </Link>
        </li>
      </>
    )
  }

  return (
    <>
      <Link to="/">{appName}</Link>
      {data.me ? <LoggedInView currentUser={data.me} /> : <LoggedOutView />}
    </>
  )
}