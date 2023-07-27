import { BUY_CAKE } from "./CakeActionType";


const initialQty = {
    numberOfCakes : 30,
}



export const CakeReducer = (state = initialQty,action ) =>{

        switch(action.type){

                case BUY_CAKE :
                        return{    
                            numberOfCakes : state.numberOfCakes - 1
                        };
                        
                default :
                        
                
                return state;

        }

}
