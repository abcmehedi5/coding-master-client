import React, { useCallback, useState } from "react";
import { useContext } from "react";
import { useEffect } from "react";
import Post from "../../../../Home/Post/Post";
import WritePost from "../../../../Home/Post/WritePost";
import { userContext } from "./../../../../../App";

const ProfilePost = () => {
  const [post, setPost] = useState([]);
  // like count state
  const [likeCount, setLikeCount] = useState(0);
  console.log(likeCount);
  const incrementLikeCount = useCallback(() => {
    setLikeCount(likeCount + 1);
  }, [likeCount]);

  const [loggedinUser, setLoggedinUser] = useContext(userContext);

  useEffect(() => {
    fetch("https://coding-master-server.onrender.com/post/allpost")
      .then((res) => res.json())
      .then((data) => setPost(data));
  }, []);
  return (
    <div>
       
       <Post/>
      <div className="w-75 m-auto">
        {post.reverse().map((post) => (
          <div className="Post-container">
            <div className="d-flex align-items-center mt-5 mb-3 postContainer">
              <img src={loggedinUser.img} alt="" />
              <div className="PostUserInfo">
                <h5>{loggedinUser.name}</h5>
                <p>{post.date.slice(4, 16)}</p>
              </div>
            </div>
            <p>{post.post}</p>
            <img className="img img-fluid " src={post.img} alt="" />
            <div className="post-footer">
              <button onClick={() => incrementLikeCount()}>Like</button>
              <button onClick={() => incrementLikeCount()}>Comment</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfilePost;
