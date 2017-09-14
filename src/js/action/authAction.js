import axios from "axios";
import queryString from 'query-string'

export function login(jembut) {
  console.log(jembut)
  const config = {
    headers: {
      'x-key': '20160314094255',
      'x-secret': '201619872345923'
    }
  };

  let payload = {
    "email": jembut.email,
    "password": jembut.password
  }

  return function(dispatch) {
    dispatch({type: "SEND_AUTH_DATA"});
    axios.post("https://dev.ralali.com:1025/api/v1/auth/login", payload, config)
      .then((response) => {
        dispatch({type: "SEND_AUTH_DATA_FULFILLED", payload: response.data})
      })
      .catch((err) => {
        console.log(err)
        dispatch({type: "SEND_AUTH_DATA_REJECTED", payload: err})
      })
  }
}

export function getAksesUser(access_token) {
  return function(dispatch) {
    dispatch({type: "GET_AKSES_USER"});
    axios.get("http://localhost:8082/akses.json")
      .then((response) => {
        dispatch({type: "GET_AKSES_USER_FULFILLED", payload: response.data})
      })
      .catch((err) => {
        dispatch({type: "GET_AKSES_USER_REJECTED", payload: err})
      })
  }
}