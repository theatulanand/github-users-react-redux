import {GET_USER_LOADING , GET_USER_ERROR , GET_USER_SUCCESS} from './actionTypes'

export const getUserLoading = () =>{
    return{
        type: GET_USER_LOADING
    }
}

export const getUserError = () =>{
    return{
        type: GET_USER_ERROR
    }
}

export const getUserSuccess = (payload) =>{
    return{
        type: GET_USER_SUCCESS,
        payload
    }
}