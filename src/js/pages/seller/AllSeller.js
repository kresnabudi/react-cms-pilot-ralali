import React from "react";

import SellerTable		from "../../components/seller/SellerTable";


export default class AllSeller extends React.Component {
  render() {
    return (
    	<div id="content">
			<section>
				<div class="section-body">
					<div class="row">
						<SellerTable match={this.props.match} location={this.props.location}/>
					</div>
				</div>
			</section>
	    </div>
    );
  }
}
