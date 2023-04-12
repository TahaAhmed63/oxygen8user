import React from "react";
import { useNavigate } from "react-router-dom";


const CourseSidebar = ({ length, img,duration,price }) => {
  const img_link = localStorage.getItem("image_link");
  const navigate = useNavigate();

  function handleEnroll() {
    const token = localStorage.getItem("accesstoken");
    if (token) {
      alert("stripe open");
    } else {
      navigate("/signin");
    }
  }

  return (
  
        <div className="course__video">
          <div className="course__video-thumb w-img mb-25" style={{position:'relative'}}>
            <img src={`${img_link}${img}`} alt="" />
          </div>
          <div className="course__video-meta mb-25 d-flex align-items-center justify-content-between">
            <div className="course__video-price">
              <h5>
                ${price}
              </h5>
            </div>
          </div>
          <div className="course__video-content mb-35">
            <ul>
             
              <li className="d-flex align-items-center">
              
                <div className="course__video-info">
                  <h5>
                    <span>chapters :</span>
                    {length}
                  </h5>
                </div>
              </li>
              <li className="d-flex align-items-center">
                
                <div className="course__video-info">
                  <h5>
                    <span>Duration :</span>{duration}
                  </h5>
                </div>
              </li>
              <li className="d-flex align-items-center">
                
                <div className="course__video-info">
                  <h5>
                    <span>Enrolled :</span>20 students
                  </h5>
                </div>
              </li>
              <li className="d-flex align-items-center">
                
                <div className="course__video-info">
                  <h5>
                    <span>Language :</span>English
                  </h5>
                </div>
              </li>
            </ul>
          </div>

          <div className="course__enroll-btn">
            <button
              onClick={handleEnroll}
              className="e-btn e-btn-7 w-100"
              style={{ background: "#337c75" }}
            >
              Enroll <i className="far fa-arrow-right"></i>
            </button>
          </div>
        </div>
  );
};

export default CourseSidebar;
