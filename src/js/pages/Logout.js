import React from 'react'
import {
  Redirect
} from 'react-router-dom'

import Authenticator from "../helper/Authenticator"

const Logout = () => {
	Authenticator.signout()
    return (
    	<Redirect to='/login'/>
    );
};

export default Logout;