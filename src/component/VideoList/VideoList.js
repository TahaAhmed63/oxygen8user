import React from "react";
import { Link } from "react-router-dom";


const VideoList = ({ ...item }) => {
  const { title, image } = item;
  const img_link = localStorage.getItem("image_link");

  return (
    <div
    className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 grid-item cat1 cat2 cat4"
  >
    <div className="course__item white-bg mb-30 fix">
      <div className="course__thumb w-img p-relative fix">
          <img src={`${img_link}${image}`} alt="" width="300" height="250" />
      </div>
      <div className="course__content">
       
        <h3
          className="course__title"
          style={{ textAlign: "left", paddingTop: "5px" }}
        >
          {title}
        </h3>
      </div>
      <div className="course__more d-flex justify-content-between align-items-center">
       
        <div className="course__btn">
          <Link href="#" className="link-btn" >
            Play Video
            <i className="far fa-play"></i>
            <i className="far fa-play"></i>
          </Link>
        </div>
      </div>
    </div>
  </div>
  );
};

export default VideoList;
