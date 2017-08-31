export default function reducer(state = {
  data: {},
  fetching: false,
  fetched: false,
  authorized: false,
  error: null,
}, action) {
  switch (action.type) {
    case "FETCH_COUNT_ALL_ORDER":
      {
        return {
          ...state,
          fetching: true
        }
      }
    case "FETCH_COUNT_ALL_ORDER_REJECTED":
      {
        return {
          ...state,
          fetching: false,
          error: action.payload
        }
      }
    case "FETCH_COUNT_ALL_ORDER_FULFILLED":
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