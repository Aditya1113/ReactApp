import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function UserLogin() {
  const [loginDetails, setLoginDetails] = useState({
    username: "",
    password: "",
  });

  const [users, setUsers] = useState();

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("https://test-api-users.onrender.com/users")
      .then((res) => setUsers(res.data))
      .catch((error) => console.log(error));
  });

  //   const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    //check if the entered username and password match any user in the users array
    const matchedUser = users.find(
      (user) => user.email === loginDetails.username
    );

    if (matchedUser) {
      if (matchedUser.password === loginDetails.password) {
        if (matchedUser.role === "admin") {
          sessionStorage.setItem("role", "Admin");
          navigate("/");
        } else {
          sessionStorage.setItem("role", "Guest");
          navigate("/");
        }
      } else {
        alert("wrong password ");
      }
    } else {
      alert("email does not exist");
    }
  };

  return (
    <div className="container mt-4 p-4">
      <h2>Login To Your Account</h2>
      <p>
        Email
        <input
          type="text"
          className="form-control"
          onChange={(event) =>
            setLoginDetails({ ...loginDetails, username: event.target.value })
          }
        />
      </p>

      <p>
        Password
        <input
          type="text"
          className="form-control"
          onChange={(event) =>
            setLoginDetails({ ...loginDetails, password: event.target.value })
          }
        />
      </p>
      <p>
        <button onClick={handleLogin} className="btn btn-sm btn-primary">
          Login
        </button>
      </p>
    </div>
  );
}
