import { combineReducers } from "redux";
import { CakeReducer } from "./CAKE/CakeReducer";

import { IceCreamReducer } from "./ICECREAM/IceCreamReducer";
import { UserReducer } from "./USER/UserReducer";

export const RootReducer = combineReducers({
    // Add your reducers here.
    cake : CakeReducer,
    iceCream : IceCreamReducer,
    User : UserReducer
})