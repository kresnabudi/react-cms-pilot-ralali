import axios from "axios";
import queryString from 'query-string'

export function fetchData(payload) {
  return function(dispatch) {
    dispatch({type: "COUNT_ALL_ITEM"});
    console.log(queryString.stringify(payload))
    axios.get("https://dev.ralali.com:1026/api/v1/products/count/item?"+queryString.stringify(payload))
      .then((response) => {
        dispatch({type: "COUNT_ALL_ITEM_FULFILLED", payload: response.data, status: response.status})
      })
      .catch((err) => {
        dispatch({type: "COUNT_ALL_ITEM_REJECTED", payload: err, status: response.status})
      })
  }
}