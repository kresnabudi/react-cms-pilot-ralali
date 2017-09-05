import axios from "axios";
import queryString from 'query-string'

export function fetchData(payload,identifier) {
  return function(dispatch) {
    dispatch({type: identifier});

    axios.get("https://dev.ralali.com:1027/api/v1/orders/range?"+queryString.stringify(payload))
      .then((response) => {
        dispatch({type: identifier+"_FULFILLED", payload: response.data, status: response.status})
      })
      .catch((err) => {
        dispatch({type: identifier+"_REJECTED", payload: err, status: response.status})
      })
  }
}