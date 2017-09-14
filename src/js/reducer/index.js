import { combineReducers } from "redux"

import authReducer from "./authReducer"
import globalReducer from "./globalReducer.js"


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
  	
	authReducer,
	globalReducer
})
