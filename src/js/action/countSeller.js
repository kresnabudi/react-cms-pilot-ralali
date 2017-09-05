import axios from "axios";
import queryString from 'query-string'

export function fetchData(payload,identifier) {
  return function(dispatch) {
    dispatch({type: identifier});
    console.log(queryString.stringify(payload))
    axios.get("https://dev.ralali.com:1025/api/v1/vendor/status/count/vendor_status?"+queryString.stringify(payload))
      .then((response) => {
        dispatch({type: identifier+"_FULFILLED", payload: response.data, status: response.status})
      })
      .catch((err) => {
        dispatch({type: identifier+"_REJECTED", payload: err, status: response.status})
      })
  }
}