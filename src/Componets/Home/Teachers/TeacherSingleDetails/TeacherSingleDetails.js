import React from "react";
import { useParams } from "react-router-dom";

const TeacherSingleDetails = () => {
  const { teacherId } = useParams();
  return (
    <div>
      <h1>Teahcer ID:{teacherId}</h1>
    </div>
  );
};

export default TeacherSingleDetails;
