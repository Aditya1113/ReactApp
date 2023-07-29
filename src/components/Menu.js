import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Menu() {
  const [role, setRole] = useState();

  const navigate = useNavigate();

  useEffect(() => {
    let user_role = sessionStorage.getItem("role");
    setRole(user_role);
  }, []);

  const LogoutProcess = () => {
    sessionStorage.removeItem("role");
    alert("logout successfully");
    navigate("/login");
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-success">
        <div className="container-fluid">
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          xs
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item active">
                <Link
                  className="nav-link active"
                  to="/"
                  aria-current="page"
                  href="#"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about" href="#">
                  About
                </Link>
              </li>
              <li>
                <Link className="nav-link" to="/todo" href="#">
                  Todo
                </Link>
              </li>

              <li>
                <Link className="nav-link" to="/users" href="#">
                  Users
                </Link>
              </li>

              <li>
                <Link className="nav-link" to="/posts" href="#">
                  Posts
                </Link>
              </li>

              {role && role === "Admin" && (
                <li>
                  <Link className="nav-link" to="/add" href="#">
                    Add Post
                  </Link>
                </li>
              )}

              {role ? (
                <li>
                  <button
                    onClick={LogoutProcess}
                    className="btn btn-sm btn-danger"
                  >
                    Logout
                  </button>
                </li>
              ) : (
                <>
                  <li>
                    <Link className="nav-link" to="/login" href="#">
                      Login
                    </Link>
                  </li>

                  <li>
                    <Link className="nav-link" to="/signup" href="#">
                      Signup
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
