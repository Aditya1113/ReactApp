import React, { createContext, useState } from 'react'
import CompB from './CompB'


export const userContext = createContext()

export default function CompA() {

    const [user,setUser] = useState("Peter PARKER")
    

  return (
    <userContext.Provider value={[user,setUser]} >
        <h1>Hello</h1>
        <CompB/>
    </userContext.Provider>
    
  )
}
