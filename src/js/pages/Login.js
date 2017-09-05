import React from 'react'
import {
  Redirect
} from 'react-router-dom'
import { connect } from "react-redux"

import { login } from "../action/authAction"
import Authenticator from "../util/Authenticator"

@connect((store) => {
  return {
    dataLogin: store.authReducer
  };
})
export default class Login extends React.Component {
  state = {
    redirectToReferrer: false
  }

  login = (event) => {
  	event.preventDefault()
  	const data = new FormData(event.target);
  	let postData={}
  	for (const key of data.keys()) {
  		postData[key]=data.get(key)
	}
	this.props.dispatch(login(postData))
  }

  setLogin = (access_token) => {
  	Authenticator.authenticate(access_token)
  }


  render() {
    if(this.props.dataLogin.data.access_token!==undefined){
    	let jancok = this.props.dataLogin.data.access_token
    	this.setLogin(jancok)
    	console.log(location.origin+'/#/dashboard')
    	window.location.href = location.origin+'/#/dashboard'
    	window.location.reload(true)
    	// return (
	    //     <Redirect push to='/dashboard'/>
	    // )
    }
    if(Authenticator.isAuthenticated){
    	// return (
	    //     <Redirect push to='/dashboard'/>
	    // )
	    window.location.href = location.origin+'/#/dashboard'
	    window.location.reload(true)
    }

    return (
    	<section class="section-account">
			<div class="img-backdrop">
			</div>
			<div class="spacer">
			</div>
			<div class="card contain-sm style-transparent">
				<div class="card-body">
					<div class="row">
						<div class="col-sm-6 text-center">
							<br/><br/><br/>
							<img src="./assets/backoffice-ralali-logo.svg" />
							<h4 class="text-light">ralali backoffice v2.2.1</h4>
						</div>
						<div class="col-sm-5 col-sm-offset-1 ">
							<span class="text-lg text-bold text-primary">Ralali Login</span>
							<form class="form floating-label" onSubmit={this.login.bind(this)}>
								<div class="form-group">
									<input type="text" class="form-control" id="email" name="email"/>
									<label for="email">Email</label>
								</div>
								<div class="form-group">
									<input type="password" class="form-control" id="password" name="password"/>
									<label for="password">Password</label>
								</div>
								<div class="row">
									<div class="col-xs-6 text-left">
									</div>
									<div class="col-xs-6 text-right">
										<button class="btn btn-primary btn-raised" type="submit">Login</button>
									</div>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</section>
      
    )
  }
}