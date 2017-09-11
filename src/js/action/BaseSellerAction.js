import axios from "axios";
import queryString from 'query-string'

export function fetchDataSeller(jembut) {
  console.log(jembut)
  let queryParam = {}
  queryParam.limit = jembut.show_data
  queryParam.offset = (jembut.page<=1)?jembut.page-1:(jembut.page*jembut.show_data)-jembut.show_data
  queryParam.sort = 1
  if(jembut.vendor_status!==undefined) queryParam.vendor_status=jembut.vendor_status
  else delete queryParam.vendor_status
  console.log(queryString.stringify(queryParam))
  return function(dispatch) {
    dispatch({type: "GET_ALL_SELLER"});
    axios.get("https://dev.ralali.com:1025/api/v1/vendor/list?"+queryString.stringify(queryParam))
      .then((response) => {
        dispatch({type: "GET_ALL_SELLER_FULFILLED", payload: response.data, query: queryParam})
      })
      .catch((err) => {
        dispatch({type: "GET_ALL_SELLER_REJECTED", payload: err, query: queryParam})
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

export function getAverageCompletionSeller() {
  return function(dispatch) {
    dispatch({type: "GET_AVERAGE_COMPLETION_SELLER"});
    axios.get("https://dev.ralali.com:1025/api/v1/vendor/average-completion")
      .then((response) => {
        dispatch({type: "GET_AVERAGE_COMPLETION_SELLER_FULFILLED", payload: response.data, status: response.status})
      })
      .catch((err) => {
        dispatch({type: "GET_AVERAGE_COMPLETION_SELLER_REJECTED", payload: err, status: response.status})
      })
  }
}


export function getCountSellerByStatus(payload,identifier) {
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