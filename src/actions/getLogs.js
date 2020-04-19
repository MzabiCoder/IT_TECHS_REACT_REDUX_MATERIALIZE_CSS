import { GET_LOGS, ADD_LOG, DEL_LOG, SET_LOADING,SET_ERRORS,SET_CURRENT,SEARCH_LOG,CLEAR_CURRENT,UPDATE_LOG } from './types'
import axios from 'axios'

export const setLoading = ()=> {
    return {
         typ:SET_LOADING
     }
}
export const addLog = log =>async dispatch=> {
    const config = {
        headers : {
            'Content-Type':'application/json'
        }
    } 
    try {  
       const res=await axios.post('/logs',log,config) 
        dispatch({
            type: ADD_LOG,
            payload:res.data
        })
    } catch (error) {
        dispatch({
            type: SET_ERRORS,
            payload:error.response.data
        })
    }
}

export const getLog = () => async dispatch => {
    try {
        setLoading()
      const res=await axios.get('/logs')
         dispatch({
             type: GET_LOGS,
             payload:res.data
         })
         

     } catch (error) {
         dispatch({
             type: SET_ERRORS,
             payload:error.response.data
         })
         
     }
}

export const delLog = id => async dispatch => {
    try {
        setLoading()
       await axios.delete(`/logs/${id}`)
        dispatch({
            type: DEL_LOG,
            payload:id
        })
    } catch (error) {
        dispatch({
            type: SET_ERRORS,
            payload:error.response.data
        })
    }
}

export const setCurrent = log => {
    return {
        type: SET_CURRENT,
        payload:log
   }
}

export const clearCurrent = () => {
    return {
        type: CLEAR_CURRENT,
      
   }
}

export const updateLog = log => async dispatch => {
    try {
        setLoading()
        const res = await fetch(`/logs/${log.id}`, {
            method: 'PUT',
            body: JSON.stringify(log),
            headers: {
                'Content-Type':'application/json'
            }
        })
        const data=res.json()
        dispatch({
            type: UPDATE_LOG,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: SET_ERRORS,
            payload:error.response.data
        }) 
    }
}

export const searchLogs = text => async dispatch => {
    
    try {
        setLoading()
        const res = await axios.get(`/logs?q=${text}`)
        dispatch({
            type: SEARCH_LOG,
            payload:res.data
        })
    } catch (error) {
        dispatch({
            type: SET_ERRORS,
            payload:error.response.data
        }) 
    }
}
