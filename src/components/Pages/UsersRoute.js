import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function UsersRoute() {
  const [users, setUsers] = useState();

  const [showAddForm, setShowAddForm] = useState(false);
  const [showEditForm, setShowEditForm] = useState(false);

  const [record, setRecord] = useState({ name: "", email: "", website: "" });

  const createNewRecord = () => {
    axios
      .post("https://test-api-users.onrender.com/users", record)
      .then(() => {
        alert("data added");
        setShowAddForm(false);
        getPosts();
      })
      .catch((error) => console.log(error));
  };

  const handleChange = (event) => {
    setRecord({ ...record, [event.target.name]: event.target.value });
  };

  const UpdateRecord=()=>{
    axios
    .put(`https://test-api-users.onrender.com/users/${record.id}`, record)
    .then(() => {
      alert("data updated");
      setShowEditForm(false);
      setRecord({})
      getPosts();
    })
    .catch((error) => console.log(error));
  }

  // console.log(record)

  const getPosts = () => {
    axios
      .get("https://test-api-users.onrender.com/users")
      .then((response) => setUsers(response.data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getPosts();
  }, []);

  //json server
  // json-server --watch db.json -p 3002

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-12">
          <h1 className="text-center">List Of Users</h1>
          <button
            className="btn btn-sm btn-primary"
            onClick={() =>setShowAddForm(true)}
          >
            Add New
          </button>
        </div>
      </div>

      {!showAddForm && !showEditForm ? (
        <div className="container mt-4">
          <div className="row">
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Website</th>
                  <th>Action(s)</th>
                </tr>
              </thead>
              <tbody>
                {users ? (
                  users.map((data, index) => (
                    <tr key={index}>
                      <td>{data.id}</td>
                      <td>{data.name}</td>
                      <td>{data.email}</td>
                      <td>{data.website}</td>
                      <td>
                        {/* <button className="btn btn-sm btn-info" onClick={()=>EditRecord(data)}>Edit</button> */}

                        {/* <Link to={`/users/${data.id}`} className="btn btn-sm btn-info">Edit</Link> */}

                        <Link to={`/users/${data.id}`} state={data} className="btn btn-sm btn-info">Edit</Link>


                      </td>
                    </tr>
                  ))
                ) : (
                  <div className="spinner-border text-danger text-center"></div>
                )}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        <div className="row mt-4">
          <div className="col-md-12">
            <h1>{showEditForm ? "Edit" : "Add"} New Record</h1>
            <label>Name</label>
            <input
            value={record.name}
              type="text"
              className="form-control"
              name="name"
              onChange={handleChange}
            />

            <label>Email</label>
            <input
            value={record.email}
              type="text"
              className="form-control"
              name="email"
              onChange={handleChange}
            />

            <label>Website</label>
            <input
            value={record.website}
              type="text"
              className="form-control"
              name="website"
              onChange={handleChange}
            />
          </div>
          {showEditForm ? (
            <button
              className="btn btn-sm btn-success mt-4 mb-4"
              onClick={UpdateRecord}
            >
              Update
            </button>
          ) : (
            <button
              className="btn btn-sm btn-success mt-4"
              onClick={createNewRecord}
            >
              Add
            </button>
          )}
        </div>
      )}
    </div>
  );
}
