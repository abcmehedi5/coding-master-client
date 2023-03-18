import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { fetchAllStudent } from "../../../../App/Features/StudnetSlice/StudentSlice";
import { useDispatch } from "react-redux";

const StudentDetails = () => {
  const { studentId } = useParams();
  // redux student data load;
  const { isLoading, studentAll, error } = useSelector(
    (state) => state.studentAllData
  );
  // dispatch student data
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllStudent());
  }, []);

  const filterStudnet = studentAll.filter((st) => st._id === studentId);
  const studentData = filterStudnet[0];
  const {
    address,
    email,
    gender,
    img,
    name,
    phone,
    registration,
    role,
    roll,
    shift,
  } = studentData;
  console.log(img)
  return (
    <div>
      <h1>Studnet Details</h1>
      <p>{studentId}</p>
      <p>{email}</p>
      <p>{gender}</p>
      <p>{name}</p>
      <img className="img img-fluid w-25" src={img} alt="" /> 
    </div>
  );
};

export default StudentDetails;
