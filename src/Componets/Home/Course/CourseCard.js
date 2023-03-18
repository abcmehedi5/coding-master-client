import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { userContext } from "../../../App";

const CourseCard = ({ courseData }) => {
  const { courseName, courseDescription, coursePrice, img, _id } = courseData;
  const [loggedinUser, setLoggedinUser] = useContext(userContext);

  return (
    <div class="col-md-4 coruseCard">
      <img src={img} class="card-img-top img img-fluid " alt="..." />
      <div class="card-body">
        <h5 class="card-title">
          <Link to={"/course/" + _id}>{courseName}</Link>
        </h5>
        <p class="card-text">{courseDescription.slice(0, 100) + "...."}</p>
        
        <div class="card-text d-flex justify-content-between">
          <div>
            {loggedinUser.status === "pending" && (
              <Link to={"/payment/" + _id}>
                <button className="btn btn-primary mb-4">Buy Now</button>
              </Link>
            )}
          </div>
          <div className="d-flex gap-3">
            {loggedinUser.status === "approved" && (
              <Link to="/myCourse">
                <button className="btn btn-primary mb-4">Continue</button>
              </Link>
            )}
          </div>
        </div>

        <div class="card-text d-flex justify-content-between">
          <div>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
          </div>
          <div className="d-flex gap-3">
            <h4>{coursePrice} TK</h4>
            <h4>
              <s>2000 TK</s>
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
