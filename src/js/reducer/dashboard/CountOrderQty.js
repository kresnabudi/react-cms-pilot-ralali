export default function reducer(state = {
  data: {},
  fetching: false,
  fetched: false,
  authorized: false,
  status: 0,
  error: null,
}, action) {
  switch (action.type) {
    case "COUNT_ORDER_QTY":
      {
        return {
          ...state,
          fetching: true
        }
      }
    case "COUNT_ORDER_QTY_REJECTED":
      {
        return {
          ...state,
          fetching: false,
          error: action.payload,
          data: action.payload,
          status: action.status
        }
      }
    case "COUNT_ORDER_QTY_FULFILLED":
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