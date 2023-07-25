import React, { useState } from "react";
import VisibilityControl from "../VisibilityControl";

export default function TodoMain() {
  const [username, setUsername] = useState("Peter");

  const [todoItems, setTodoItems] = useState([
    { action: "Buy Flowers", done: false },
    { action: "Collect Tickets", done: true },
    { action: "Walk the dog", done: false },
    { action: "Call John", done: true },
  ]);

  const [newTodo, setNewTodo] = useState("");

  const [showCompleted,setShowCompleted] = useState(false)

  //   console.log(todoItems)

  const toggleTodo = (item) => {
    //item =     { action: "Buy Flowers", done: false }

    const newtodoItems = todoItems.map((todo) =>
      todo.action === item.action // checking the condition if the clicked todo description matches with the todoitemsarray
        ? { ...todo, done: !todo.done }
        : todo
    );

    setTodoItems(newtodoItems);

    //todo =    { action: "Buy Flowers", done: false }
    //todo =  { action: "Collect Tickets", done: true },
    //buy flowers ===buyflowers
  };
  const todoTableRows = (doneValue) => {

    //doneValue = false
    
    //doneValue = true 
    return todoItems.filter(item=>item.done==doneValue).map((item) => (
      <tr className="text-center">
        <td>{item.action}</td>
        <td>
          <input
            type="checkbox"
            checked={item.done}
            onChange={() => toggleTodo(item)}
          />
        </td>
      </tr>
    ));
  };

  const AddTodo = () => {
    const foundTodo = todoItems.find((item) => item.action === newTodo);

    if (foundTodo) {
      alert("Oops Already Exists");
    } else {
      setTodoItems([...todoItems, { action: newTodo, done: false }]);
    }
  };
  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-12">
          <h4 className="bg-primary text-white text-center">
            {username}'s Todo List (
            {
              todoItems.filter((todo) => !todo.done).length // taking the length of done values which are false
            }{" "}
            items to do )
          </h4>
        </div>
      </div>

      <div className="row">
        <div className="col-md-10">
          <input
            type="text"
            className="form-control mb-4"
            onChange={(event) => setNewTodo(event.target.value)}
          />
        </div>
        <div className="col-md-2">
          <button onClick={AddTodo} className="btn btn-sm btn-success">
            Add
          </button>
        </div>
      </div>

      <div className="row">
        <div className="col-md-12">
          <table className="table table-bordered">
            <thead>
              <tr className="text-center">
                <th>Description</th>
                <th>Done</th>
              </tr>
            </thead>
            <tbody>{todoTableRows(false)}</tbody>
          </table>
        </div>
      </div>

      <div className="row">
        <div className="col-md-12">

                <VisibilityControl
                description = "Completed Tasks"
                isChecked = {showCompleted}
                handleClick= {(checked)=> setShowCompleted(checked)}
                />
        </div>
        </div>

        {
            showCompleted ?
            <table className="table table-bordered">
            <thead>
              <tr className="text-center">
                <th>Description</th>
                <th>Done</th>
              </tr>
            </thead>
            <tbody>{todoTableRows(true)}</tbody>
          </table>:null
        }
    </div>
  );
}

//filter returns an array and only takes the true values inside it

// ! changes the boolean value
//true =>false
//false =>true
