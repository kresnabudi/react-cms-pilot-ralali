import React from "react";
import { connect } from "react-redux"

import { fetchData } from "../../action/countAllOrderAction"

@connect((store) => {
  return {
    countData: store.countAllOrder.data
  };
})

export default class CountAllOrderCard extends React.Component {

	componentWillMount() {
		this.props.dispatch(fetchData())
	}

  	render() {
  		const { countData } = this.props;
	    return (
			<div class="card">
				<div class="card-body no-padding">
					<div class="alert alert-callout alert-success no-margin">
						<h1 class="pull-right text-success">
							<i class="md md-shopping-cart"></i>
						</h1>
						<strong class="text-xl">{countData.sum_total_order}</strong><br/>
						<span class="opacity-50">Order</span><br/>
						<div class="text-success">Show Cart</div>
					</div>
				</div>
			</div>
	    );
  	}
}
