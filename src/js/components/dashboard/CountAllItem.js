import React from "react";


export default class CountAllItem extends React.Component {
  render() {
    return (
		<div class="card">
			<div class="card-body no-padding">
				<div class="alert alert-callout alert-info no-margin">
					<h1 class="pull-right text-info">
						<i class="md md-timer"></i>
					</h1>
					<strong class="text-xl">0</strong><br/>
					<div class="text-info">Item</div>
				</div>
			</div>
		</div>
    );
  }
}
