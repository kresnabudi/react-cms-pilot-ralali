import React from "react";
import { connect } from "react-redux"
import moment from 'moment'

import { fetchData } from "../../action/countAllOrderAction"
import AuthorizedComponent from "../../util/AuthorizedComponent"


@connect((store) => {
  return {
    countData: store.CountOrder.data
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
		this.props.dispatch(fetchData(this.state,'COUNT_ORDER'))
	}

  	render() {
  		const { countData } = this.props;
  		console.log(countData)
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
