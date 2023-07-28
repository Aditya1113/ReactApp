import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Latest() {
  const [posts, setPosts] = useState();

  const navigate = useNavigate()

  const getPosts=()=>{
    axios.get("https://test-api-users.onrender.com/posts")
    .then((res)=>{
        let postData = res.data
        postData = postData.filter(p=>p.latest===true)
        setPosts(postData)
    })
    .catch(error=>console.log(error.message))
  }

  useEffect(()=>{
   getPosts()
  },[])


  const LikedPost=(currentData)=>{

    console.log("here")
            currentData.latest = false
            currentData.liked = true
            currentData.oldest = true

            axios.put(`https://test-api-users.onrender.com/posts/${currentData.id}`,currentData)
            .then(()=>{getPosts()})
            .catch((error)=>console.log(error));
  }

  const DisLikedPost=(currentData)=>{
        currentData.latest = false
        currentData.disliked = true
        currentData.oldest = true

        axios.put(`https://test-api-users.onrender.com/posts/${currentData.id}`,currentData)
        .then(()=>{getPosts()})
        .catch((error)=>console.log(error));
    }

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-12">
          <table className="table table-bordered">
            <thead>
              <tr>
             
                <th>Name</th>
                <th>Body</th>
                <th>Action(s)</th>
              </tr>
            </thead>
            <tbody>
              {posts ? (
                posts.map((data, i) => (
                  <tr key={i}>
                    <td>{data.title}</td>
                    <td>{data.body}</td>
                    <td>
                        <button onClick={()=>LikedPost(data)} className="btn btn-sm btn-primary">Like</button>&nbsp; &nbsp;
                        <button onClick={()=>DisLikedPost(data)} className="btn btn-sm btn-danger">Dislike</button>
                        <Link to={`edit/${data.id}`} state={data} className="btn btn-sm btn-info">Edit</Link>
                       
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                <td colSpan={4} className="text-center">
                  <div className="spinner-border text-danger"></div>
                </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
