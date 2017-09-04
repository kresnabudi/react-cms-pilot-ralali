export default function reducer(state = {
  data: {},
  fetching: false,
  fetched: false,
  authorized: false,
  error: null,
}, action) {
  switch (action.type) {
    case "SEND_AUTH_DATA":
      {
        return {
          ...state,
          fetching: true
        }
      }
    case "SEND_AUTH_DATA_REJECTED":
      {
        return {
          ...state,
          fetching: false,
          error: action.payload
        }
      }
    case "SEND_AUTH_DATA_FULFILLED":
      {
        return {
          ...state,
          fetching: false,
          fetched: true,
          data: action.payload,
        }
      }
  }
  return state
}