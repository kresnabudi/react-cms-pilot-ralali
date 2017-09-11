import React from "react";
import {
  Redirect
} from 'react-router-dom'

import Header from "../../components/layout/Header";
import SideBar from "../../components/layout/SideBar";
import Login from "../Login";
import AuthorizedComponent from "../../util/AuthorizedComponent"

import { connect } from "react-redux"

export default class Layout extends React.Component {
  constructor() {
    super()
  }

  render() {
    if(location.hash==='#/login') return (<Login/>);
    const contentData=(this.props.children!==undefined)?this.props.children:[]
    const aksesKomponen = AuthorizedComponent.akses_komponen
		return (
  		<div>
        	<Header />
  			  <SideBar contenRender={contentData} dataAkses={aksesKomponen}/>
  		</div>
    );
    
	}
}
