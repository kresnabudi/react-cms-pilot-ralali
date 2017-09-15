import React from "react";

function initial(){
  if(sessionStorage.getItem('auth-component')===undefined || sessionStorage.getItem('auth-component')===null || sessionStorage.getItem('auth-component')==={}) {
    sessionStorage.setItem('auth-component', JSON.stringify({ akses_komponen : {} }))
  }
  if(sessionStorage.getItem('auth-menu')===undefined || sessionStorage.getItem('auth-menu')===null || sessionStorage.getItem('auth-menu')==={}) {
    sessionStorage.setItem('auth-menu', JSON.stringify({ page : [] }))
  }
  return {
    akses_komponen: JSON.parse(sessionStorage.getItem('auth-component')),
    akses_komponen_before_reduce: JSON.parse(sessionStorage.getItem('auth-menu'))
  }
}

function initial2(){
  if(sessionStorage.getItem('auth-component')===undefined || sessionStorage.getItem('auth-component')===null || sessionStorage.getItem('auth-component')==={}) {
    sessionStorage.setItem('auth-component', JSON.stringify({ akses_komponen : { page : []} }))
  }
  let jembut=JSON.parse(sessionStorage.getItem('auth-component'))
  console.log('jembut',jembut)
  return jembut
}

function getAuthComponent(akses_komponen) {
  if(akses_komponen===undefined)  return initial()
  return akses_komponen
}

const AuthorizedComponent = {
  akses_komponen: initial().akses_komponen,
  akses_komponen_before_reduce: initial().akses_komponen_before_reduce,
  authComponent(komponen,cb) {
    const classname = komponen.constructor.name
    const pathname = komponen.props.location.pathname
    const mappedPage= getAuthComponent(this.akses_komponen)
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
    this.akses_komponen_before_reduce=authAkses
    sessionStorage.setItem('auth-component', JSON.stringify(this.akses_komponen))
    sessionStorage.setItem('auth-menu', JSON.stringify(this.akses_komponen_before_reduce))

  }
}

export default AuthorizedComponent;