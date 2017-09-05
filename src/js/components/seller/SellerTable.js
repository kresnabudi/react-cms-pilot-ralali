import React from "react";
import { connect } from "react-redux"
import queryString from 'query-string'

import AuthorizedComponent from "../../util/AuthorizedComponent"
import { fetchDataSeller } from "../../action/getAllSellerAction"

@connect((store) => {
  return {
    datatabel: store.GetAllSeller
  };
})
export default class SellerTable extends React.Component {
	constructor() {
		super()
		this.state = {
			page: 1,
			show_data : 10,
			count_data : 0
		}
		AuthorizedComponent.authComponent(this)
  	}
  	
  	componentWillMount(){
  		let queryParam = queryString.parse(this.props.location.search)
  		if(queryParam.page!==undefined) this.setState({page:queryParam.page})
  		if(queryParam.show_data!==undefined) this.setState({show_data:queryParam.show_data})
  		this.props.dispatch(fetchDataSeller(this.state))
  		this.setState({count_data:this.props.datatabel.data.count_all})
  	}

  	changeShowData(e){
  		this.setState({show_data:e.target.value})
  		this.props.dispatch(fetchDataSeller(this.state))
  	}

  	render() {
  		const count_data = this.props.datatabel.data.count_all
	  	const dataSeller = this.props.datatabel.data.list
	  	let mappedSeller = <tr></tr>
	  	if(dataSeller!=undefined){
	  		
	  		let no = 1
	  		mappedSeller = dataSeller.map(seller => 

		  		<tr key={seller.id}>
					<td>#</td>
					<td>
						<strong>{seller.name}</strong>
						<div class="clearfix opacity-90">
							<span class="md-email"></span>&nbsp; <a href={"mailto:"+seller.email} target="_top">{seller.email}</a>
						</div>
						<div class="clearfix opacity-90">
							<span class="md-warning text-warning"></span>&nbsp; Status - {seller.created_at}
						</div>
					</td>
					<td>
						<strong>Shop Name</strong>
						<div class="clearfix opacity-90">
							<span class="md-store"></span>&nbsp; Seller Address
						</div>
						<div class="clearfix opacity-90">
							<span class="md-language"></span>&nbsp; Microsite Name
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

		  	)
	  	}
	  	
	  	
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
											{mappedSeller}
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
									Showing : {(this.state.page<=1)?this.state.page:(this.state.page*this.state.show_data)+1} - {(this.state.page*this.state.show_data)} Of {count_data}
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
										<select id="paging" name="paging" class="form-control col-lg-2" onChange={this.changeShowData.bind(this)}>
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


