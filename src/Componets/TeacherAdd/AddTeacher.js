import React, { useState } from "react";
import Sidebar from "../Dashboard/Sidebar/Sidebar";
import "./TeacherAdd.css";
const AddTeacher = () => {
  const [teacher, setTeacher] = useState({});
  const [file, setFile] = useState(null);

  // on Change teacher add input
  const handleChange = (e) => {
    const copyTeacher = { ...teacher };
    copyTeacher[e.target.name] = e.target.value;
    setTeacher(copyTeacher);
  };

  // handle file change
  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  // handle submit
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <div className="row">
        <div className="col-md-3">
          <Sidebar />
        </div>

        <div className="col-md-9 addTeacher ">
          <form onSubmit={handleSubmit} className="w-75 m-auto">
            <h1 className="text-center  brandFont mt-3 mb-5">Add Teacher</h1>
            <div className="d-flex gap-3">
              <div class="mb-3 w-50">
                <label htmlFor="name" class="form-label">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Full Name"
                  onChange={handleChange}
                />
              </div>

              <div class="mb-3 w-50">
                <label htmlFor="qualification" class="form-label">
                  Qualification
                </label>
                <input
                  type="text"
                  name="qualification"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Qualification"
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="d-flex gap-3">
              <div class="mb-3 w-50">
                <label htmlFor="phone" class="form-label">
                  Phone Number
                </label>
                <input
                  type="text"
                  name="phone"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Phone Number"
                  onChange={handleChange}
                />
              </div>

              <div class="mb-3 w-50">
                <label htmlFor="fburl" class="form-label">
                  Facebook Profile Link
                </label>
                <input
                  type="text"
                  name="fburl"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Facebook Profile Link"
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="d-flex gap-3">
              <div class="mb-3 w-50">
                <label htmlFor="address" class="form-label">
                  Address
                </label>
                <input
                  type="text"
                  name="gender"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Example: Jhenaidah Shador ,Jheniadah"
                  onChange={handleChange}
                />
              </div>

              <div class="mb-3 w-50">
                <label htmlFor="qualification" class="form-label">
                  Profile Photo
                </label>
                <input
                  type="file"
                  name="file"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  onChange={handleFileChange}
                />
              </div>
            </div>
            <div class="mb-3 ">
              <button type="submit" class=" AddTBtn mt-4">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddTeacher;
