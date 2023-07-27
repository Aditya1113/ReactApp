import React from 'react'
import {useDispatch, useSelector } from 'react-redux'
import { buyIceCream } from './IceCreamAction'



/*

useSelector hook => in order to get the properties from the store we are using this hook

useDispacth hook => to get access of the actions we will use this

*/


export default function IceCreamContainer() {

    const numberOfIceCream = useSelector(state=>state.iceCream.numberOfIceCream)

    const dispatch = useDispatch()


  return (
    <div className='container mt-4'>
            <div className='row'>
                <div className='col-md-12'>
                    <h2 className='display-4 text-info'>Number of IceCream :{numberOfIceCream} </h2>
                    <button onClick={()=>dispatch(buyIceCream())} className="btn btn-sm btn-primary">Buy Cake</button>
                </div>
            </div>
    </div>
  )
}

