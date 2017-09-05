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


export default class BasicRouter extends React.Component {
	render() {
		// console.log('jembat',React)
	  	return (
		    <Router>
  				<Layout >
					<Switch>
						<Route exact path='/login' 					component={Login}/>
						<Route exact path='/logout' 				component={Logout}/>
						<PrivateRoute exact path='/' 				component={Dashboard}/>
						<PrivateRoute path='/dashboard' 			component={Dashboard}/>
						<PrivateRoute path='/seller/all' 			component={AllSeller}/>
						<PrivateRoute path='/seller/super' 			component={SuperSeller}/>
						<PrivateRoute path='/buyer' 				component={Buyer}/>
						<PrivateRoute path='/order/all' 			component={AllOrder}/>
						<PrivateRoute path='/order/settlement' 		component={Settlement}/>
						<PrivateRoute path='/order/settlementlog' 	component={SettlementLog}/>
						<PrivateRoute path='/offline-order/all' 	component={OfflineOrder}/>
						<PrivateRoute path='/offline-order/upload' 	component={UploadOfflineOrder}/>
						<PrivateRoute component={NotFound}/>
					</Switch>
	    		</Layout >
		    </Router>
	  	);
  	}
};