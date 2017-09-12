import React from "react";
import { connect } from "react-redux"
import moment from 'moment'

import { getCountSellerByStatus } from "../../action/BaseSellerAction"
import AuthorizedComponent from "../../util/AuthorizedComponent"


@connect((store) => {
  return {
    rejectedSeller: store.CountRejectedSeller.data
  };
})
export default class CountRejectedSeller extends React.Component {
	constructor(props) {
		super(props)
		AuthorizedComponent.authComponent(this)
		this.state={
			start_date: moment().startOf('month').format('YYYY-MM-DD'),
			end_date: moment().endOf('month').format('YYYY-MM-DD'),
			vendor_status: 'R'
		}
  	}

  	componentDidMount() {
		this.props.dispatch(getCountSellerByStatus(this.state,'COUNT_REJECTED_SELLER'))
	}

  	render() {

  		const { rejectedSeller } = this.props;

	    return (
			<div class="card">
				<div class="card-body no-padding">
					<div class="alert alert-callout alert-danger no-margin">
						<h1 class="pull-right text-info">
							<i class="md md-timer"></i>
						</h1>
						<strong class="text-xl">{rejectedSeller.count}</strong><br/>
						<div class="text-danger">Rejected Seller</div>
					</div>
				</div>
			</div>
	    );
	}
}
