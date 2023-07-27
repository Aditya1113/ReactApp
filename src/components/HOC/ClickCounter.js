import React, { useState } from 'react'
import HOCDemo from './HOCDemo'

function ClickCounter(props) {

  return (
    <div>
       <p>{props.info}</p>
       <h1> Count : {props.count}</h1>
       <button onClick={props.incrementCount}>Click Me!</button>
        
    </div>
  )
}

export default HOCDemo(ClickCounter)
