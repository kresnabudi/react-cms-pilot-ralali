import { combineReducers } from "redux"

import countAllOrder from "./countAllOrderReducer"
import genericReducer from "./genericReducer"
import authReducer from "./authReducer"

export default combineReducers({
  countAllOrder,
  genericReducer,
  authReducer
})
