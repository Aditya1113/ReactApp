import React, { useEffect, useRef } from 'react'

export default function UseRefDom() {
    const inputref = useRef()

    useEffect(()=>{
        console.log(inputref)  // gives object with current property
        inputref.current.focus()
    })
    
  return (
    <div className='container mt-5'>
        <input type="text" placeholder='type something' ref={inputref}/>

     
    </div>
  )
}
