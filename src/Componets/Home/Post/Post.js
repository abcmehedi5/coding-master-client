import React from "react";
import { userContext } from "./../../../App";
import { useContext } from "react";
import "./Post.css";
import { Link, Navigate } from "react-router-dom";
const Post = () => {
  const [loggedInUser, setLoggedInUsr] = useContext(userContext);
  const handleClick = () => {
    <Navigate to="/write-post" />;
    console.log("click");
  };
  return (
    <div className="container mt-5 mb-5 w-75 ">
      <div>
        <div className="d-flex align-items-center">
          <div className="postProfile">
            {/* <img src={`data:image/png;base64,${loggedInUser.img.img}`} alt="" /> */}
            <img src={loggedInUser.img} alt="" />
          </div>

          <Link to={"/write-post"} className="w-100">
            <input
              type="email"
              class="form-control homePost"
              placeholder="What's on your mind?"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Post;
