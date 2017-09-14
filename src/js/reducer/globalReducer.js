
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

export default function reducer(state = initState(), action){

    switch (action.type) {
        case 'ACTION_CALL': {
            return {...state, [action.name] : {
                    fetching: true,
                }
            }
        }
        case 'ACTION_CALL_FULFILLED': {
            return {...state, [action.name] : {
                    fetching: false,
                    fetched: true,
                    data: action.payload.data,
                    query: action.query
                }
            }
        }
        case 'ACTION_CALL_REJECTED': {
            return {...state, [action.name] : {
                    fetching: false,
                    error: action.payload,
                    data: action.payload,
                    status: action.status,
                    query: action.query
                }
            }
        }
    }
    return state
}