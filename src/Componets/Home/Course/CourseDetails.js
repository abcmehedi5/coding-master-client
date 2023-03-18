import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { userContext } from "../../../App";

const CourseDetails = () => {
  const [loggedinUser, setLoggedinUser] = useContext(userContext);
  const { courseId } = useParams();
  console.log(courseId);
  const [course, setCourse] = useState([]);
  useEffect(() => {
    fetch("https://coding-master-server.onrender.com/course/allCourse")
      .then((res) => res.json())
      .then((data) => setCourse(data));
  }, []);

  // filter this course
  const courseFilter = course.filter(
    (courseData) => courseData._id === courseId
  );
  console.log(courseFilter);
  const courseDetails = courseFilter[0];
  //   const { courseName, coursePrice, courseDescription, img } = courseDetails
  return (
    <div className="w-50 m-auto text-center mt-5">
      <img className="w-75 mb-5 m-auto" src={courseDetails?.img} alt="" />
      <h1>{courseDetails?.courseName}</h1>
      <p style={{textAlign:"justify"}}>{courseDetails?.courseDescription}</p>
      <Link className="btn btn-primary" to='/'>Home Page</Link>
    </div>
  );
};

export default CourseDetails;
