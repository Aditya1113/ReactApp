//rfc

import React from "react";

export default function Greet({ name, age, isAdmin }) {
  // props:{
  //     name,
  //     age
  // }
  // props.name = "Mike"

  return (
    // it should always be wrapped within a single wrapper element as react only returns a single element
    <div>
      <h1>
        Hi {name} You are {age} years old Admin : {isAdmin ? "Yes" : "No"}
      </h1>
    </div>
  );
}
