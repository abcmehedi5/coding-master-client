import React, { useState } from "react";
import { json, Link } from "react-router-dom";
import Navbar from "../../Home/Header/Navber/Navbar";
import "../StudentSingup/Studentsingup.css";
import { ToastContainer, toast } from "react-toastify";
const TeacherSingup = () => {
  const [teacher, setTeacher] = useState({
    name: "",
    email: "",
    password: "",
    qualification: "",
    fburl: "",
    address: "",
    phone: "",
    role: "student",
    status:'pending'
  });
  const [valide, setValid] = useState({
    validName: false,
    validEmail: false,
    ValidPassword: false,
    validqualification: false,
    validReg: false,
    vlaidAddress: false,
    validPhone: false,
  });
  // const [file, setFile] = useState(null);
  // on Change teacher add input
  const handleChange = (e) => {
    let fieldValid;
    if (e.target.name == "name") {
      const nameValid = e.target.value.length >= 3;
      fieldValid = nameValid;
      valide.validName = true;
    }

    if (e.target.name === "email") {
      let isEmailValid = /\S+@\S+\.\S+/.test(e.target.value);
      fieldValid = isEmailValid;
      valide.validEmail = true;
    }

    if (e.target.name == "qualification") {
      const qualificationValid = e.target.value.length >= 5;
      fieldValid = qualificationValid;
      valide.validqualification = true;
    }

    if (e.target.name == "fburl") {
      const regalid = e.target.value.length >= 10;
      fieldValid = regalid;
      valide.validReg = true;
    }
    if (e.target.name == "password") {
      const passwordValid = e.target.value.length >= 6;
  
      fieldValid = passwordValid;
      valide.ValidPassword = true;
    }

    if (e.target.name == "phone") {
      const phoneValid = e.target.value.length >= 10;
      fieldValid = phoneValid;
      valide.validPhone = true;
    }

    if (e.target.name == "address") {
      const addressValid = e.target.value.length >= 10;
      fieldValid = addressValid;
      valide.vlaidAddress = true;
    }
    /// if ture
    if (fieldValid) {
      const copyteacher = { ...teacher };
      copyteacher[e.target.name] = e.target.value;
      setTeacher(copyteacher);
    }
  };
  // handle file change
  // const handleFileChange = (e) => {
  //   setFile(e.target.files[0]);
  // };

  // handle submit
  const handleSubmit = (e) => {
    
    e.preventDefault();
    // const formData = new FormData();
    // formData.append("name", teacher.name);
    // formData.append("qualification", teacher.qualification);
    // formData.append("fburl", teacher.fburl);
    // formData.append("email", teacher.email);
    // formData.append("password", teacher.password);
    // formData.append("phone", teacher.phone);
    // formData.append("address", teacher.address);
    // // formData.append("file", file);
    // formData.append("role", teacher.role);
    // formData.append("status", teacher.status);
    fetch("https://coding-master-server.onrender.com/teacher/teacherSingUp", {
      method: "POST",
      headers:{'content-type':'application/json'},
      body: JSON.stringify(teacher),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          toast.error(data.error, {
            position: "bottom-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
        } else if (data.alreadyUse) {
          toast.error(data.alreadyUse, {
            position: "bottom-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
        } else {
          toast.success(data.message, {
            position: "bottom-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });

          setTimeout(() => {
            window.location.reload(true);
          }, 5000);
        }
      });
  };
  return (
    <div className="container mt-5">
      {/* Toastify Alert container */}
      <ToastContainer />
      {/* Toastify Alert container */}
     
      <div className="row">
        <div className="col-md-6 teacherSingup">
          <form onSubmit={handleSubmit} className="w-75 m-auto">
            <h1 className="text-center  brandFont mt-3 mb-1">
              <span style={{ color: "orange" }}>Registration</span>
            </h1>

            <div className="d-flex gap-3">
              <div class="mb-1 w-50">
                <label htmlFor="name" class="form-label">
                  Full Name
                </label>
                <input
                  required
                  type="text"
                  name="name"
                  class="form-control"
                  placeholder="Full Name"
                  onChange={handleChange}
                />
                <label htmlFor="name">
                  {valide.validName && (
                    <small className="text-success">
                      <i class="fa-solid fa-circle-check"></i> Done
                    </small>
                  )}
                </label>
              </div>

              <div class=" mb-1 w-50">
                <label htmlFor="qualification" class="form-label">
                  Qualification
                </label>
                <input
                  required
                  type="text"
                  name="qualification"
                  class="form-control"
                  placeholder="Qualification"
                  onChange={handleChange}
                />
                <label htmlFor="qualification">
                  {valide.validqualification && (
                    <small className="text-success">
                      <i class="fa-solid fa-circle-check"></i> Done
                    </small>
                  )}
                </label>
              </div>
            </div>

            <div className="d-flex gap-3">
              <div class="mb-1 w-50">
                <label htmlFor="fburl" class="form-label">
                  Facebook Profile Link
                </label>
                <input
                  type="text"
                  name="fburl"
                  class="form-control"
                  placeholder="Facebook Profile Link"
                  onChange={handleChange}
                />
                <label htmlFor="name">
                  {valide.validReg && (
                    <small className="text-success">
                      <i class="fa-solid fa-circle-check"></i> Done
                    </small>
                  )}
                </label>
              </div>

              <div class="mb-1 w-50">
                <label htmlFor="email" class="form-label">
                  Email Address
                </label>
                <input
                  type="text"
                  name="email"
                  class="form-control"
                  aria-describedby="emailHelp"
                  placeholder="Email Address"
                  onChange={handleChange}
                />
                <label htmlFor="name">
                  {valide.validEmail && (
                    <small className="text-success">
                      <i class="fa-solid fa-circle-check"></i> Done
                    </small>
                  )}
                </label>
              </div>
            </div>
            {/* password */}
            <div className="d-flex gap-3">
              <div class="mb-1 w-50">
                <label htmlFor="password" class="form-label">
                  Password
                </label>
                <input
                  required
                  type="password"
                  name="password"
                  class="form-control"
                  placeholder="Password"
                  onChange={handleChange}
                />
                <label htmlFor="name">
                  {valide.ValidPassword && (
                    <small className="text-success">
                      <i class="fa-solid fa-circle-check"></i> Done
                    </small>
                  )}
                </label>
              </div>

              <div class="mb-1 w-50">
                <label htmlFor="email" class="form-label">
                  Mobile Number
                </label>
                <input
                  required
                  type="number"
                  name="phone"
                  class="form-control"
                  placeholder="019XXXXXXXX"
                  onChange={handleChange}
                />
                <label htmlFor="name">
                  {valide.validPhone && (
                    <small className="text-success">
                      <i class="fa-solid fa-circle-check"></i> Done
                    </small>
                  )}
                </label>
              </div>
            </div>
            <div className="d-flex gap-3">
              <div class="mb-1 w-50">
                <label htmlFor="address" class="form-label">
                  Address
                </label>
                <input
                  required
                  type="text"
                  name="address"
                  class="form-control"
                  aria-describedby="emailHelp"
                  placeholder="Example: Jhenaidah Shador ,Jheniadah"
                  onChange={handleChange}
                />
                <label htmlFor="name">
                  {valide.vlaidAddress && (
                    <small className="text-success">
                      <i class="fa-solid fa-circle-check"></i> Done
                    </small>
                  )}
                </label>
              </div>

              {/* <div class="mb-1 w-50">
                <label htmlFor="qualification" class="form-label">
                  Profile Photo
                </label>
                <input
                  required
                  type="file"
                  name="file"
                  class="form-control"
                  aria-describedby="emailHelp"
                  onChange={handleFileChange}
                />
                <label htmlFor="name">
                  {file && (
                    <small className="text-success">
                      <i class="fa-solid fa-circle-check"></i> Done
                    </small>
                  )}
                </label>
              </div> */}
            </div>
            <div>
              <button type="submit" class=" singBtn mt-1">
                <i class="fa-sharp fa-solid fa-paper-plane me-4"></i>Requiest
                Send
              </button>
              <Link to='/student/login'>Go to login page</Link>
            </div>
          </form>
        </div>
        <div className="col-md-6">
          <img
            className="img-fluid"
            src="https://img.freepik.com/premium-vector/young-male-teacher-points-out-back-school-cute-character-modern-style_98982-204.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default TeacherSingup;
