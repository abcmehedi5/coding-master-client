import React, { useCallback, useContext, useState } from "react";
import { Link } from "react-router-dom";
import { userContext } from "./../../../App";
const BlogDetails = ({ BData }) => {
  console.log(BData);
  const { _id, date, img, post, name, profileImg } = BData;
  const style = {
    width: "99%",
    height: "200px",
    border: "1px solid black",
    borderRadius: "10px",
  };
  // like count state
  const [likeCount, setLikeCount] = useState(0);
  console.log(likeCount);
  const incrementLikeCount = useCallback(() => {
    setLikeCount(likeCount + 1);
  }, [likeCount]);
  const [loggedInUser, setLoggedInUsr] = useContext(userContext);
  return (
    <div>
      <div className="m-auto">
        <div className="Post-container">
          <div className="d-flex align-items-center mt-5 mb-3 postContainer">
            <img src={profileImg} alt="" />
            <div className="PostUserInfo">
              <h5>{name}</h5>
              <p>{date.slice(4, 16)}</p>
            </div>
          </div>
          <p>{post}</p>
          <img className="img img-fluid m-auto w-50  " src={img} alt="" />
          <div className="post-footer">
            <button onClick={() => incrementLikeCount()}>Like</button>
            <button onClick={() => incrementLikeCount()}>Comment</button>
            <button onClick={() => incrementLikeCount()}>Share</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
