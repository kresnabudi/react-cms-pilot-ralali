import React from "react";
import moment from 'moment'
import _ from 'lodash'
import { DateRangePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import { ANCHOR_RIGHT } from 'react-dates/constants'

let dates = {
  startDate: ((new Date()).getDate() > 1) ? moment().startOf('month') : moment().subtract(1, 'month'),
  endDate: moment(),
}

export default class DateRangePickerDashboard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      focusedInput: null,
    }

    this.onFocusChange = this.onFocusChange.bind(this);
    this.onDatesChange = this.onDatesChange.bind(this);
  }

  onFocusChange(focusedInput) {
    this.setState({ focusedInput });
  }

  onDatesChange(nextDate) {
    const { startDate, endDate } = nextDate;
    if (startDate && endDate && !_.isEqual(dates, nextDate)) {
      dates = { startDate, endDate };
      console.log(moment(dates.startDate).format('DD MMMM YYYY'));
      console.log(moment(dates.endDate).format('DD MMMM YYYY'));
    }
  }

  render() {
    const { focusedInput } = this.state;
    const { startDate, endDate } = dates;
    return (
		<div class="card card-date pull-right">
      <DateRangePicker
        onDatesChange={this.onDatesChange}
        onFocusChange={this.onFocusChange}
        focusedInput={focusedInput}
        startDate={startDate}
        endDate={endDate}
        displayFormat="DD MMM YYYY"
        isOutsideRange={() => false}
        anchorDirection={ANCHOR_RIGHT}
      />
		</div>
    );
  }
}
