export default function reducer(state = {
  data: {},
  fetching: false,
  fetched: false,
  authorized: false,
  status: 0,
  component_identity:'',
  error: null,
}, action) {
  switch (action.type) {
    case "FETCH_DATA":
      {
        return {
          ...state,
          fetching: true
        }
      }
    case "FETCH_DATA_REJECTED":
      {
        return {
          ...state,
          fetching: false,
          error: action.payload,
          data: action.payload,
          status: action.status,
          component_identity: action.component_identity
        }
      }
    case "FETCH_DATA_FULFILLED":
      {
        return {
          ...state,
          fetching: false,
          fetched: true,
          data: action.payload,
          status: action.status,
          component_identity: action.component_identity
        }
      }
  }
  return state
}