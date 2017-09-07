import axios from "axios";
import queryString from 'query-string'

export function fetchDataSeller(jembut) {
  console.log(jembut)
  let queryParam = {}
  queryParam.limit = jembut.show_data

  queryParam.offset = (jembut.page<=1)?jembut.page-1:(jembut.page*jembut.show_data)-jembut.show_data
  queryParam.sort = 1
  console.log(queryString.stringify(queryParam))
  return function(dispatch) {
    dispatch({type: "GET_ALL_SELLER"});
    axios.get("https://dev.ralali.com:1025/api/v1/vendor/list?"+queryString.stringify(queryParam))
      .then((response) => {
        dispatch({type: "GET_ALL_SELLER_FULFILLED", payload: response.data})
      })
      .catch((err) => {
        dispatch({type: "GET_ALL_SELLER_REJECTED", payload: err})
      })
  }
}

export function getStatusSeller() {
  return function(dispatch) {
    dispatch({type: "GET_ALL_STATUS_SELLER"});
    axios.get("https://dev.ralali.com:1025/api/v1/vendor/status_list")
      .then((response) => {
        dispatch({type: "GET_ALL_STATUS_SELLER_FULFILLED", payload: response.data, status: response.status})
      })
      .catch((err) => {
        dispatch({type: "GET_ALL_STATUS_SELLER_REJECTED", payload: err, status: response.status})
      })
  }
}
