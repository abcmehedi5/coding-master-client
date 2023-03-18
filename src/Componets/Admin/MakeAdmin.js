import React, { useEffect, useState } from "react";
import Sidebar from "../Dashboard/Sidebar/Sidebar";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const MakeAdmin = () => {
  const [makeAdmin, setMakeAdmin] = useState({
    name: "",
    email: "",
    role: "admin",
  });

  //get admin data state
  const [admin, setAdmin] = useState([]);
  // on Change teacher add input
  const handleChange = (e) => {
    const copyAdmin = { ...makeAdmin };
    copyAdmin[e.target.name] = e.target.value;
    setMakeAdmin(copyAdmin);
  };
  // handle submit
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("https://coding-master-server.onrender.com/admin/makeAdmin", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(makeAdmin),
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
          fetchAdmin();
        }
      });
  };
  useEffect(() => {
    fetch("https://coding-master-server.onrender.com/admin/allAdmin", {
      method: "GET",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${sessionStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setAdmin(data));
  }, []);

  //  fetch admin data
  const fetchAdmin = () => {
    fetch("https://coding-master-server.onrender.com/admin/allAdmin", {
      method: "GET",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${sessionStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setAdmin(data));
  };
  // fetchAdmin(); // call funcation

  // admin delete
  const handleDelete = (id) => {
    fetch("https://coding-master-server.onrender.com/admin/adminDelete/" + id, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${sessionStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          alert(data.error);
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
          fetchAdmin(); // again fetch admin data
        }
      });
  };
  return (
    <div>
      {/* Toastify Alert container */}
      <ToastContainer />
      {/* Toastify Alert container */}
      <div className="row">
        <div className="col-md-3">
          <Sidebar />
        </div>

        <div className="col-md-9">
          <h1 className="text-center mt-5 brandFont">Admin Make</h1>

          <form onSubmit={handleSubmit} className="w-50 m-auto">
            <div class="mb-3">
              <label htmlFor="name" class="form-label">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter Name"
                onChange={handleChange}
              />
            </div>

            <div class="mb-3">
              <label htmlFor="name" class="form-label">
                Email
              </label>
              <input
                type="email"
                name="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter Email"
                onChange={handleChange}
              />
            </div>

            <div class="mb-3 ">
              <button type="submit" className="btn btn-secondary w-100 mt-4">
                Submit
              </button>
            </div>
          </form>

          {/* show admin table */}

          <div className="w-75 m-auto text-center mt-5">
            <h1>Admin</h1>
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">Name</th>
                  <th scope="col">Email</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              {admin.map((admin) => (
                <tbody key={admin._id}>
                  <tr>
                    <td>{admin.name}</td>
                    <td>{admin.email}</td>
                    <td>
                      <button
                        onClick={() => handleDelete(admin._id)}
                        className="btn btn-danger"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                </tbody>
              ))}
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MakeAdmin;
