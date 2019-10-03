import React from 'react'
import { Router, Redirect } from '@reach/router'

import Home from './Home'
import Dashboard from './Dashboard'
import Login from './Login'
import Register from './Register'
import Account from '../components/dashboard/Account'
import Navbar from '../components/Navbar'

export default function Pages({ currentUser }) {
  const PrivateRoute = ({ as: Comp, ...props }) => {
    return currentUser ? (
      <Comp {...props} />
    ) : (
        <Redirect from={props.location.name} to={'/login'} noThrow />
      )
  }

  return (
    <>
      <Navbar appName={'apollo boilerplate'} />
      <Router primary={false}>
        <Home path="/" />
        <PrivateRoute as={Dashboard} path="/dashboard">
          <Account path="account" default />
        </PrivateRoute>
        <Login path="/login" />
        <Register path="/register" />
      </Router>
    </>
  )
}