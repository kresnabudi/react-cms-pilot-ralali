import React from "react";
import { connect } from "react-redux"
import moment from 'moment'

import { fetchData } from "../../action/countSeller"
import AuthorizedComponent from "../../util/AuthorizedComponent"
import Formater from "../../util/Formater"


@connect((store) => {
  return {
    allSeller: store.CountAllSeller.data
  };
})
export default class CountAllSeller extends React.Component {
	constructor() {
		super()
		AuthorizedComponent.authComponent(this)
		this.state={
			start_date: moment(new Date(0)).format('YYYY-MM-DD'),
			end_date: moment().format('YYYY-MM-DD'),
		}
  	}

  	componentDidMount() {
		this.props.dispatch(fetchData(this.state,'COUNT_ALL_SELLER'))
	}

	render() {
		const { allSeller } = this.props;
		return (
			<div class="card">
				<div class="card-body no-padding">
					<div class="alert alert-callout alert-success no-margin">
						<h1 class="pull-right text-info">
							<i class="md md-timer"></i>
						</h1>
						<strong class="text-xl">{Formater.standartNumber(allSeller.count)}</strong><br/>
						<div class="text-success">Seller</div>
					</div>
				</div>
			</div>
		);
	}
}
