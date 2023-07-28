import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Navigate, useLocation, useNavigate, useParams } from 'react-router-dom';

export default function EditUser() {

        const {id} = useParams()


        const navigate = useNavigate()

        const [record,setRecord] = useState();

        useEffect(()=>{
            axios
            .get(`https://test-api-users.onrender.com/users/${id}`)
            .then((response) => setRecord(response.data))
            .catch((error) => console.log(error));
        },[])
     

    const UpdateRecord=()=>{
        axios
        .put(`https://test-api-users.onrender.com/users/${id}`, record)
        .then(() => {
          alert("data updated");
            navigate('/users')
        })
        .catch((error) => console.log(error));
      }

      const handleChange = (event) => {
        setRecord({ ...record, [event.target.name]: event.target.value });
      };

      // const location = useLocation()

      // const dataobj = location.state

      // useEffect(()=>{
      //   setRecord(dataobj)
      // },[dataobj])


      

  return (
    <div className="container mt-4 p-10">
         <h2>Edit Users</h2>
            <label>Name</label>
            <input
            value={record?.name}
              type="text"
              className="form-control"
              name="name"
              onChange={handleChange}
            />

            <label>Email</label>
            <input
            value={record?.email}
              type="text"
              className="form-control"
              name="email"
              onChange={handleChange}
            />

            <label>Website</label>
            <input
            value={record?.website}
              type="text"
              className="form-control"
              name="website"
              onChange={handleChange}
            />

            <button onClick={UpdateRecord} className="btn btn-sm btn-danger mt-4">
                Edit Data
            </button>

          </div>
  )
}
