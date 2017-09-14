import React from "react";
import { NavLink, Link } from "react-router-dom"
import { connect } from "react-redux"
import moment from 'moment'

import AuthorizedComponent from "../../util/AuthorizedComponent"
import Formater from "../../util/Formater"
import { fetchDataSeller, getCountSellerByStatus } from "../../action/BaseSellerAction"

@connect((store) => {
  return {
<<<<<<< HEAD
    rejectedSeller: store.globalReducer.CountRejectedSeller.data
=======
    rejectedSeller: store.CountRejectedSeller.data,
>>>>>>> 78eb06d56865184920ad935657604f51d4b3e1de
  };
})
export default class RejectedCard extends React.Component {
	constructor(props) {
		super(props)
		AuthorizedComponent.authComponent(this)
		this.state={
			start_date: moment(new Date(0)).format('YYYY-MM-DD'),
			end_date: moment().endOf('month').format('YYYY-MM-DD'),
			vendor_status: 'R'
		}
  	}

  	changePropSeller(){
  		this.props.dispatch(fetchDataSeller({
			page: 1,
			show_data : 10,
			count_data : 0,
			vendor_status: 'R'
		}))
  	}

  	componentDidMount() {
		this.props.dispatch(getCountSellerByStatus(this.state,'CountRejectedSeller'))
	}

  	render() {
  		const { rejectedSeller,getAksesUser } = this.props;
	    return (
	    	<div class="card">
				<div class="card-body no-padding">
					<div class="alert alert-callout alert-danger no-margin">
						<h1 class="pull-right text-danger">
							<i class="md md-report-problem"></i>
						</h1>
						<strong class="text-xl">{Formater.standartNumber(rejectedSeller.count)}</strong><br/>
						<div class="text-danger">Rejected Seller</div>
						<NavLink to={"/seller/all?status_seller=Reject"} onClick={this.changePropSeller.bind(this)}>
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
