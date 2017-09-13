import React from 'react'
import axios from "axios";
import { getAksesUser } from "../action/authAction"

function initial(){
  if(sessionStorage.getItem('auth-component')===undefined || sessionStorage.getItem('auth-component')===null || sessionStorage.getItem('auth-component')==={}) {
    sessionStorage.setItem('auth-component', JSON.stringify({ akses_komponen : { page : [] } }))
  }
  const jembut=JSON.parse(sessionStorage.getItem('auth-component')).page.reduce((init, ojmbt)=>{
      init[ojmbt.path]=ojmbt.component.reduce((compinit, compObj)=>{
        compinit[compObj.name]=compObj
        return compinit
      },{})
      return init
    },{})
  return jembut
}
function getAuthComponent(akses_komponen) {
  console.log('this.akses_komponen',akses_komponen)
  if(akses_komponen===undefined)  return initial()
  return akses_komponen
}
const AuthorizedComponent = {
  akses_komponen: undefined,
  authComponent(komponen,cb) {
    const classname = komponen.constructor.name
    const pathname = komponen.props.location.pathname
    const mappedPage= getAuthComponent(this.akses_komponen)
    console.log('mappedPage',mappedPage) 
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
    this.akses_komponen=authAkses.page.reduce((init, ojmbt)=>{
      init[ojmbt.path]=ojmbt.component.reduce((compinit, compObj)=>{
        compinit[compObj.name]=compObj
        return compinit
      },{})
      return init
    },{})
    console.log(this.akses_komponen)
    sessionStorage.setItem('auth-component', JSON.stringify(this))
  }
}

export default AuthorizedComponent;