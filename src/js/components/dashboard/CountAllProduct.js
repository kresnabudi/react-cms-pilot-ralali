import React from "react";


export default class CountAllOrderCard extends React.Component {
  render() {
    return (
		<div class="card">
			<div class="card-body no-padding">
				<div class="alert alert-callout alert-info no-margin">
					<h1 class="pull-right text-info">
						<i class="md md-shopping-basket"></i>
					</h1>
					<strong class="text-xl">0</strong><br/>
					<span class="opacity-50">Qty</span><br/>
					<div class="text-info">Show Cart</div>
				</div>
			</div>
		</div>
    );
  }
}
