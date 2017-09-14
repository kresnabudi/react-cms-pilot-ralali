import React from "react";
import { connect } from "react-redux"
import moment from 'moment'

import { fetchData } from "../../action/countAllCustomer"
import AuthorizedComponent from "../../util/AuthorizedComponent"
import Formater from "../../util/Formater"


@connect((store) => {
  return {
    allCustomer: store.CountAllCustomer.data
  };
})
export default class CountAllCustomer extends React.Component {
	constructor(props) {
		super(props)
		AuthorizedComponent.authComponent(this)
		this.state={
			start_date: moment(new Date(0)).format('YYYY-MM-DD'),
			end_date: moment().format('YYYY-MM-DD'),
		}
  	}

  	componentDidMount() {
		this.props.dispatch(fetchData(this.state))
	}

	render() {
		const { allCustomer } = this.props;
		return (
			<div class="card">
				<div class="card-body no-padding accent">
					<div class="alert accent alert-callout alert-accent no-margin">
						<h1 class="pull-right text-accent">
							<i class="md md-timer"></i>
						</h1>
						<strong class="text-xl">{Formater.standartNumber(allCustomer.count)}</strong><br/>
						<div class="text-accent">Customer</div>
					</div>
				</div>
			</div>
		);
	}
}
