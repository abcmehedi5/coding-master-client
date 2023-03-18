import React, { useEffect } from "react";
import TeacherDetails from "./TeacherDetails/TeacherDetails";
import { useDispatch, useSelector } from "react-redux";
import "./TeacherDetails/TeacherDetails";
import { fetchAllTeacher } from "../../../App/Features/TeacherSlice/TeacherSlice";
const Teacher = () => {
  const tData = useSelector((state) => state.teacherData);
  const { isLoading, teacherAll, error } = useSelector(
    (state) => state.teacherAllData
  );

  // dispatch teacher data
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllTeacher());
  }, []);
  return (
    <div className="container mt-5 text-center mb-5">
      <h1 className="brandFont text-center mb-5">Teachers</h1>

      <div className="row">
        {teacherAll.map((tData) => (
          <TeacherDetails tData={tData} key={tData._id} />
        ))}
      </div>

      
      <hr className="m-auto mt-2" style={{ border: "1px solid black" }} />
    </div>
  );
};

export default Teacher;
