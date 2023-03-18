import React, { useEffect, useState } from "react";
import Sidebar from "../../Sidebar/Sidebar";
import { useSelector, useDispatch } from "react-redux";
import { fetchAllStudent } from "./../../../../App/Features/StudnetSlice/StudentSlice";
import Loading from "../../../Loading/Loading";
import { Link } from "react-router-dom";
const Student = () => {
  // redux data load
  const { isLoading, studentAll, error } = useSelector(
    (state) => state.studentAllData
  );
  // search state
  const [search, setSearch] = useState("");

  // dispatch student data
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllStudent());
  }, []);

  // search onchange
  const searchChange = (e) => {
    setSearch(e.target.value);
  };

  // handle delete button
  const handleStudnetDelete = (id) => {
    fetch("https://coding-master-server.onrender.com/student/studentDelete/" + id, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${sessionStorage.getItem("token")}`,
      },
    })
    .then((res) => res.json())
      .then((data) => {
        alert("delete successfull");
      })
      .catch(error=>{
        console.log(error);
      })

    console.log("clicke delete", id);
  };
  return (
    <>
      <div className="row">
        <div className="col-md-3">
          <Sidebar />
        </div>

        <div className="col-md-9">
          <h1 className="brandFont mt-4 text-center">All Student List</h1>
          {isLoading ? (
            <Loading />
          ) : (
            <div style={{ width: "95%", margin: "auto" }}>
              {/* search input start */}
              <div class="input-group mb-2 mt-3">
                <input
                  onChange={searchChange}
                  type="number"
                  name="search"
                  class="form-control"
                  placeholder="Roll Search"
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
                    <th>Roll</th>
                    <th>Mobile</th>
                    <th>Semister</th>
                    <th>Shift</th>
                    <th>Action</th>
                  </tr>
                </thead>

                {studentAll.map((student) => (
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>
                        <Link to={"/student/" + student._id}>
                          {student.name}
                        </Link>
                      </td>
                      <td>{student.roll}</td>
                      <td>{student.phone}</td>
                      <td>{student.semester}</td>
                      <td>{student.shift}</td>
                      <td>
                        <button
                          onClick={() => handleStudnetDelete(student._id)}
                          className="btn btn-primary"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  </tbody>
                ))}
              </table>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Student;
