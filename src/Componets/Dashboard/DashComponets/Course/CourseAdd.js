import React from "react";
import { useState } from "react";
import Sidebar from "../../Sidebar/Sidebar";

const CourseAdd = () => {
  const [file, setFile] = useState(null);
  const [addCourse, setAddCourse] = useState({
    courseName: "",
    coursePrice: "",
    courseDescription: "",
  });
  console.log(addCourse);

  // handle submit
  const handleSubmit = (event) => {
    event.preventDefault();
    //   post to server
    const formData =  new FormData();;
    formData.append("courseName", addCourse.courseName);
    formData.append("coursePrice", addCourse.coursePrice);
    formData.append("courseDescription", addCourse.courseDescription);
    formData.append("img", file);
    fetch("https://coding-master-server.onrender.com/course/addCourse", {
      method: "POST",
      body: formData
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  // handle change
  const handleChange = (e) => {
    const newAddCourse = { ...addCourse };
    newAddCourse[e.target.name] = e.target.value;
    setAddCourse(newAddCourse);
  };
  // handle file change
  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  return (
    <div>
      <div className="row">
        <div className="col-md-3">
          <Sidebar />
        </div>
        <div className="col-md-9 mt-5">
          {/* add course */}
          <form onSubmit={handleSubmit} className="w-50 m-auto">
            <div class="mb-3">
              <label htmlFor="name" class="form-label">
                Course Name
              </label>
              <input
                type="text"
                name="courseName"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter Name"
                onChange={handleChange}
              />
            </div>

            <div class="mb-3">
              <label htmlFor="name" class="form-label">
                Course Price
              </label>
              <input
                type="number"
                name="coursePrice"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter price"
                onChange={handleChange}
              />
            </div>

            <div class="mb-3">
              <label htmlFor="name" class="form-label">
                Description
              </label>
              <textarea
                type="text"
                name="courseDescription"
                class="form-control p-5"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                onChange={handleChange}
              />
            </div>

            <div>
              <label for="formFileLg" class="form-label">
                Course Photo
              </label>
              <input
                class="form-control form-control-lg"
                id="formFileLg"
                type="file"
                name="file"
                onChange={handleFileChange}
              />
            </div>

            <div class="mb-3 ">
              <button type="submit" className="btn btn-secondary w-100 mt-4">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CourseAdd;
