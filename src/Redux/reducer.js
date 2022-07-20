import {GET_USER_LOADING , GET_USER_ERROR , GET_USER_SUCCESS} from './actionTypes'

const initialState = {
    users:{
        loading: false,
        error: false,
        data: []
    }
}

export const reducer = (state = initialState, action) =>{
   switch (action.type) {
    case GET_USER_LOADING:
        return{
            ...state,
            users:{
                ...state.users,
                loading: true
            }
        }
        
    case GET_USER_ERROR:
        return{
            ...state,
            users:{
                ...state.users,
                error: true,
                loading: false
            }
        }

    case GET_USER_SUCCESS:
        return{
            ...state,
            users:{
                ...state.users,
                data: action.payload,
                loading: false
            }
        }
    default:
        return {...state}
   }
}