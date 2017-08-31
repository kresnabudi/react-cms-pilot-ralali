import { combineReducers } from "redux"

import countAllOrder from "./countAllOrderReducer"
import generic from "./genericReducer"

export default combineReducers({
  countAllOrder,
  genericReducer
})
