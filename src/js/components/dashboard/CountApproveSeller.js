import React from "react";


export default class CountApproveSeller extends React.Component {
  render() {
    return (
		<div class="card">
			<div class="card-body no-padding">
				<div class="alert alert-callout alert-success no-margin">
					<h1 class="pull-right text-info">
						<i class="md md-timer"></i>
					</h1>
					<strong class="text-xl">0</strong><br/>
					<div class="text-success">Approved Seller</div>
				</div>
			</div>
		</div>
    );
  }
}
