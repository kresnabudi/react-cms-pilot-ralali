import React from "react";

import Header from "../../components/layout/Header";
import SideBar from "../../components/layout/SideBar";

export default class Layout extends React.Component {
  render() {
  	const contentData=(this.props.children!==undefined)?this.props.children:null
    return (
		<div>
      <Header />
			<SideBar contenRender={contentData}/>
		</div>
    );
  }
}
