import { combineReducers } from "redux"

import genericReducer from "./genericReducer"
import authReducer from "./authReducer"
import aksesUserReducer from "./aksesUserReducer"

import CountOrder from "./dashboard/CountOrder"
import CountOrderQty from "./dashboard/CountOrderQty"
import CountOrderNetWorth from "./dashboard/CountOrderNetWorth"
import CountAllItem from "./dashboard/CountAllItem"
import CountAllCustomer from "./dashboard/CountAllCustomer"
import CountAllBrand from "./dashboard/CountAllBrand"

import GetAllSeller from "./seller/GetAllSeller"
import GetAllStatusSeller from "./seller/GetAllStatusSeller"
import CountAllSeller from "./seller/CountAllSeller"
import CountApprovedSeller from "./seller/CountApprovedSeller"
import CountAverageCompletionSeller from "./seller/CountAverageCompletionSeller"
import CountNeedApprovalSeller from "./seller/CountNeedApprovalSeller"
import CountRejectedSeller from "./seller/CountRejectedSeller"
import CountTodaySeller from "./seller/CountTodaySeller"

export default combineReducers({
	CountOrder,
	CountOrderQty,
	CountOrderNetWorth,
	CountAllItem,
	CountAllCustomer,
	CountAllBrand,
  	
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
})
