import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { userContext } from "./../../../../App";
const Navbar = () => {
  const [studentRole, setStudentRole] = useState(false);
  const [adminRole, setAdminRole] = useState(false);
  const [teacherRole, setTeacherRole] = useState(false);
  const [loggedinUser, setLoggedinUser] = useContext(userContext);
  useEffect(() => {
    fetch("https://coding-master-server.onrender.com/role/studentRole", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ email: loggedinUser.email }),
    })
      .then((res) => res.json())
      .then((data) => setStudentRole(data));
    // teahcer role start
    fetch("https://coding-master-server.onrender.com/role/teacherRole", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ email: loggedinUser.email }),
    })
      .then((res) => res.json())
      .then((data) => setTeacherRole(data));
    // teahcer role end
    // admin role start
    fetch("https://coding-master-server.onrender.com/role/adminRole", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ email: loggedinUser.email }),
    })
      .then((res) => res.json())
      .then((data) => setAdminRole(data));

    // admin role end
  }, []);
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-info">
        <div className="container">
          <a className="navbar-brand brandFont" style={{ fontSize: "30px" }}>
            CODING MASTER
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          {loggedinUser.email && <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  <a className="dropdown-item">Home</a>
                </Link>
              </li>

              <li className="nav-item">
                <Link to="/dashboard" className="nav-link">
                  <a className="dropdown-item">Dashboard</a>
                </Link>
              </li>

            </ul>
          </div>}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
