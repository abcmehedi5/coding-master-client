import React from "react";

const HeaderInfo = () => {
  return (
    <div className="container">
      <div className="row d-flex align-items-center">
        <div className="col-md-6">
          <div>
            <h1 className="brandFont">Welcome to Coding Master</h1>
            <p className="headP">
            Welcome to Coding Master, a programming website dedicated to helping individuals improve their coding skills and knowledge. Our website offers a wide range of resources, including tutorials, articles, and examples, covering various programming languages such as Python, Java, Javascript, and more. Whether you're a beginner or an experienced programmer, you'll find valuable information and insights on our site to help you advance your coding abilities. Join our community of like-minded individuals and take your programming skills to the next level with Coding Master.
            </p>
            {/* <button className="btn btn-info text-white">Email: digitalmtvhelp@gmail.com</button> */}
          </div>
        </div>
        <div className="col-md-6">
          <img
            className="img-fluid"
            src="https://static.vecteezy.com/system/resources/previews/006/989/527/original/student-reading-book-in-online-library-on-smarhphone-e-learning-illustration-concept-male-and-female-do-online-learning-together-vector.jpg"
          />
        </div>
      </div>
    </div>
  );
};

export default HeaderInfo;
