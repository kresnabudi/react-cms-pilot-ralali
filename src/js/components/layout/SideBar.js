import React from "react";
import { NavLink, Link } from "react-router-dom"

export default class SideBar extends React.Component {
	constructor() {
		super()
		this.state = {
			yearsNow: (new Date()).getFullYear(),
			content : "<div></div>"
		}
  	}


  	componentWillMount(){
  		const { dataAkses } = this.props
  		const linknya = document.getElementsByClassName("linkmenu")
  		
  		console.log('linknya.SideBar',linknya)
  		console.log('componentWillMount.SideBar',this.props)
  	}
  	render() {
  		// const contentData = this.props.contenRender
  		const { contenRender } = this.props
	    return (
	      	<div id="base">
	      		<div class="offcanvas">
				</div>

				{contenRender}


				<div id="menubar" class="">
					<div class="menubar-scroll-panel">
						<ul id="main-menu" class="gui-controls">
							<li class="linkmenu">
								<NavLink to="dashboard">
									<div class="gui-icon"><i class="md md-dashboard"></i></div>
									<span class="title">Dashboard</span>
								</NavLink>
							</li>
							<li class="gui-folder">
								<a>
									<div class="gui-icon"><i class="md md-store"></i></div>
									<span class="title">Seller</span>
								</a>
								<ul>
									<li class="linkmenu">
										<NavLink to="seller/all">
											<span class="title">All Seller</span>
										</NavLink>
									</li>
									<li class="linkmenu">
										<NavLink to="seller/super">
											<span class="title">Super Seller</span>
										</NavLink>
									</li>
								</ul>
							</li>
							<li>
								<NavLink to="buyer">
									<div class="gui-icon"><i class="md md-accessibility"></i></div>
									<span class="title">Buyer</span>
								</NavLink>
							</li>
							<li class="gui-folder">
								<a>
									<div class="gui-icon"><i class="md md-shopping-basket"></i></div>
									<span class="title">All Order</span>
								</a>
								<ul>
									<li class="linkmenu">
										<NavLink to="order/all">
											<span class="title">All Order</span>
										</NavLink>
									</li>
									<li class="linkmenu">
										<NavLink to="order/settlement">
											<span class="title">Settlement</span>
										</NavLink>
									</li>
									<li class="linkmenu">
										<NavLink to="order/settlementlog">
											<span class="title">Settlement Log</span>
										</NavLink>
									</li>
								</ul>
							</li>
							<li class="gui-folder">
								<a>
									<div class="gui-icon"><i class="md md-shopping-cart"></i></div>
									<span class="title">Offline Order</span>
								</a>
								<ul>
									<li class="linkmenu">
										<NavLink to="offline-order/all">
											<span class="title">Data</span>
										</NavLink>
									</li>
									<li class="linkmenu">
										<NavLink to="offline-order/upload">
											<span class="title">Upload Excel</span>
										</NavLink>
									</li>
								</ul>
							</li>
							<li class="gui-folder">
								<a>
									<div class="gui-icon"><i class="md md-settings"></i></div>
									<span class="title">Setting</span>
								</a>
								<ul>
									<li><a><span class="title">User Setting</span></a></li>
									<li><a><span class="title">Setting Mbuh</span></a></li>
								</ul>
							</li>
							
						</ul>
						<div class="menubar-foot-panel">
							<small class="no-linebreak hidden-folded">
								<span class="opacity-75">Updated At {this.state.yearsNow} By </span> 
								<a href="https://www.instagram.com/lukmanlukmin/"><strong>RalaliDev</strong></a> 
							</small>
							<small class="no-linebreak hidden-folded">
								<span class="opacity-75">Template Copyleft </span>
								&copy; <a href="https://themeforest.net/user/codecovers"><strong>CodeCovers</strong></a>
							</small>
						</div>
					</div>
				</div>

				<div class="offcanvas">
					<div id="offcanvas-search" class="offcanvas-pane width-8">
						
					</div>

					<div id="offcanvas-chat" class="offcanvas-pane style-default-light width-12">
						
					</div>
				</div>	
			</div>
	    );
  	}
}
