import React from "react";
import { Link } from "react-router-dom";
const TeacherDeTails = ({ tData }) => {
  const { name, qualification, about, phone, email, img, _id, fburl, status } =
    tData;
  const style = {
    width: "90%",
    height: "170px",
    margin: "auto",
    border: "1px solid black",
    borderRadius: "10px",
    margin: "5px",
  };
  return (
    <div className="col-md-3">
      <div
        style={{ background: "#E8EBEE", border: "none" }}
        className="card mt-4"
      >
        {status === "approved" && (
          <div className="card-body">
            <img
              style={style}
              src={`data:image/png;base64,${img.img}`}
              alt=""
            />
            <h5 className="card-title">
              <Link to={"/teacher/" + _id}>{name}</Link>
            </h5>
            <p className="card-text">{qualification}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default TeacherDeTails;
// //
