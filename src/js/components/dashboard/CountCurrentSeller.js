import React from "react";
import { connect } from "react-redux"
import moment from 'moment'

import { fetchData } from "../../action/countSeller"
import AuthorizedComponent from "../../util/AuthorizedComponent"


@connect((store) => {
  return {
    sempak: store
  };
})
export default class CountCurrentSellerCard extends React.Component {
	constructor() {
		super()
		AuthorizedComponent.authComponent(this)
		this.state={
			start_date: moment().startOf('month').format('YYYY-MM-DD'),
			end_date: moment().endOf('month').format('YYYY-MM-DD'),
			componentStatus:''
		}
  	}

  	componentWillMount() {
  		if(this.props.typecard==='curentseller'){
  			this.setState({componentStatus:'COUNT_CURRENT_SELLER'})
  		}else{
  			this.setState({
  				start_date: moment().format('YYYY-MM-DD'),
				end_date: moment().format('YYYY-MM-DD'),
  				componentStatus:'COUNT_TODAY_SELLER'
  			})
  		}
  	}
  	
  	componentDidMount() {
  		this.props.dispatch(fetchData(this.state, this.state.componentStatus))
	}

	render() {
		const { sempak } = this.props
		let countSempak = (this.state.componentStatus==='COUNT_CURRENT_SELLER')?sempak.CountCurentSeller.data.count:sempak.CountTodaySeller.data.count
		return (
			<div class="card">
				<div class="card-body no-padding">
					<div class="alert alert-callout alert-info no-margin">
						<h1 class="pull-right text-info">
							<i class="md md-timer"></i>
						</h1>
						<strong class="text-xl">{countSempak}</strong><br/>
						<div class="text-info">Current Seller</div>
					</div>
				</div>
			</div>
		);
	}
}
