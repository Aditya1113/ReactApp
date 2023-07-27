
import { BUY_ICE_CREAM } from "./IceCreamActionType";


const initialQty = {
    numberOfIceCream : 20,
}



export const IceCreamReducer = (state = initialQty,action ) =>{

        switch(action.type){

                case BUY_ICE_CREAM :
                        return{    
                            numberOfIceCream : state.numberOfIceCream - 1
                        };
                        
                default :
                        
                
                return state;

        }

}
