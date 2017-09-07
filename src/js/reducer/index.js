import { combineReducers } from "redux"

import genericReducer from "./genericReducer"
import authReducer from "./authReducer"

import CountOrder from "./dashboard/CountOrder"
import CountOrderQty from "./dashboard/CountOrderQty"
import CountOrderNetWorth from "./dashboard/CountOrderNetWorth"
import CountCurentSeller from "./dashboard/CountCurentSeller"
import CountTodaySeller from "./dashboard/CountTodaySeller"
import CountApprovedSeller from "./dashboard/CountApprovedSeller"
import CountRejectedSeller from "./dashboard/CountRejectedSeller"
import CountAllItem from "./dashboard/CountAllItem"
import CountAllSeller from "./dashboard/CountAllSeller"
import CountAllCustomer from "./dashboard/CountAllCustomer"
import CountAllBrand from "./dashboard/CountAllBrand"

import GetAllSeller from "./seller/GetAllSeller"
import GetAllStatusSeller from "./seller/GetAllStatusSeller"

export default combineReducers({
	CountOrder,
	CountOrderQty,
	CountOrderNetWorth,
	CountCurentSeller,
	CountTodaySeller,
	CountApprovedSeller,
	CountRejectedSeller,
	CountAllItem,
	CountAllSeller,
	CountAllCustomer,
	CountAllBrand,
  	GetAllSeller,
  	GetAllStatusSeller,
  	authReducer
})
