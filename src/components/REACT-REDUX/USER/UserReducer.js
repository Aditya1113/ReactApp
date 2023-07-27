// state 


import { FETCH_USER_FAILURE, FETCH_USER_REQUEST, FETCH_USER_SUCCESS } from "./UserActionType";

const initialState = {
    loading : false,
    users : [],
    error : ''
}


// 1. dispatch(fetchUserRequest)

// // action = {
//     type: 'FETCH_USER_REQUEST',
// }


// 2.
//  dispatch(fetchUserSuccess(response.data))

// // action = {
//     type: 'FETCH_USER_SUCCESS',
        // payload:apiDAta(response.data)
// }

//  dispatch(fetchUserFailure(error.message))

// // action = {
//     type: 'FETCH_USER_SUCCESS',
        // payload:error(error.message)
// }


export const UserReducer = (state = initialState,action ) =>{

    switch(action.type){

            case FETCH_USER_REQUEST :
                    return{    
                        ...state,
                        loading : true,
                    };

            case FETCH_USER_SUCCESS:
                return {
                    ...state,
                    loading:false,
                    users:action.payload
                }
            
                case FETCH_USER_FAILURE:
                return {
                    ...state,
                    error:action.payload
                }
                    
            default :
                    
            
            return state;

    }

}
