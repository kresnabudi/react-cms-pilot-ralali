import React from 'react'
import {
  Redirect
} from 'react-router-dom'
import { connect } from "react-redux"

import { login, getAksesUser } from "../action/authAction"
import Authenticator from "../util/Authenticator"
import AuthorizedComponent from "../util/AuthorizedComponent"

@connect((store) => {
  return {
    dataLogin: store.authReducer.data,
    dataAkses: store.aksesUserReducer.data
  };
})
export default class Login extends React.Component {

	login = (event) => {
		event.preventDefault()
		const data = new FormData(event.target);
		let postData={}
		for (const key of data.keys()) {
			postData[key]=data.get(key)
		}
		this.props.dispatch(login(postData))
	}

  	componentWillReceiveProps(nextProps){
  		if(nextProps.dataLogin!=={} && Object.keys(nextProps.dataAkses).length === 0){
  			Authenticator.authenticate(nextProps.dataLogin.access_token)
  			this.props.dispatch(getAksesUser(nextProps.dataLogin.access_token))
  		}if(nextProps.dataLogin!=={} && Object.keys(nextProps.dataAkses).length >= 0){
  			AuthorizedComponent.setAuthComponent(nextProps.dataAkses)
  		}
	}

  render() {
  	const {dataLogin,dataAkses} = this.props

  	console.log('Authenticator.isAuthenticated',Authenticator.isAuthenticated)
  	console.log('AuthorizedComponent.akses_komponen',AuthorizedComponent.akses_komponen)
    if(Authenticator.isAuthenticated && AuthorizedComponent.akses_komponen!==undefined){
    	setTimeout(()=>{ 
			window.location.href = location.origin+'/#/dashboard'
			window.location.reload(true) 
		}, 2000);
    	// return (
	    //     <Redirect push to='/dashboard'/>
	    // )
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