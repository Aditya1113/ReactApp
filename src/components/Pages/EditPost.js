import axios from 'axios';
import React, { useEffect, useState } from 'react'
import {useLocation, useNavigate, useParams } from 'react-router-dom';

export default function EditPost() {

        const {id} = useParams()

        const navigate = useNavigate()

        const [record,setRecord] = useState();

        // useEffect(()=>{
        //     axios
        //     .get(`http://localhost:3001/users/${id}`)
        //     .then((response) => setRecord(response.data))
        //     .catch((error) => console.log(error));
        // },[])
     

    const location = useLocation()

      const dataobj = location.state

      useEffect(()=>{
        setRecord(dataobj)
      },[dataobj])

    const UpdateRecord=()=>{
        axios
        .put(`https://test-api-users.onrender.com/posts/${id}`, record)
        .then(() => {
          alert("data updated");
            navigate('/posts/latest')
        })
        .catch((error) => console.log(error));
      }

      const handleChange = (event) => {
        setRecord({ ...record, [event.target.name]: event.target.value });
      };

      

      

  return (
    <div className="container mt-4 p-10">
         <h2>Edit Post</h2>
           
            <label>TITLE</label>
            <input
            value={record?.title}
              type="text"
              className="form-control"
              name="title"
              onChange={handleChange}
            />

            <label>BODY</label>
            <input
              type="text"
              className="form-control"
              name="body"
              onChange={handleChange}
            />

            <button onClick={UpdateRecord} className="btn btn-sm btn-danger mt-4">
                Edit Data
            </button>

          </div>
  )
}
