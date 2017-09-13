import Immutable from 'immutable'

const names = [
    {name: 'GetAllSeller', data : {}},
    {name: 'GetAllStatusSeller', data:[]},
    {name: 'CountAverageCompletionSeller', data:{}},
    {name: 'CountNeedApprovalSeller', data:{}},
    {name: 'CountApprovedSeller', data:{}},
    {name: 'CountAllSeller', data:{}},
    {name: 'CountRejectedSeller', data:{}},
    
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
            return { ...state,
                [action.name] : {
                    fetching: true,
                }
            }
            break;
        case 'FETCH_SUCCESS':
            return { ...state,
                [action.name] : {
                    status: action.response ? action.response.status : null,
                    fetching: false,
                    fetched: true,
                    data: action.payload.data,
                    query: action.query
                }
            }
            break;
        case 'FETCH_REJECTED':
        return { ...state,
            [action.name] : {
                fetching: false,
                error: action.payload,
                data: action.payload,
                status: action.status,
                query: action.query
            }
        }
        break;
    
        default:
        return state
            break;
    }
  }

export default reducer