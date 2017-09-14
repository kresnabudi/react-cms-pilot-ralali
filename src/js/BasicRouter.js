import React from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect,
  withRouter
} from 'react-router-dom'
import PrivateRoute 	from "./util/PrivateRoute";

import Layout 				from "./pages/layout/Layout";
import Dashboard 			from "./pages/dashboard/Dashboard";
import AllSeller 			from "./pages/seller/AllSeller";
import SuperSeller 			from "./pages/seller/SuperSeller";
import Buyer 				from "./pages/buyer/Buyer";
import AllOrder 			from "./pages/order/AllOrder";
import Settlement 			from "./pages/order/Settlement";
import SettlementLog		from "./pages/order/SettlementLog";
import OfflineOrder			from "./pages/offline_order/OfflineOrder";
import UploadOfflineOrder	from "./pages/offline_order/UploadOfflineOrder";

// static page
import NotFound				from "./pages/NotFound";
import Login				from "./pages/Login";
import Logout				from "./pages/Logout";

import AuthorizedComponent from "./util/AuthorizedComponent"


export default class BasicRouter extends React.Component {
	getComponent(componentName){
		switch(componentName) {
		    case 'Dashboard':
		        return Dashboard
		        break;
		    case 'AllSeller':
		        return AllSeller
		        break;
		    case 'SuperSeller':
		        return SuperSeller
		        break;
		    case 'Buyer':
		        return Buyer
		        break;
		    case 'AllOrder':
		        return AllOrder
		        break;
		    case 'Settlement':
		        return Settlement
		        break;
		    case 'SettlementLog':
		        return SettlementLog
		        break;
		    case 'OfflineOrder':
		        return OfflineOrder
		        break;
		    case 'UploadOfflineOrder':
		        return UploadOfflineOrder
		        break;

		}
	}
	render() {
		let i=1
		if(AuthorizedComponent.akses_komponen!==undefined){
			const pagingRoute = AuthorizedComponent.akses_komponen.page.map(routeDetail => 
				<PrivateRoute key={i++} path={routeDetail.path} component={this.getComponent(routeDetail.name)}/>
		  	)
		  	return (
			    <Router>
	  				<Layout >
						<Switch>
							<Route exact path='/login' 					component={Login}/>
							<Route exact path='/logout' 				component={Logout}/>
							{pagingRoute}
							<PrivateRoute component={NotFound}/>
						</Switch>
		    		</Layout >
			    </Router>
		  	);	
		}else{
			return (
			    <Router>
	  				<Layout >
						<Switch>
							<Route exact path='/login' 					component={Login}/>
							<Route exact path='/logout' 				component={Logout}/>
							<PrivateRoute component={NotFound}/>
						</Switch>
		    		</Layout >
			    </Router>
		  	);
		}
		
  	}
};