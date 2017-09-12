import React from "react";
import { connect } from "react-redux"
import moment from 'moment'

import { fetchData } from "../../action/countAllItemAction"
import AuthorizedComponent from "../../util/AuthorizedComponent"
import Formater from "../../util/Formater"


@connect((store) => {
  return {
    countAllItem: store.CountAllItem.data
  };
})
export default class CountAllItem extends React.Component {
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
  		const { countAllItem } = this.props;
	    return (
			<div class="card">
				<div class="card-body no-padding">
					<div class="alert alert-callout alert-info no-margin">
						<h1 class="pull-right text-info">
							<i class="md md-timer"></i>
						</h1>
						<strong class="text-xl">{Formater.standartNumber(countAllItem.count)}</strong><br/>
						<div class="text-info">Item</div>
					</div>
				</div>
			</div>
	    );
  	}
}
