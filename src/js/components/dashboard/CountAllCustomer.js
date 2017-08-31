import React from "react";


export default class CountAllCustomer extends React.Component {
  render() {
    return (
		<div class="card">
			<div class="card-body no-padding accent">
				<div class="alert accent alert-callout alert-accent no-margin">
					<h1 class="pull-right text-accent">
						<i class="md md-timer"></i>
					</h1>
					<strong class="text-xl">0</strong><br/>
					<div class="text-accent">Customer</div>
				</div>
			</div>
		</div>
    );
  }
}
