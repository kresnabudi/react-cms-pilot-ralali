import { combineReducers } from "redux"

import globalReducer from "./globalReducer.js"
import authReducer from "./authReducer"
import aksesUserReducer from "./aksesUserReducer"

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
  	
	globalReducer,
	authReducer,
	aksesUserReducer,
})
