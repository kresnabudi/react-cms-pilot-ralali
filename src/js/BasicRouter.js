import React from 'react';
import {
  HashRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

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
import NotFound				from "./pages/NotFound";


export default class BasicRouter extends React.Component {
	render() {
	  	return (
			    <Router>
	  				<Layout >
					<Switch>
						<Route exact path='/' 				component={Dashboard}/>
						<Route path='/dashboard' 			component={Dashboard}/>
						<Route path='/seller/all' 			component={AllSeller}/>
						<Route path='/seller/super' 		component={SuperSeller}/>
						<Route path='/buyer' 				component={Buyer}/>
						<Route path='/order/all' 			component={AllOrder}/>
						<Route path='/order/settlement' 	component={Settlement}/>
						<Route path='/order/settlementlog' 	component={SettlementLog}/>
						<Route path='/offline-order/all' 	component={OfflineOrder}/>
						<Route path='/offline-order/upload' component={UploadOfflineOrder}/>
						<Route component={NotFound}/>
					</Switch>
		    		</Layout >
			    </Router>
	  	);
  	}
};