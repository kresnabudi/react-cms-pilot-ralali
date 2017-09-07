import React from "react";

import SellerTable		from "../../components/seller/SellerTable";
import RejectedCard		from "../../components/seller/RejectedCard";
import NeedAprovalCard		from "../../components/seller/NeedAprovalCard";
import AverageCompletionCard		from "../../components/seller/AverageCompletionCard";
import ApprovedCard		from "../../components/seller/ApprovedCard";


export default class AllSeller extends React.Component {
  render() {
    return (
    	<div id="content">
			<section>
				<div class="section-body">
					<div class="row">
						<div class="col-md-3 col-sm-6">
							<AverageCompletionCard location={this.props.location}/>
						</div>
						<div class="col-md-3 col-sm-6">
							<NeedAprovalCard location={this.props.location}/>
						</div>
						<div class="col-md-3 col-sm-6">
							<ApprovedCard location={this.props.location}/>
						</div>
						<div class="col-md-3 col-sm-6">
							<RejectedCard location={this.props.location}/>
						</div>
					</div>
					<div class="row">
						<SellerTable match={this.props.match} location={this.props.location}/>
					</div>
				</div>
			</section>
	    </div>
    );
  }
}
