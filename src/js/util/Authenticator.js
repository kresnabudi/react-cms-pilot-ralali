import React from 'react'

function initial(){
  if(sessionStorage.getItem('auth-data')===null) {
    sessionStorage.setItem('auth-data', JSON.stringify({isAuthenticated:false,access_token:''}))
  }
  return JSON.parse(sessionStorage.getItem('auth-data'))
}

const Authenticator = {
  isAuthenticated: initial().isAuthenticated,
  access_token: initial().access_token,
  authenticate(access_token,cb) {
    this.isAuthenticated = true
    this.access_token = access_token
    sessionStorage.setItem('auth-data', JSON.stringify(this))
    setTimeout(cb, 100) // fake async
  },
  signout(cb) {
    this.isAuthenticated = false
    this.access_token = ''
    sessionStorage.setItem('auth-data', JSON.stringify(this))
    setTimeout(cb, 100)
  },

}

export default Authenticator;