import React, { useState } from 'react'

export default function Counter() {

    const [count, setCount]= useState(0) 
    
    // console.log('Component rendered')

    const incrementCount=()=>{                                                              
        // setCount(count+1)
        setCount(count=>count+1)
    }

    const incrementBy5 =()=>{
        for(let i =0;i<5;i++){
            // setCount(count+1)
            setCount(prevCount => prevCount+1)
            console.log(count)
        }
    }
  return (
    <div>
       <h1> Count : {count}</h1>
       <button onClick={incrementCount}>Increment</button>
      
       &nbsp;
        {/* // inline method of calling function */}
       <button onClick={()=>setCount(count-1)}>Decrement</button>
       &nbsp;
       <button onClick={incrementBy5}>IncrementBy5</button>
        


    </div>
  )
}
