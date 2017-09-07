import React from "react";
import { connect } from "react-redux"
import queryString from 'query-string'
import moment from 'moment'
import { Link } from "react-router-dom"

import AuthorizedComponent from "../../util/AuthorizedComponent"
import PaginationHelper from "../../util/PaginationHelper"
import { fetchDataSeller,getStatusSeller } from "../../action/BaseSellerAction"

@connect((store) => {
  return {
    dataSeller: store.GetAllSeller.data,
    dataStatus: store.GetAllStatusSeller.data
  };
})
export default class SellerTable extends React.Component {
	constructor() {
		super()
		this.state = {
			page: 1,
			show_data : 10,
			count_data : 0,
			paging: []
		}
		AuthorizedComponent.authComponent(this)
  	}
  	
  	componentWillMount(){
  		let queryParam = queryString.parse(this.props.location.search)
  		this.props.dispatch(fetchDataSeller(this.state))
  		this.props.dispatch(getStatusSeller())
  		this.setState({count_data:this.props.dataSeller.count_all})
  	}

  	
  	changeShowData(e){
  		this.setState({show_data:e.target.value})
		setTimeout(()=>{
			this.props.dispatch(fetchDataSeller(this.state))
		}, 1)
  	}

  	changePaginationState(e){
  		let pageNum
  		if(e.target.innerText==='<--') pageNum=(this.state.page-10>=1)?(this.state.page-10):1
  		else if(e.target.innerText==='-->'){
  			let countPage=Math.ceil(parseInt(this.state.count_data)/parseInt(this.state.show_data))
  			pageNum=(this.state.page+10<=countPage)?(this.state.page+10):countPage
  		}else pageNum=parseInt(e.target.innerText)
  		this.setDefaultPaging(pageNum, true)
  	}

  	setDefaultPaging(pageNumber, reload){
  		let pagePortion=PaginationHelper.generateButtons(pageNumber, Math.ceil(parseInt(this.state.count_data)/parseInt(this.state.show_data)), 2)
  		this.setState({paging: pagePortion, page: pageNumber},()=>{
  			if(reload) this.props.dispatch(fetchDataSeller(this.state))
  		})
  	}

	componentWillReceiveProps(nextProps){
		if (Object.getOwnPropertyNames(nextProps.dataSeller).length > 0){
			this.setState({count_data:nextProps.dataSeller.count_all},()=>{
				this.setDefaultPaging(this.state.page, false)
			})
		}
	}

  	render() {
  		const {dataSeller, dataStatus} = this.props
	  	const mapStatus=dataStatus.reduce((obj, item) => {
			obj[item.vendor_status] = item
			return obj
		}, {})
		const reduceData = (dataSeller.list===undefined)?[]:dataSeller.list.map((seller)=>{
  			let initialVal={}
  			initialVal.id = seller.id
  			initialVal.seller_name = seller.name
  			initialVal.seller_email = seller.email
  			initialVal.status_icon = (seller.status==='A')?'md-verified-user text-success':'md-warning text-warning'
  			initialVal.status_name = mapStatus[seller.status].description
  			initialVal.join_date = moment(seller.created_at, "YYYY-MM-DDTHH:mm:ss.Z").format("DD MMMM YYYY")
  			initialVal.shop_name = (seller.Microsite===null || seller.Microsite.name_shop===null)?'-':seller.Microsite.name_shop
  			initialVal.shop_address = (seller.Microsite===null || seller.Microsite.address===null)?'-':seller.Microsite.address
  			initialVal.microsite_url = (seller.Microsite===null || seller.Microsite.microsite_url===null)?'-':seller.Microsite.microsite_url
  			initialVal.source = seller.source
		  	return initialVal
		});
		let number=(this.state.page<=1)?this.state.page:(this.state.page*this.state.show_data)+1-this.state.show_data
  		const mappedSeller = reduceData.map(seller => 
	  		<tr key={seller.id}>
				<td>{number++}</td>
				<td>
					<strong>{seller.seller_name}</strong>
					<div class="clearfix opacity-90">
						<span class="md-email"></span>&nbsp; <a href={"mailto:"+seller.seller_email} target="_top">{seller.seller_email}</a>
					</div>
					<div class="clearfix opacity-90">
						
						<span class={seller.status_icon}></span>&nbsp; {seller.status_name} - {seller.join_date}
					</div>
				</td>
				<td>
					<strong>{seller.shop_name}</strong>
					<div class="clearfix opacity-90">
						<span class="md-store"></span>&nbsp; {seller.shop_address}
					</div>
					<div class="clearfix opacity-90 text-info">
						<a href={"https://dev.ralali.com/v/"+seller.microsite_url} target="_blank">{(seller.microsite_url).toUpperCase()}</a>
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
					<div class="clearfix opacity-90">
						<span class="md-phonelink"></span>&nbsp; Office Phone
					</div>

				</td>
				<td>Source : {seller.source}</td>
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
  		let btnId=1
	  	const pagingButton = this.state.paging.map(buttonDetail => 
	  		<button key={btnId++} type="button" class={(parseInt(buttonDetail)==this.state.page)?"btn ink-reaction btn-info":"btn ink-reaction btn-default-bright"} onClick={this.changePaginationState.bind(this)}>{buttonDetail}</button>
	  	)
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
									Showing : {(this.state.page<=1)?this.state.page:(this.state.page*this.state.show_data)+1-this.state.show_data} - {number-1} Of {dataSeller.count_all}
								</div>
								<div class="col-lg-4">
									<div class="btn-group">
										{pagingButton}
									</div>
								</div>
								<div class="col-lg-4">
									<div class="tools">
										<select id="paging" name="paging" class="form-control col-lg-2" onChange={this.changeShowData.bind(this)}>
											<option value="10">10</option>
											<option value="25">25</option>
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


