import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Oldest() {
  const [posts, setPosts] = useState();

  useEffect(()=>{
    axios.get("https://test-api-users.onrender.com/posts")
    .then((res)=>{
        let postData = res.data
        postData = postData.filter(p=>p.oldest===true)
        setPosts(postData)
    })
    .catch(error=>console.log(error.message))
  },[])

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-12">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Body</th>
                <th>Action(s)</th>
              </tr>
            </thead>
            <tbody>
              {posts ? (
                posts.map((data, i) => (
                  <tr key={i}>
                    <td>{data.id}</td>
                    <td>{data.title}</td>
                    <td>{data.body}</td>
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
