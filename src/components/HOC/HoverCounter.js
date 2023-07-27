import React, { useState } from 'react'
import HOCDemo from './HOCDemo'

function HoverCounter(props) {
 
  return (
    <div>
    <p>{props.info}</p>
    <h1 onMouseOver={props.incrementCount}> Count : {props.count}</h1>
    </div>
  
  )
}


export default HOCDemo(HoverCounter)