import axios from "axios";
import queryString from 'query-string'

export function fetchDataSeller(jembut) {
  console.log(jembut)
  let queryParam = {}
  queryParam.limit = jembut.show_data
  queryParam.offset = (jembut.page===1)?(jembut.page-1):((jembut.page*jembut.show_data)-1)
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