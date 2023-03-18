import React from "react";
import Course from "./Course/Course";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
const Home = () => {
  return (
    <div>
      <Header />
      <Course></Course>
      <Footer></Footer>
      {/* <Post /> */}
      {/* <Blog /> */}
    </div>
  );
};

export default Home;
