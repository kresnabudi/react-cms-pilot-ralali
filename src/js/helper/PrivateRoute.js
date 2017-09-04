import React from 'react'
import {
  Route,
  Redirect
} from 'react-router-dom'
import Authenticator  from "./Authenticator"
import Login 	from "./../pages/Login"

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    Authenticator.isAuthenticated ? (<Component {...props}/>) : (
      <Redirect push to={{
        pathname: '/login',
        state: { from: props.location }
      }}/>
    )
  )}/>
)

export default PrivateRoute;