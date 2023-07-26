import React, { useContext } from 'react'
import { userContext } from './CompA'

export default function CompD() {

    const [user,setUser] = useContext(userContext)

  return (
    <div>
            <h3> Hello {user} from Component D</h3> 

    </div>
  )
}
