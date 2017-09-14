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
    dispatch({type: "ACTION CALL DATA SELLER"});
    axios.get("https://dev.ralali.com:1025/api/v1/vendor/list?"+queryString.stringify(queryParam))
      .then((response) => {
        dispatch({type: "ACTION_CALL_FULFILLED", name: 'GetAllSeller', payload: response, query: queryParam})
      })
      .catch((err) => {
        dispatch({type: "ACTION_CALL_REJECTED", name: 'GetAllSeller', payload: err, status: err})      
      })
  }
}

export function getStatusSeller() {
  return function(dispatch) {
    dispatch({type: "ACTION_CALL"});
    axios.get("https://dev.ralali.com:1025/api/v1/vendor/status_list")
      .then((response) => {
        dispatch({type: "ACTION_CALL_FULFILLED", name: 'GetAllStatusSeller', payload: response, status: response})
      })
      .catch((err) => {
        dispatch({type: "ACTION_CALL_REJECTED", name: 'GetAllStatusSeller', payload: err, status: err})
        
      })
  }
}

export function getAverageCompletionSeller() {
  return function(dispatch) {
    dispatch({type: "ACTION_CALL"});
    axios.get("https://dev.ralali.com:1025/api/v1/vendor/average-completion")
      .then((response) => {
        dispatch({type: "ACTION_CALL_FULFILLED", name: 'CountAverageCompletionSeller', payload: response, status: response})
      })
      .catch((err) => {
        dispatch({type: "ACTION_CALL_REJECTED", name: 'CountAverageCompletionSeller', payload: err, status: err})
      })
  }
}


export function getCountSellerByStatus(payload,identifier) {
  return function(dispatch) {
    dispatch({type: "ACTION_CALL"});
    console.log(queryString.stringify(payload))
    axios.get("https://dev.ralali.com:1025/api/v1/vendor/status/count/vendor_status?"+queryString.stringify(payload))
      .then((response) => {
        dispatch({type:"ACTION_CALL_FULFILLED", name:identifier, payload: response, status: response})
      })
      .catch((err) => {
        dispatch({type: "ACTION_CALL_REJECTED", name: identifier, payload: err, status: err})
      })
  }
}