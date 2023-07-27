const redux = require("redux")

const createStore = redux.createStore


//Action 

const BUY_CAKE = "BUY_CAKE"

//second action

const BUY_CANDLE = "BUY_CANDLE"
//Action Creator 

const buyCake = ()=>{
    return {
        type : BUY_CAKE,

    }
}

const buyCandle = ()=>{
    return {
        type : BUY_CANDLE
    }
}

//State 

const initialQty = {
    numberOfCakes : 20,
    numberOfCandles : 40
}

//Reducer 

/* 
action ={
    type : BUY_CAKE
}

state = {numberOfCakes : 20}

*/

const reducer = (state = initialQty,action ) =>{

        switch(action.type){

                case BUY_CAKE :
                        return{
                            ...state,
                            numberOfCakes : state.numberOfCakes - 1
                        };
                        
                case BUY_CANDLE:
                    return{
                        ...state,
                        numberOfCandles : state.numberOfCandles - 1
                    };

                default :

                return state;

        }

}

const store = createStore(reducer)


console.log("initial state = ",store.getState());

store.subscribe(()=>console.log("Updated State = ",store.getState()));



store.dispatch(buyCandle())
store.dispatch(buyCake())


