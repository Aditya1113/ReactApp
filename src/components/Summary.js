import React from "react";
import Button from "./Button";

export default function Summary({ index, name, promoteName }) {
  return (
    <>
      <td>{index}</td>
      <td>{name}</td>
      <td>
        {/* <button onClick={()=>promoteName(name)} className="btn btn-sm btn-success">Promote</button> */}
        <Button
          theme="success"
          text="promote"
          function={() => promoteName(name)}
        />

        <Button
          theme="primary"
          text="Hello"
          function={() => promoteName(name)}
        />

        <Button/>
      </td>
    </>
  );
}
