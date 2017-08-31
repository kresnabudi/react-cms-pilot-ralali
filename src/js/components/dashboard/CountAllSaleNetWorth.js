import React from "react";


export default class CountAllOrderCard extends React.Component {
  render() {
    return (
		<div class="card">
			<div class="card-body no-padding">
				<div class="alert alert-callout alert-danger no-margin">
					<h1 class="pull-right text-danger">
						<i class="md md-attach-money"></i>
					</h1>
					<strong class="text-xl">Rp 0</strong><br/>
					<span class="opacity-50">Sales Networth</span><br/>
					<div class="text-danger">Show Cart</div>
				</div>
			</div>
		</div>
    );
  }
}
