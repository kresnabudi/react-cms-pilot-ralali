import axios from "axios";

export function fetchData() {
  return function(dispatch) {
    dispatch({type: "FETCH_COUNT_ALL_ORDER"});
    
    /* 
      http://rest.learncode.academy is a public test server, so another user's experimentation can break your tests
      If you get console errors due to bad data:
      - change "reacttest" below to any other username
      - post some tweets to http://rest.learncode.academy/api/yourusername/tweets
    */
    axios.get("https://dev.ralali.com:1027/api/v1/orders/range?start_date=2017-08-01%20&end_date=2017-08-31&group=monthly&status=Paid")
      .then((response) => {
        dispatch({type: "FETCH_COUNT_ALL_ORDER_FULFILLED", payload: response.data})
      })
      .catch((err) => {
        dispatch({type: "FETCH_COUNT_ALL_ORDER_REJECTED", payload: err})
      })
  }
}