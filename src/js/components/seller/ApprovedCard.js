import React from "react";
import { NavLink, Link } from "react-router-dom"
import { connect } from "react-redux"
import moment from 'moment'

import AuthorizedComponent from "../../util/AuthorizedComponent"
import Formater from "../../util/Formater"
import { getCountSellerByStatus, fetchDataSeller } from "../../action/BaseSellerAction"


@connect((store) => {
  return {
    approvedSeller: store.CountApprovedSeller.data
  };
})
export default class ApprovedCard extends React.Component {
	constructor(props) {
		super(props)
		AuthorizedComponent.authComponent(this)
		this.state={
			start_date: moment(new Date(0)).format('YYYY-MM-DD'),
			end_date: moment().endOf('month').format('YYYY-MM-DD'),
			vendor_status: 'A'
		}
  	}

  	changePropSeller(){
  		this.props.dispatch(fetchDataSeller({
			page: 1,
			show_data : 10,
			count_data : 0,
			vendor_status: 'A'
		}))
  	}
  	
  	componentDidMount() {
		this.props.dispatch(getCountSellerByStatus(this.state,'COUNT_APPROVED_SELLER'))
	}

  	render() {
  		const { approvedSeller } = this.props;
	    return (
	    	<div class="card">
				<div class="card-body no-padding">
					<div class="alert alert-callout alert-success no-margin">
						<h1 class="pull-right text-success">
							<i class="md md-check-box"></i>
						</h1>
						<strong class="text-xl">{Formater.standartNumber(approvedSeller.count)}</strong><br/>
						<div class="text-success">Approved Seller`</div>
						<NavLink to={"/seller/all?status_seller=Approved"} onClick={this.changePropSeller.bind(this)}>
							<span class="opacity-50">
								Show On Table
							</span>
						</NavLink>
					</div>
				</div>
			</div>
	    );
  	}
}
