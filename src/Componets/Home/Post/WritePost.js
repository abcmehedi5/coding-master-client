import React from "react";
import { userContext } from "./../../../App";
import { useContext } from "react";
import "./Post.css";
import EmojiPicker from "emoji-picker-react";
import { useState } from "react";
import axios from "axios";
const WritePost = () => {
  const [loggedInUser, setLoggedInUsr] = useContext(userContext);
  const [emoji, setEmoji] = useState(false);
  const [post, setPost] = useState({});
  const [file, setFile] = useState(null);
  const [imageUrl, setImgUrl] = useState({});
  // on Change post
  const handleChangePost = (e) => {
    const newPost = { ...post };
    newPost[e.target.name] = e.target.value;
    setPost(newPost);
  };
  // file change
  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("img", file);
    if (file !== null) {
      formData.append("post", post.post);
    }
    formData.append("date", new Date());
    formData.append("email", loggedInUser.email);
    formData.append("name", loggedInUser.name);
    formData.append("profileImg", loggedInUser.img);
    fetch("https://coding-master-server.onrender.com/post/WritePost", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        alert("upload successfull");
      });
  };

  return (
    <div className="container mt-5 mb-5 writeContainer">
      <h1 className="mb-5 text-center brandFont">Create Post</h1>
      <div>
        {/* from input */}
        <form onSubmit={handleSubmit}>
          <div className="">
            <div className="postProfile d-flex align-items-center mb-2">
              <img
                // src={`data:image/png;base64,${loggedInUser.img.img}`}
                src={loggedInUser.img}
                alt=""
              />
              <div className="profileName">
                <h4>{loggedInUser.name}</h4>
                <h6 className="d-flex align-items-center">
                  <i class="fa-sharp fa-solid fa-globe me-1"></i>Public
                </h6>
              </div>
            </div>
            <textarea
              onChange={handleChangePost}
              name="post"
              type="email"
              className="form-control writePost"
              placeholder={`What's on your mind,${loggedInUser.name.slice(
                0,
                2
              )}?`}
            />

            <div className="reactPhoto">
              <h6>Add to your post</h6>
              <div>
                <label htmlFor="inputFile">
                  <i class="fa-sharp fa-solid fa-image fs-3 inputLabel"></i>
                </label>
                <input
                  onChange={handleFileChange}
                  className="w-25 fileUpload"
                  id="inputFile"
                  type="file"
                  name="file"
                />
                <span onClick={() => setEmoji(!emoji)}>
                  <i class="fa-sharp fa-solid fa-face-smile fs-3 ms-3 emoji"></i>
                </span>
              </div>
            </div>
            <button type="submit" className="btn btn-primary w-100 mt-3">
              POST
            </button>
          </div>
        </form>
        {emoji && <EmojiPicker />}
      </div>
    </div>
  );
};

export default WritePost;
