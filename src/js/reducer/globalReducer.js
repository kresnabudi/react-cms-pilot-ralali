import Immutable from 'immutable'

const names = [
    {name: 'GetAllSeller', data : {}},
    {name: 'GetAllStatusSeller', data:[]},
    {name: 'CountAverageCompletionSeller', data:{}}
]

function initState(){
    var state = {}
    names.map((value,index)=> {
        state[value.name] = {
            data: value.data,
            
            fetching: false,
            fetched: false,
            authorized: false,
            status: 0,
            error: null,
            query: null
        }
    })

    return state
}

const reducer = (state = initState(), action) => {
    switch (action.type) {
        case 'FETCH':
            return Object.assign({}, state, {
                [action.name] : {
                    fetching: true,
                }
            })
            break;
        case 'FETCH_SUCCESS':
            return Object.assign({}, state, {
                [action.name] : {
                    fetching: false,
                    fetched: true,
                    data: action.payload.data,
                    query: action.query
                }
            })
            break;
    
        default:
        return state
            break;
    }
  }

export default reducer