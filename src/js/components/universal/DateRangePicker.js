import React from "react";


export default class DateRangePicker extends React.Component {
  render() {
    return (
		<div class="card">
			<div class="card-body no-padding">
				<div class="form-group">
					<div class="input-daterange input-group">
						<div class="input-group-content">
							<input type="text" class="form-control" name="start" />
							<label>Date range</label>
						</div>
						<span class="input-group-addon">to</span>
						<div class="input-group-content">
							<input type="text" class="form-control" name="end" />
							<div class="form-control-line"></div>
						</div>
					</div>
				</div>
			</div>
		</div>
    );
  }
}


