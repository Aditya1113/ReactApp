//perform side effects in your components

// eg of side effects can be fetching data , directly updating the dom

// useEffect ( accepts two arguments ) second argument is optional

    // Called when

    // 1. When the component Mounts -> 
    // 2. When the component Updates (state is updated)
import React, { useEffect, useState } from 'react'

export default function UseEffectDemo() {

    const [count,setCount] = useState(0)
    const [name,setName] = useState()


    //useEffect called when dependency changes

    useEffect(()=>{
        console.log("UseEffect called")
        document.title = `You clicked ${count} times`
        }
        ,[count])

    //  useEffect called once
     
    //  useEffect(()=>{
    //     fetch('https://jsonplaceholder.typicode.com/posts')
    //     .then(res=>res.json())
    //     .then(res=>console.log(res))
    //  },[]) API CALL
     
     
    // class based components

    //lifecycle methods

    //componentdidMount
    //componentWillUpdate
    //ComponentdidUnmount

  return (
    <div>
        <input type="text" onChange = {(event)=>setName(event.target.value)}/>
         <button onClick={()=>setCount(prevCount=>prevCount+1)}>Click Me!</button>
    </div>
  )
}
