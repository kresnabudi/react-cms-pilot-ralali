import React from "react";
import {
  Redirect
} from 'react-router-dom'

import Header from "../../components/layout/Header";
import SideBar from "../../components/layout/SideBar";
import Login from "../Login";

export default class Layout extends React.Component {

  	render() {
  		console.log(location)
	  	if(location.hash==='#/login'){
  			return (<Login/>);
  		}
  		const contentData=(this.props.children!==undefined)?this.props.children:[]
  		return (
			<div>
	      	<Header />
				  <SideBar contenRender={contentData}/>
			</div>
	    );
	    
  	}
}
