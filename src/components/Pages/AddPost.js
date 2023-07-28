import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function AddPost() {

    const [post,setPost] = useState({
        latest: true,
        oldest: false,
        liked: false,
        disliked: false
    });

    const navigate = useNavigate()

    const createNewRecord=()=>{
        axios
        .post("https://test-api-users.onrender.com/posts",post)
        .then(alert("Inserted Successfully"))
        .catch((error) => console.log(error));
        navigate('/posts/latest')
    }



  const handleChange = (event) => {
    setPost({ ...post, [event.target.name]: event.target.value });
  };

  

  

return (
<div className="container mt-4 p-10">
     <h2>Add Post</h2>
        <label>TITLE</label>
        <input
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
        <button onClick={createNewRecord} className="btn btn-sm btn-danger mt-4">
            Add Data
        </button>

      </div>
)
}
