import axios from "axios";
import { apiCallBegan } from '../genApiAction'


const api = store => next => async action => {
    if(action.type  !== apiCallBegan.type){
        return next(action)
    }

    const {url, method, data, onSuccess, onFailed, onStart, onError} = action.payload

    try {
        store.dispatch({type: onStart, payload:{}})
       const response = await axios.request({
            baseURL: 'http://localhost:3000/api',
            url,
            method,
            data
        }) 
        
        store.dispatch({type: onSuccess, payload: response.data})
    } catch (error) {
        store.dispatch({type: onFailed})
        store.dispatch({type: onError, payload: {error: error.message}})
    }
}

export default api;