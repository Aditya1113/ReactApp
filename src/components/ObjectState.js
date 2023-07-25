import React, { useState } from 'react'

export default function ObjectState() {

    const [name,setName] = useState({firstname:'',lastname:''})


    // console.log(name)
  return (
    <div>
    
    <form>
        <p>
            Firstname :
            <input type="text" onChange={(event)=>setName({...name,firstname:event.target.value})}
            
            />
        </p>

        <p>
            Lastname :
            <input type="text" onChange={(event)=>setName({...name,lastname:event.target.value})}
            
            />
        </p>

        <h3>{JSON.stringify(name)}</h3>

        
    </form>

    </div>
  )
}


//setName({...name,firstname:event.target.value})
// I am going to create a replica of name state and only update firstname