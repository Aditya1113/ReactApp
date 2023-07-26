// UseRef refHook

// 1. It creates a mutable object  which will not re-render the components
// 2. It is used to access a DOM element directly



import React, { useEffect, useRef, useState } from 'react'

export default function UseRefDemo() {
    const [myData,setMyData] = useState("")
    // const [count,setCount] = useState(0)

    const count = useRef(10)

    

    console.log("Count Value",count)

    useEffect(()=>{
       count.current = count.current+1 //updating the current property of the count object

         // count=count+1 not possible because count is declared const
         
    })

  return (
    <div className='container mt-5'>
        <input type="text" value = {myData} onChange={(e)=>setMyData(e.target.value)}/>
        <p>The number of times Render : {count.current}</p>

    </div>
  )
}
