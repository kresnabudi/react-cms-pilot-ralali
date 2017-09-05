import React from 'react'

const AuthorizedComponent = {
  path_location:'',
  authComponent(komponen,cb) {
    const classname = komponen.constructor.name
    if(classname==''){
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
  }
}

export default AuthorizedComponent;