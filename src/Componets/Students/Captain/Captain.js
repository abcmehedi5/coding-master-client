import React from "react";
import { useSelector } from "react-redux";
import CaptainDetails from "./CaptainDetails/CaptainDetails";

const Captain = () => {
  const sData = useSelector((state) => state.studentData);
  return (

      <div className=" container text-center mt-5 mb-5">
        {/* <h1 className="brandFont text-center">Class Captain</h1>
        <div className="row">
          {sData.slice(0, 6).map((sData) => (
            <CaptainDetails sData={sData} key={sData._id} />
          ))}
        </div> */}
      {/* <hr className="m-auto mt-5 mb-5" style={{ border: "1px solid black" }} /> */}
      </div>
  
  );
};

export default Captain;
