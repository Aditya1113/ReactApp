import React from 'react'

export default function Button(props) {
  return (
    <div>
        <button
        className={`btn btn-sm btn-${props.theme}`}
        >
        {props.text}

        </button>
    </div>
  );
  }

    //deafult props
  Button.defaultProps = {
    
    theme: "danger",
    text:"default Button"

}
