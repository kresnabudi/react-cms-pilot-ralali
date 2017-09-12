import React from 'react'
import axios from "axios";
import { getAksesUser } from "../action/authAction"

function initial(){
  if(sessionStorage.getItem('auth-component')===undefined) {
    sessionStorage.setItem('auth-component', JSON.stringify({akses_komponen:undefined}))
  }
  return JSON.parse(sessionStorage.getItem('auth-component'))
}

const AuthorizedComponent = {
  akses_komponen: initial().akses_komponen,
  authComponent(komponen,cb) {
    const classname = komponen.constructor.name
    const pathname = komponen.props.location.pathname
    const mappedPage= this.akses_komponen.page.reduce((init, ojmbt)=>{
      init[ojmbt.path]=ojmbt.component.reduce((compinit, compObj)=>{
        compinit[compObj.name]=compObj
        return compinit
      },{})
      return init
    },{})
    
    if(mappedPage[pathname]==undefined || mappedPage[pathname][classname]==undefined){
      // override all component mounting
      komponen.render = () => {
        // adding empty div
        return <div id="tenangnopikirmu"></div>
      }
      komponen.componentWillMount = () => {}
      komponen.componentDidMount = () => {
        // removing component frame
        const pDoc = document.getElementById("tenangnopikirmu");
        pDoc.parentNode.parentNode.removeChild(pDoc.parentNode);
      }
    }
  },
  setAuthComponent(authAkses,cb) {
    this.akses_komponen=authAkses
    console.log('abcd',this.akses_komponen)
    sessionStorage.setItem('auth-component', JSON.stringify(this))
    console.log('cek setter',this.akses_komponen)
    console.log('cek session',sessionStorage.getItem('auth-component'))
  }
}

export default AuthorizedComponent;