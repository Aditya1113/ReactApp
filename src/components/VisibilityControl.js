import React from 'react'

export default function VisibilityControl(props) {
  return (
    <div>
        <input
        type="checkbox"
        checked={props.isChecked}
        onChange={(event)=>props.handleClick(event.target.checked)}
        />
        <label>Show {props.description}</label>
    </div>
  )
}
