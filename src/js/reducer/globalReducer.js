import Immutable from 'immutable'


const reducer = (state = Immutable.List(), action) => {
    switch (action.type) {
        case 'FETCH':
            return Object.assign({}, state, {
                [action.name] : {
                    data: action.payload.data,
                    error: action.payload.data ? action.payload.data : null
                    
                }
            })
            break;
    
        default:
        return state
            break;
    }
  }

export default reducer