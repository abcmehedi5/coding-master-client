import React, { useEffect } from "react";
import Sidebar from "../../Sidebar/Sidebar";
import { useSelector, useDispatch } from "react-redux";
import { fetchAllTeacher } from "../../../../App/Features/TeacherSlice/TeacherSlice";
import { Link } from "react-router-dom";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
const AllTeacher = () => {
  const [status, setStatus] = useState({});
  const [teacherAll, setTeacherAll] = useState([]);

  // statis update

  const changeStatus = (e) => {
    const copyStatus = { ...status };
    copyStatus[e.target.name] = e.target.value;
    setStatus(copyStatus);
  };

  const handleStatusUpdate = (id) => {
    fetch("https://coding-master-server.onrender.com/teacher/teacherStatus/" + id, {
      method: "PATCH",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(status),
    });
    // .then((res) => res.json())
    // .then((data) => {
    //   if (data.error) {
    //     console.log(data.error);
    //   } else {
    //     // alert(data.message);
    //   }
    // });
  };
  // all teacher feth
  useEffect(() => {
    fetch("https://coding-master-server.onrender.com/teacher/allTeacher", {
      method: "GET",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${sessionStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setTeacherAll(data));
  }, []);
  // handle delete
  const handleDelete = (id) => {
    fetch("https://coding-master-server.onrender.com/teacher/teacherDelete/" + id, {
      method: "DELETE",
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
          })
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
          })
          fetch("https://coding-master-server.onrender.com/teacher/allTeacher", {
            method: "GET",
            headers: {
              "content-type": "application/json",
              authorization: `Bearer ${sessionStorage.getItem("token")}`,
            },
          })
            .then((res) => res.json())
            .then((data) => setTeacherAll(data));
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
          <h1 className="brandFont">All Student</h1>
          <div class="input-group mb-2 mt-3">
            <input
              // onChange={searchChange}
              type="text"
              name="search"
              class="form-control"
              placeholder="Name Search"
              aria-describedby="button-addon2"
            />
            <button
              class="btn btn-primary bg-primary"
              type="button"
              id="button-addon2"
            >
              <i class="fa-solid fa-magnifying-glass"></i>
            </button>
          </div>
          {/* search input end */}
          <table className="table table-striped">
            <thead className="table-dark">
              <tr>
                <th>SL</th>
                <th>Name</th>
                <th>Email</th>
                <th>Mobile</th>

                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>

            {teacherAll.map((teacher, index) => (
              <tbody>
                <tr>
                  <td>{index}</td>
                  <td>
                    <Link to={"/teacher/" + teacher._id}>{teacher.name}</Link>
                  </td>
                  <td>{teacher.email}</td>
                  <td>{teacher.phone}</td>

                  <td>
                    <select
                      class="form-select w-75"
                      onChange={changeStatus}
                      name="status"
                      onClick={() => handleStatusUpdate(teacher._id)}
                    >
                      <option selected>{teacher.status}</option>
                      <option value="pending">Pending</option>
                      <option value="approved">Approved</option>
                    </select>
                  </td>
                  <td>
                    <button
                      onClick={() => handleDelete(teacher._id)}
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
  );
};

export default AllTeacher;
