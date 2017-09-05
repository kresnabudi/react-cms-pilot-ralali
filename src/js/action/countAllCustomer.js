import axios from "axios";
import queryString from 'query-string'

export function fetchData(payload) {
  return function(dispatch) {
    dispatch({type: "COUNT_ALL_CUSTOMER"});
    console.log(queryString.stringify(payload))
    axios.get("https://dev.ralali.com:1025/api/v1/user/count/customer?"+queryString.stringify(payload))
      .then((response) => {
        dispatch({type: "COUNT_ALL_CUSTOMER_FULFILLED", payload: response.data, status: response.status})
      })
      .catch((err) => {
        dispatch({type: "COUNT_ALL_CUSTOMER_REJECTED", payload: err, status: response.status})
      })
  }
}