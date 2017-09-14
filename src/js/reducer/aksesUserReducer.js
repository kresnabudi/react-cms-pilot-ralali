export default function reducer(state = {
  data: {},
  fetching: false,
  fetched: false,
  authorized: false,
  error: null,
}, action) {
  switch (action.type) {
    case "GET_AKSES_USER":
      {
        return {
          ...state,
          fetching: true
        }
      }
    case "GET_AKSES_USER_REJECTED":
      {
        return {
          ...state,
          fetching: false,
          error: action.payload
        }
      }
    case "GET_AKSES_USER_FULFILLED":
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