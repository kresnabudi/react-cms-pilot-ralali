import React from "react";
import { connect } from "react-redux"
import moment from 'moment'

import { fetchData } from "../../action/countSeller"
import AuthorizedComponent from "../../util/AuthorizedComponent"


@connect((store) => {
  return {
    approvedSeller: store.CountApprovedSeller.data
  };
})
export default class CountApproveSeller extends React.Component {
	constructor() {
		super()
		AuthorizedComponent.authComponent(this)
		this.state={
			start_date: moment().startOf('month').format('YYYY-MM-DD'),
			end_date: moment().endOf('month').format('YYYY-MM-DD'),
			vendor_status: 'A'
		}
  	}

  	componentDidMount() {
		this.props.dispatch(fetchData(this.state,'COUNT_APPROVED_SELLER'))
	}

  	render() {
  		const { approvedSeller } = this.props;
	    return (
			<div class="card">
				<div class="card-body no-padding">
					<div class="alert alert-callout alert-success no-margin">
						<h1 class="pull-right text-info">
							<i class="md md-timer"></i>
						</h1>
						<strong class="text-xl">{approvedSeller.count}</strong><br/>
						<div class="text-success">Approved Seller</div>
					</div>
				</div>
			</div>
	    );
  	}
}
