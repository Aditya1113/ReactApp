import React, { useContext } from 'react'
import { userContext } from './CompA'
import CompD from './CompD'

export default function CompC() {

    const user = useContext(userContext)

  return (
    <div>
        <h2> Hello {user} again!</h2>
        <CompD/>
    </div>
  )
}
