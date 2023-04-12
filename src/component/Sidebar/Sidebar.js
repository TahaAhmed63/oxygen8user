import React from "react";
import { useNavigate } from "react-router-dom";
// import StripeCheckout from "react-stripe-checkout";
// import BaseUrl from "../BaseUrl/BaseUrl";
// import axios from "axios";

const Sidebar = ({ id, length, img, duration, price }) => {
  const img_link = localStorage.getItem("image_link");
  const navigate = useNavigate();

  // const userToken = localStorage.getItem("accesstoken");

  function handleLogin() {
    navigate("/signin");
  }

  // const onToken = async (token) => {
  //   try {
  //     const data1 = new FormData();
  //     data1.append("plan_id", id);
  //     data1.append("source", token.id);
  //     var config = {
  //       method: "post",
  //       url: `${BaseUrl.baseurl}/user/subscription`,
  //       data: data1,
  //       headers: {
  //         Accept: "application/json",
  //         Authorization: `Bearer ${userToken}`,
  //       },
  //     };
  //     const response = await axios(config);
  //     console.log(response);
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };
  return (
    <div className="course__video">
      <div
        className="course__video-thumb w-img mb-25 "
        style={{ position: "relative" }}
      >
        <img src={`${img_link}${img}`} alt="" />
      </div>
      <div className="course__video-meta mb-25 d-flex align-items-center justify-content-between">
        <div className="course__video-price">
          <h5>${price}</h5>
        </div>
      </div>
      <div className="course__video-content mb-35">
        <ul>
          <li className="d-flex align-items-center">
            <div className="course__video-info">
              <h5>
                <span>Video :</span>
                {length}
              </h5>
            </div>
          </li>
          <li className="d-flex align-items-center">
            <div className="course__video-info">
              <h5>
                <span>Duration :</span>
                {duration}
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
        {/* {userToken ? (
          <StripeCheckout
            token={onToken}
            stripeKey="pk_test_51MdqNVAOm2Y7pmXtOPM7GnEqm0icL0bkvRAKxCdVUjnRyIKkDh5HGnVexJGiDG48c9B4kLQKxIVwCCC4DyTjdP0o00FWouzEvv"
            amount={price*100}
          >
            <button className="e-btn e-btn-7 w-100">
              Enroll <i className="far fa-arrow-right"></i>
            </button>
          </StripeCheckout>
        ) : (
          <button
            className="e-btn e-btn-7 w-100"
            style={{ background: "#337c75" }}
            onClick={handleLogin}
          >
            login{" "}
          </button>
        )} */}
        <button
            className="e-btn e-btn-7 w-100"
            style={{ background: "#337c75" }}
            onClick={handleLogin}
          >
            Enroll <i className="far fa-arrow-right"></i>
          </button>
      </div>
    </div>
  );
};

export default Sidebar;
