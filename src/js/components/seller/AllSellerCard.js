import React from "react";
import { NavLink, Link } from "react-router-dom"
import { connect } from "react-redux"
import moment from 'moment'

import AuthorizedComponent from "../../util/AuthorizedComponent"
import Formater from "../../util/Formater"
import { getCountSellerByStatus, fetchDataSeller } from "../../action/BaseSellerAction"

@connect((store) => {
  return {
    countAllSeller: store.CountAllSeller.data
  };
})
export default class AllSellerCard extends React.Component {
	constructor(props) {
		super(props)
		AuthorizedComponent.authComponent(this)
		this.state={
			start_date: moment(new Date(0)).format('YYYY-MM-DD'),
			end_date: moment().endOf('month').format('YYYY-MM-DD'),
		}
  	}

  	changePropSeller(){
  		this.props.dispatch(fetchDataSeller({
			page: 1,
			show_data : 10,
			count_data : 0,
			vendor_status: undefined
		}))
  	}

  	componentDidMount() {
		this.props.dispatch(getCountSellerByStatus(this.state,'COUNT_ALL_SELLER'))
	}

  	render() {
  		const { countAllSeller } = this.props;
	    return (
	    	<div class="card">
				<div class="card-body no-padding">
					<div class="alert alert-callout alert-accent no-margin">
						<h1 class="pull-right text-accent">
							<i class="md md-store"></i>
						</h1>
						<strong class="text-xl">{Formater.standartNumber(countAllSeller.count)}</strong><br/>
						<div class="text-accent">All Seller</div>
						<NavLink to={"/seller/all?status_seller=All"} onClick={this.changePropSeller.bind(this)}>
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
