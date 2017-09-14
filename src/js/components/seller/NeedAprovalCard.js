import React from "react";
import { NavLink, Link } from "react-router-dom"
import { connect } from "react-redux"
import moment from 'moment'

import AuthorizedComponent from "../../util/AuthorizedComponent"
import Formater from "../../util/Formater"
import { fetchDataSeller, getCountSellerByStatus } from "../../action/BaseSellerAction"

@connect((store) => {
  return {
    needAprovalSeller: store.globalReducer.CountNeedApprovalSeller.data
  };
})
export default class NeedAprovalCard extends React.Component {
	constructor(props) {
		super(props)
		AuthorizedComponent.authComponent(this)
		this.state={
			start_date: moment(new Date(0)).format('YYYY-MM-DD'),
			end_date: moment().endOf('month').format('YYYY-MM-DD'),
			vendor_status: 'U,N,P,F'
		}
  	}

  	changePropSeller(){
  		this.props.dispatch(fetchDataSeller({
			page: 1,
			show_data : 10,
			count_data : 0,
			vendor_status: 'U,N,P,F'
		}))
  	}

  	componentDidMount() {
		this.props.dispatch(getCountSellerByStatus(this.state,'CountNeedApprovalSeller'))
	}

  	render() {
  		const { needAprovalSeller } = this.props;
	    return (
	    	<div class="card">
				<div class="card-body no-padding">
					<div class="alert alert-callout alert-warning no-margin">
						<h1 class="pull-right text-warning">
							<i class="md md-border-color"></i>
						</h1>
						<strong class="text-xl">{Formater.standartNumber(needAprovalSeller.count)}</strong><br/>
						<div class="text-warning">Need Approval</div>
						<NavLink to={"/seller/all?status_seller=WaitingForApproval"} onClick={this.changePropSeller.bind(this)}>
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
