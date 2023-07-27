import axios from "axios"
import { FETCH_USER_FAILURE, FETCH_USER_REQUEST, FETCH_USER_SUCCESS } from "./UserActionType"


export const fetchUserRequest= ()=>{
    return {
        type : FETCH_USER_REQUEST,
    }
}


// connected to api : getting the api data

export const fetchUserSuccess= (apiData)=>{
    return {
        type : FETCH_USER_SUCCESS,
        payload : apiData
    }
}

export const fetchUserFailure= (error)=>{
    return {
        type : FETCH_USER_FAILURE,
        payload:error
    }
}

//Thunk Middleware

export const fetchUsers = ()=>{
    //returning a function instead of an action object. This is called thunk middleware
    return (dispatch)=>{

        //make the api call

        dispatch(fetchUserRequest)

        axios.get("https://jsonplaceholder.typicode.com/comments")
        .then(response =>{
            dispatch(fetchUserSuccess(response.data))
        })
        .catch(error=>{
            dispatch(fetchUserFailure(error.message))
        })
    }

}