import React from "react";

import CountAllOrder	from "../../components/dashboard/CountAllOrder";
import CountAllProduct		from "../../components/dashboard/CountAllProduct";
import CountAllSaleNetWorth	from "../../components/dashboard/CountAllSaleNetWorth";

import CountCurrentSeller	from "../../components/dashboard/CountCurrentSeller";
import CountApproveSeller		from "../../components/dashboard/CountApproveSeller";
import CountRejectedSeller		from "../../components/dashboard/CountRejectedSeller";

import CountAllItem			from "../../components/dashboard/CountAllItem";
import CountAllSeller		from "../../components/dashboard/CountAllSeller";
import CountAllCustomer		from "../../components/dashboard/CountAllCustomer";
import CountAllBrand		from "../../components/dashboard/CountAllBrand";

import DateRangePickerDashboard		from "../../components/universal/DateRangePickerDashboard";

export default class Dashboard extends React.Component {
  render() {
    return (
		<div id="content">
			<section>
					<div class="section-body">
						<div class="row">
							<div class="col-lg-4 col-lg-offset-8 col-md-4 col-md-offset-8">
								<DateRangePickerDashboard />
							</div>
						</div>

						<div class="row">
							<div class="col-md-6 col-lg-4" id="CountAllOrder">
								<CountAllOrder location={this.props.location}/>
							</div>
							<div class="col-md-6 col-lg-4">
								<CountAllProduct location={this.props.location}/>
							</div>
							<div class="col-md-6 col-lg-4">
								<CountAllSaleNetWorth location={this.props.location}/>
							</div>
						</div>

						<div class="row">
							<div class="col-md-9">
								<div class="card">
									<div class="card-head">
										<header>Registration history</header>
										<div class="tools">
											<a class="btn btn-icon-toggle btn-refresh"><i class="md md-refresh"></i></a>
											<a class="btn btn-icon-toggle btn-collapse"><i class="fa fa-angle-down"></i></a>
											<a class="btn btn-icon-toggle btn-close"><i class="md md-close"></i></a>
										</div>
									</div>
									<div class="card-body no-padding height-10">
										<div class="row">
											<div class="col-sm-6 hidden-xs">
												<div class="force-padding text-sm text-default-light">
													<p>
														<i class="md md-mode-comment text-primary-light"></i>
														The registrations are measured from the time that the redesign was fully implemented and after the first e-mailing.
													</p>
												</div>
											</div>
											<div class="col-sm-6">
												<div class="force-padding pull-right text-default-light">
													<h2 class="no-margin text-primary-dark"><span class="text-xxl">66.05%</span></h2>
													<i class="fa fa-caret-up text-success fa-fw"></i> more registrations
												</div>
											</div>
										</div>
										<div class="stick-bottom-left-right force-padding">
											<div id="flot-registrations" class="flot height-5" data-title="Registration history" data-color="#0aa89e"></div>
										</div>
									</div>
								</div>
							</div>

							<div class="col-md-3">

								<div class="col-md-12 col-sm-12">
									<CountCurrentSeller location={this.props.location} typecard="curentseller"/>
								</div>
								<div class="col-md-12 col-sm-12">
									<CountCurrentSeller location={this.props.location} typecard="todayseller"/>
								</div>
								<div class="col-md-12 col-sm-12">
									<CountApproveSeller location={this.props.location}/>
								</div>
								<div class="col-md-12 col-sm-12">
									<CountRejectedSeller location={this.props.location}/>
								</div>
							</div>
						</div>
						<div class="row">
							<div class="col-md-3 col-sm-6">
								<CountAllItem location={this.props.location}/>
							</div>
							<div class="col-md-3 col-sm-6">
								<CountAllSeller location={this.props.location}/>
							</div>
							<div class="col-md-3 col-sm-6">
								<CountAllCustomer location={this.props.location}/>
							</div>
							<div class="col-md-3 col-sm-6">
								<CountAllBrand location={this.props.location}/>
							</div>
						</div>
					</div>
				</section>
		</div>
    );
  }
}
