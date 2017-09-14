import React from "react";
import { connect } from "react-redux"
import moment from 'moment'

import { fetchData } from "../../action/countAllOrderAction"
import AuthorizedComponent from "../../util/AuthorizedComponent"
import Formater from "../../util/Formater"

@connect((store) => {
  return {
    countData: store.CountOrderNetWorth.data
  };
})
export default class CountAllOrderCard extends React.Component {
	constructor(props) {
		super(props)
		AuthorizedComponent.authComponent(this)
		this.state={
			start_date: moment().startOf('month').format('YYYY-MM-DD'),
			end_date: moment().endOf('month').format('YYYY-MM-DD'),
			group:'monthly',
			status:'Paid'
		}
  	}

  	componentDidMount() {
		this.props.dispatch(fetchData(this.state,'COUNT_ORDER_NETWORTH'))
	}
	
	render() {
		const { countData } = this.props;
	    return (
			<div class="card">
				<div class="card-body no-padding">
					<div class="alert alert-callout alert-danger no-margin">
						<h1 class="pull-right text-danger">
							<i class="md md-attach-money"></i>
						</h1>
						<strong class="text-xl">{Formater.toRp(countData.sum_total_sales)}</strong><br/>
						<span class="opacity-50">Sales Networth</span><br/>
						<div class="text-danger">Show Cart</div>
					</div>
				</div>
			</div>
	    );
	}
}
