import React, { useEffect, useState } from "react";
import CourseCard from "./CourseCard";
import "./course.css"
const Course = () => {
  const [course, setCourse] = useState([]);
  console.log(course);

  useEffect(() => {
    fetch("https://coding-master-server.onrender.com/course/allCourse")
      .then((res) => res.json())
      .then((data) => setCourse(data));
  }, []);

  return (
    <div className="container mt-5 mb-5">
      <div class="row w-100">
        {course.map((courseData) => (
          <CourseCard courseData={courseData} key={courseData._id} />
        ))}
      </div>
    </div>
  );
};

export default Course;
