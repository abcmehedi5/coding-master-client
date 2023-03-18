import React, { useEffect, useState } from "react";
import BlogDetails from "./BlogDetails";

const Blog = () => {
  const [post, setPost] = useState([]);
  useEffect(() => {
    fetch("https://coding-master-server.onrender.com/post/allpost")
      .then((res) => res.json())
      .then((data) => setPost(data));
  }, []);
  return (
    <div className="container">
      <h1 className="brandFont text-center">Blog</h1>
      <div className="row">
        {post.reverse().map((BData) => (
          <BlogDetails BData={BData} key={BData._id} />
        ))}
      </div>
    </div>
  );
};

export default Blog;
