export default function reducer(state = {
  data: {},
  fetching: false,
  fetched: false,
  authorized: false,
  status: 0,
  error: null,
}, action) {
  switch (action.type) {
    case "COUNT_ALL_CUSTOMER":
      {
        return {
          ...state,
          fetching: true
        }
      }
    case "COUNT_ALL_CUSTOMER_REJECTED":
      {
        return {
          ...state,
          fetching: false,
          error: action.payload,
          data: action.payload,
          status: action.status
        }
      }
    case "COUNT_ALL_CUSTOMER_FULFILLED":
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