import React from 'react'

export default function Person(props) {

    let {email,gender,fullname} = props.names
  return (
    <div>
        <hr/>
        <h2>{email},{gender},{fullname}</h2>
        <button className='btn btn-sm btn-primary'>HEllo</button>
    </div>
  )
}
