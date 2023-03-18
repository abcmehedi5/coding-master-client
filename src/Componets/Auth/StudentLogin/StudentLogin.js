import React, { useContext, useState } from "react";
import Navbar from "./../../Home/Header/Navber/Navbar";
import { userContext } from "./../../../App";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import Swal from "sweetalert2";
const StudentLogin = () => {
  const [user, setUser] = useState({});
  // handle change
  const handleChange = (e) => {
    const copyUser = { ...user };
    copyUser[e.target.name] = e.target.value;
    setUser(copyUser);
  };
  // use context user data
  const [loggedinUser, setLoggedinUser] = useContext(userContext);

  // privet router check
  const history = useNavigate();
  const location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };
  // handle submit
  const handleSubmit = (e) => {
    e.preventDefault();
  
    fetch("https://coding-master-server.onrender.com/login/student-login", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          toast.error(data.error, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
        } else if (data.loginPassError) {
          toast.error(data.loginPassError, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
        } else {
          setLoggedinUser(data.data);
          sessionStorage.setItem("token", data.access_token);
          from && history(from.pathname);

          Swal.fire(
            `${data.loginSuccess}`,
            "You clicked the button!",
            "success"
          );
        }
      });
  };
  return (
    <div>
      {/* Toastify Alert container */}
      <ToastContainer />
      {/* Toastify Alert container */}
      <Navbar />
      <div className="row loginContainer">
        <div className="col-md-6">
          <div className="">
            <form onSubmit={handleSubmit} className="loginForm">
              <h1 className="brandFont text-center">Login</h1>
              <div>
                <label htmlFor="phone" class="form-label">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  class="form-control"
                  placeholder="Email"
                  onChange={handleChange}
                />
              </div>

              {/* password */}

              <div>
                <label htmlFor="phone" class="form-label">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  class="form-control"
                  placeholder="Password"
                  onChange={handleChange}
                />
              </div>

              <div class="mt-3 ">
                <button type="submit" class=" singBtn mt-4">
                  Login
                </button>
                <div className="mt-2">
                <Link to={'/teacher/singup'}>Create a account</Link>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="col-md-6">
          <img
            className="img-fluid"
            src="https://img.freepik.com/premium-vector/student-online-examination-big-computer-isometric-e-learning-illustration-vector_275024-33.jpg?w=2000"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default StudentLogin;
