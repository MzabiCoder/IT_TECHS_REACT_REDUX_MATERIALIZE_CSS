 import {GET_LOGS,ADD_LOG,DEL_LOG,SET_LOADING,SET_ERRORS,UPDATE_LOG,SET_CURRENT,CLEAR_CURRENT,SEARCH_LOG} from '../actions/types'
const Istate = {
    logs:[],
    loading: false,
    current: null,
    error:null
}

export default  (state=Istate,action)=> {
  const { type, payload } = action
    switch (type) {
        case GET_LOGS:
            return {
                ...state,
                logs: payload,
                loading:false
            }
        case SET_LOADING:
            return {
                ...state,
                loading:true
            }
        case SET_ERRORS:
            console.error(payload)
                return {
                    ...state,
                    error:payload
            }
        case ADD_LOG:
            return {
                ...state,
                logs: [...state.logs, payload],
                loading:false
            }
        case DEL_LOG:
            return {
                ...state,
                logs:state.logs.filter(log=>log.id!==payload)
            }
        case SET_CURRENT:
            return {
                ...state,
                current:payload
            }
        case CLEAR_CURRENT:
            return {
                ...state,
                current:null
            }
        case UPDATE_LOG:
            return {
                ...state,
                logs:state.logs.map(log=>log.id===payload.id ? payload:log)
            }
        case SEARCH_LOG:
            return {
                ...state,
                logs: payload,
                loading:false
            }
        default:
            return state
    }
}