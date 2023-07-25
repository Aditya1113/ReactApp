import React, { useState } from "react";

export default function Login() {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const users = [
    { username: "user1", password: "pass1" },
    { username: "user2", password: "pass2" },
  ];

  const handleLogin = () => {
    //check if the entered username and password match any user in the users array
    const matchedUser = users.find(
      (user) => user.username === username && user.password === password
    );
    if (matchedUser) {
      //if the credentials are valid, set the isLoggedin flag to true
      setIsLoggedIn(true);
      //store the loginStatus and username in SessionStorage

      sessionStorage.setItem("isLogged", "true");
      sessionStorage.setItem("loginName", matchedUser.username);

      alert("Login Successfully");
    } else {
      alert("Invalid Credentials");
    }
  };

  //Function to handle Logout

  const handleLogout = () => {
    //clear the login status and username  from Sessions Storage
    sessionStorage.removeItem("isLogged");
    sessionStorage.removeItem("loginName");
    setIsLoggedIn(false);
    alert("logout successfully");
  };

  return (
    <div>
      {isLoggedIn ? (
        <div>
          <h2>Welcome,{sessionStorage.getItem("loginName")}!</h2>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <div>
          <p>
            Firstname :
            <input
              type="text"
              onChange={(event) => setUsername(event.target.value)}
            />
          </p>

          <p>
            Lastname :
            <input
              type="text"
              onChange={(event) => setPassword(event.target.value)}
            />
          </p>
          <button onClick={handleLogin}>Login</button>
        </div>
      )}
    </div>
  );
}
