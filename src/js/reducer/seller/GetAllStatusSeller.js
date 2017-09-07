export default function reducer(state = {
  data: [],
  fetching: false,
  fetched: false,
  authorized: false,
  status: 0,
  error: null,
}, action) {
  switch (action.type) {
    case "GET_ALL_STATUS_SELLER":
      {
        return {
          ...state,
          fetching: true
        }
      }
    case "GET_ALL_STATUS_SELLER_REJECTED":
      {
        return {
          ...state,
          fetching: false,
          error: action.payload,
          data: action.payload,
          status: action.status
        }
      }
    case "GET_ALL_STATUS_SELLER_FULFILLED":
      {
        return {
          ...state,
          fetching: false,
          fetched: true,
          data: action.payload,
          status: action.status
        }
      }
  }
  return state
}