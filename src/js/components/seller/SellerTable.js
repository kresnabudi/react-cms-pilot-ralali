import React from "react";
import { connect } from "react-redux"
import queryString from 'query-string'

import { fetchDataSeller } from "../../action/sellerAction"

@connect((store) => {
  return {
    datatabel: store
  };
})
export default class SellerTable extends React.Component {
	constructor() {
		super()
		this.state = {
			page: 1,
			show_data : 10
		}
  	}
  	
  	componentWillMount(){
  		let queryParam = queryString.parse(this.props.location.search)
  		if(queryParam.page!==undefined) this.setState({page:queryParam.page})
  		if(queryParam.show_data!==undefined) this.setState({show_data:queryParam.show_data})
  		this.props.dispatch(fetchDataSeller(this.state))
  	}

  	changePagination(){
  		
  	}

  	render() {
	  	
	  	console.log(this.state)
	    return (
			<div class="col-lg-12">
				<div class="panel-group" id="accordion6">
					<div class="card panel">
						<div class="card-head style-primary collapsed" data-toggle="collapse" data-parent="#accordion6" data-target="#accordion6-1">
							<header>Seller Data</header>
							<div class="tools">
								<a class="btn btn-icon-toggle"><i class="fa md-search"></i></a>
							</div>
						</div>
						<div id="accordion6-1" class="collapse">
							<div class="card-body"><p>Per at postea mediocritatem, vim numquam aliquid eu, in nam sale gubergren. Fuisset delicatissimi duo, qui ut animal noluisse erroribus. Ea eum veniam audire. Dicant vituperata consequuntur.</p>
							</div>
						</div>
					</div>
					<div class="card panel">
						<div id="accordion6-2">
							<div class="card-body">
								<div class="table-responsive">
									<table class="table table-striped no-margin">
										<thead>
											<tr>
												<th>#</th>
												<th colSpan="4">Seller Info</th>
												<th>Action</th>
											</tr>
										</thead>
										<tbody>
											<tr>
												<td>1</td>
												<td>
													<strong>Seller Name</strong>
													<div class="clearfix opacity-90">
														<span class="md-email"></span>&nbsp; <a href="mailto:email@mail.com" target="_top">email@mail.com</a>
													</div>
													<div class="clearfix opacity-90">
														<span class="md-warning text-warning"></span>&nbsp; Status - Join At 1 Aug 2017
													</div>
												</td>
												<td>
													<strong>Shop Name</strong>
													<div class="clearfix opacity-90">
														<span class="md-store"></span>&nbsp; Store Address
													</div>
													<div class="clearfix opacity-90">
														<span class="md-language"></span>&nbsp; Microsite Address
													</div>
												</td>
												<td>
													<strong></strong>
													<div class="clearfix opacity-90">
														<span class="md-phone"></span>&nbsp; Phone Number
													</div>
													<div class="clearfix opacity-90">
														<span class="md-phone-iphone"></span>&nbsp; Celular Number
													</div>
												</td>
												<td>Source : Web</td>
												<td>
													<div class="btn-group">
														<button type="button" class="btn ink-reaction btn-flat dropdown-toggle" data-toggle="dropdown">
															Action <i class="fa fa-caret-down text-default-light"></i>
														</button>
														<ul class="dropdown-menu animation-expand" role="menu">
															<li><a href="#">Follow Up</a></li>
															<li><a href="#">View</a></li>
															<li><a href="#">Edit</a></li>
															<li class="divider"></li>
															<li><a href="#"><i class="md-star-rate text-warning"></i>Upgrade Super Seller</a></li>
														</ul>
													</div>
												</td>
											</tr>
											<tr>
												<td>2</td>
												<td>Table cell</td>
												<td>Table cell</td>
												<td>Table cell</td>
												<td>Table cell</td>
												<td>Table cell</td>
											</tr>
											<tr>
												<td>3</td>
												<td>Table cell</td>
												<td>Table cell</td>
												<td>Table cell</td>
												<td>Table cell</td>
												<td>Table cell</td>
											</tr>
											<tr>
												<td>4</td>
												<td>Table cell</td>
												<td>Table cell</td>
												<td>Table cell</td>
												<td>Table cell</td>
												<td>Table cell</td>
											</tr>
											<tr>
												<td>5</td>
												<td>Table cell</td>
												<td>Table cell</td>
												<td>Table cell</td>
												<td>Table cell</td>
												<td>Table cell</td>
											</tr>
											<tr>
												<td>6</td>
												<td>Table cell</td>
												<td>Table cell</td>
												<td>Table cell</td>
												<td>Table cell</td>
												<td>Table cell</td>
											</tr>
											<tr>
												<td>7</td>
												<td>
													<strong>Seller Name</strong>
													<div class="clearfix opacity-90">
														<span class="md-email"></span>&nbsp; email@mail.com
													</div>
													<div class="clearfix opacity-90">
														<span class="md-warning text-warning"></span>&nbsp; Status - Join At 1 Aug 2017
													</div>
												</td>
												<td>
													<strong>Shop Name</strong>
													<div class="clearfix opacity-90">
														<span class="md-store"></span>&nbsp; Store Address
													</div>
													<div class="clearfix opacity-90">
														<span class="md-language"></span>&nbsp; Microsite Address
													</div>
												</td>
												<td>
													<div class="clearfix opacity-90">
														<span class="md-phone"></span>&nbsp; Phone Number
													</div>
													<div class="clearfix opacity-90">
														<span class="md-phone-iphone"></span>&nbsp; Celular Number
													</div>
												</td>
												<td>Source : Web</td>
												<td>
													<div class="btn-group">
														<button type="button" class="btn ink-reaction btn-flat dropdown-toggle" data-toggle="dropdown">
															Action <i class="fa fa-caret-down text-default-light"></i>
														</button>
														<ul class="dropdown-menu animation-expand" role="menu">
															<li><a href="#">Follow Up</a></li>
															<li><a href="#">View</a></li>
															<li><a href="#">Edit</a></li>
															<li class="divider"></li>
															<li><a href="#"><i class="md-star-rate text-warning"></i>Upgrade Super Seller</a></li>
														</ul>
													</div>
												</td>
											</tr>
										</tbody>
									</table>
								</div>
							</div>
						</div>
					</div>
					<div class="card panel pagingtable">
						<div class="card-head style-primary-bright">
							<div class="col-lg-12">
								<div class="col-lg-4">
									Showing : 1 - 10 Of 3141
								</div>
								<div class="col-lg-4">
									<div class="btn-group">
										<button type="button" class="btn ink-reaction btn-default-bright">«</button>
										<button type="button" class="btn ink-reaction btn-default-bright">1</button>
										<button type="button" class="btn ink-reaction btn-default-bright">2</button>
										<button type="button" class="btn ink-reaction btn-default-bright">3</button>
										<button type="button" class="btn ink-reaction btn-default-bright">4</button>
										<button type="button" class="btn ink-reaction btn-default-bright">5</button>
										<button type="button" class="btn ink-reaction btn-default-bright">»</button>
									</div>
								</div>
								<div class="col-lg-4">
									<div class="tools">
										<select id="paging" name="paging" class="form-control col-lg-2">
											<option value="10">10</option>
											<option value="25">20</option>
											<option value="50">50</option>
											<option value="100">100</option>
										</select>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
	    );
  	}
}


