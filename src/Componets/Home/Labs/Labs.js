import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "./Labs.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
const Labs = () => {
  return (
    <div className="container swiperContainer mb-5 ">
      <h1  className="brandFont text-center mb-5">Labs</h1>
      <Swiper
        pagination={true}
        scrollbar={{ draggable: true }}
        modules={[Pagination]}
     
        className="mySwiper swiper"
      >
        <SwiperSlide className="swiper-slide">
          <img
            className="swiperImg"
            src="https://www.mkscpilani.com/Uploads/fileupload/228computer%20lab.jpg"
            alt=""
            />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://www.sipa.columbia.edu/sites/default/files/embedded-media/IMG_1028.jpg"
            className="img-fluid"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="img-fluid"
            src="https://bauet.ac.bd/ice/wp-content/uploads/sites/9/2021/01/Computer-Lab-1024x683.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="img-fluid"
            src="https://bauet.ac.bd/ice/wp-content/uploads/sites/9/2021/01/Computer-Lab-1024x683.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="img-fluid"
            src="https://c8.alamy.com/comp/HDKMP9/desktop-computers-in-computer-lab-on-high-school-HDKMP9.jpg"
            alt=""
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Labs;
