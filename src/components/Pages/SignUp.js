import axios from "axios";
import React, {useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SignUp() {
  const [user, setUser] = useState({
    name:"",
    email: "",
    password: "",
    role:"guest"
  });

  const navigate = useNavigate();

  const handleChange = (event) => {
    setUser({
        ...user,
        [event.target.name]: event.target.value,
    });
}


const handleSignup=()=>{
        axios.post("https://test-api-users.onrender.com/users",user)
        .then(navigate('/'))
        .catch((error)=>console.log(error.message))
}

  return (
    <div className="container mt-4 p-4">
      <h2>Signup</h2>

      <p>
       Name
        <input
          type="text"
          className="form-control"
          name="name"
          onChange={handleChange }
        />
      </p>

      <p>
        Email
        <input
          type="text"
          className="form-control"
          name="email"
          onChange={handleChange }
        />
      </p>

      <p>
        Password
        <input
          type="text"
          name="password"
          className="form-control"
          onChange={handleChange }
        />
      </p>
      <p>
        <button onClick={handleSignup} className="btn btn-sm btn-primary">
         Signup
        </button>
      </p>
    </div>
  );
}
