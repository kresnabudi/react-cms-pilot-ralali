import { combineReducers } from "redux"

import authReducer from "./authReducer"
<<<<<<< HEAD
import globalReducer from "./globalReducer.js"

=======
import aksesUserReducer from "./aksesUserReducer"
>>>>>>> 78eb06d56865184920ad935657604f51d4b3e1de

import CountOrder from "./dashboard/CountOrder"
import CountOrderQty from "./dashboard/CountOrderQty"
import CountOrderNetWorth from "./dashboard/CountOrderNetWorth"
import CountAllItem from "./dashboard/CountAllItem"
import CountAllCustomer from "./dashboard/CountAllCustomer"
import CountAllBrand from "./dashboard/CountAllBrand"

export default combineReducers({
	CountOrder,
	CountOrderQty,
	CountOrderNetWorth,
	CountAllItem,
	CountAllCustomer,
	CountAllBrand,
  	
<<<<<<< HEAD
	authReducer,
	globalReducer
=======
  	GetAllSeller,
  	GetAllStatusSeller,
	CountAllSeller,
	CountApprovedSeller,
	CountAverageCompletionSeller,
	CountNeedApprovalSeller,
	CountRejectedSeller,
	CountTodaySeller,
  	
  	authReducer,
  	aksesUserReducer
>>>>>>> 78eb06d56865184920ad935657604f51d4b3e1de
})
