import axios from "axios";
import queryString from 'query-string'

export function fetchDataSeller(jembut) {
  console.log(jembut)
  let queryParam = {}
  queryParam.limit = jembut.show_data
  queryParam.offset = (jembut.show_data * jembut.page) - 1

  return function(dispatch) {
    dispatch({type: "FETCH_DATA"});
    axios.get("https://dev.ralali.com:1025/api/v1/vendor/list?"+queryString.stringify(queryParam))
      .then((response) => {
        dispatch({type: "FETCH_DATA_FULFILLED", payload: response.data})
      })
      .catch((err) => {
        dispatch({type: "FETCH_DATA_REJECTED", payload: err})
      })
  }
}