import axios from "axios";
import queryString from 'query-string'

export function fetchData(payload) {
  return function(dispatch) {
    dispatch({type: "COUNT_ALL_BRAND"});
    console.log(queryString.stringify(payload))
    axios.get("https://dev.ralali.com:1026/api/v1/brands/count?"+queryString.stringify(payload))
      .then((response) => {
        dispatch({type: "COUNT_ALL_BRAND_FULFILLED", payload: response.data, status: response.status})
      })
      .catch((err) => {
        dispatch({type: "COUNT_ALL_BRAND_REJECTED", payload: err, status: response.status})
      })
  }
}