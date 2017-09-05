import React from "react";
import { NavLink, Link } from "react-router-dom"


export default class Header extends React.Component {
	render() {
		return (
			<header id="header" >
				<div class="headerbar">
					
					<div class="headerbar-left">
						<ul class="header-nav header-nav-options">
							<li class="header-nav-brand" >
								<div class="brand-holder">
									<a href="/">
										<img src="./assets/backoffice-ralali-logo.svg" />
									</a>
									<br/>
									ralali backoffice v2.2.1
								</div>
							</li>
							<li>
								<a class="btn btn-icon-toggle menubar-toggle" data-toggle="menubar" href="javascript:void(0);">
									<i class="fa fa-bars"></i>
								</a>
							</li>
						</ul>
					</div>

					<div class="headerbar-right">
						<ul class="header-nav header-nav-profile">
							<li class="dropdown">
								<a href="javascript:void(0);" class="dropdown-toggle ink-reaction" data-toggle="dropdown">
									<img src="../../assets/img/avatar1.jpg?1403934956" alt="" />
									<span class="profile-info">
										Daniel Johnson
										<small>Administrator</small>
									</span>
								</a>
								<ul class="dropdown-menu animation-dock">
									<li class="dropdown-header">Config</li>
									<li>
										<Link to="dashboard">
											My Profile
										</Link>
									</li>
									<li>
										<Link to="dashboard">
											Change Password
										</Link>
									</li>
									<li class="divider"></li>
									<li>
										<Link to="logout">
											<i class="fa fa-fw fa-power-off text-danger"></i> Logout
										</Link>
									</li>
								</ul>
							</li>
						</ul>
						<ul class="header-nav header-nav-options">
							
						</ul>
					</div>
				</div>
			</header>
			
		);
	}
}