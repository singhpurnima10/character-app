import { ADD_USER_ASYNC } from "./constant";


export function addUserAsync(payload) {
    console.log('action dispatched', payload);
    return{
        type: ADD_USER_ASYNC,
        payload
    }
        
};

