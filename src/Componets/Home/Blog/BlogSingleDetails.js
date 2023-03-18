import React from "react";
import { useParams } from "react-router-dom";

const BlogSingleDetails = () => {
  const { blogId } = useParams();
  return (
    <div>
      <h1>Blog id: {blogId}</h1>
    </div>
  );
};

export default BlogSingleDetails;
