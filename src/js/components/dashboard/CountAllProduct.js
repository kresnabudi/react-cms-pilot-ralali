import React from "react";
import { connect } from "react-redux"
import moment from 'moment'

import { fetchData } from "../../action/countAllOrderAction"
import AuthorizedComponent from "../../util/AuthorizedComponent"

@connect((store) => {
  return {
    countData: store.CountOrderQty.data
  };
})
export default class CountAllOrderCard extends React.Component {

	constructor() {
		super()
		AuthorizedComponent.authComponent(this)
		this.state={
			start_date: moment().startOf('month').format('YYYY-MM-DD'),
			end_date: moment().endOf('month').format('YYYY-MM-DD'),
			group:'monthly',
			status:'Paid'
		}
  	}

  	componentDidMount() {
		this.props.dispatch(fetchData(this.state,'COUNT_ORDER_QTY'))
	}

	render() {
		const { countData } = this.props;
	    return (
			<div class="card">
				<div class="card-body no-padding">
					<div class="alert alert-callout alert-info no-margin">
						<h1 class="pull-right text-info">
							<i class="md md-shopping-basket"></i>
						</h1>
						<strong class="text-xl">{countData.sum_total_quantity}</strong><br/>
						<span class="opacity-50">Qty</span><br/>
						<div class="text-info">Show Cart</div>
					</div>
				</div>
			</div>
	    );
	}
}
