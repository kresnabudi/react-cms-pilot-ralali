import React from "react";
import { NavLink, Link } from "react-router-dom"
import { connect } from "react-redux"
import moment from 'moment'

import AuthorizedComponent from "../../util/AuthorizedComponent"
import Formater from "../../util/Formater"
import { fetchDataSeller } from "../../action/BaseSellerAction"

@connect((store) => {
  return {
    dataSeller: store.GetAllSeller.data
  };
})
export default class RejectedCard extends React.Component {
	constructor() {
		super()
		AuthorizedComponent.authComponent(this)
  	}

  	changePropSeller(){
  		this.props.dispatch(fetchDataSeller({
			page: 1,
			show_data : 10,
			count_data : 0,
			vendor_status: 'R'
		}))
  	}
  	render() {
  		const { countAllItem } = this.props;
	    return (
	    	<div class="card">
				<div class="card-body no-padding">
					<div class="alert alert-callout alert-danger no-margin">
						<h1 class="pull-right text-danger">
							<i class="md md-report-problem"></i>
						</h1>
						<strong class="text-xl">{Formater.standartNumber(12345)}</strong><br/>
						<div class="text-danger">Rejected</div>
						<NavLink to={this.props.location.pathname+"?status_seller=Reject"} onClick={this.changePropSeller.bind(this)}>
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
