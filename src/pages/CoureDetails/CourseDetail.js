/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import Footer from "../../component/Footer/Footer";
import Headers from "../../component/Header/Header";
import { Link, useParams } from "react-router-dom";
import Chapter from "../../component/Chapter/Chapter";
import { useEffect, useState } from "react";
import axios from "axios";
import BaseUrl from "../../component/BaseUrl/BaseUrl";

const CourseDetail = () => {
  const img_link = localStorage.getItem("image_link");

  const [loading, setLoading] = useState(false);
  const [course, setCourse] = useState();


  const param = useParams();
  const { id } = param;


  useEffect(() => {
    courseApi();
  }, []);
  // const token = localStorage.getItem("accesstoken");

  // const courseapi = () => {
  //   setLoader(true);

  //   var config = {
  //     method: "get",
  //     url: `${BaseUrl.baseurl}/user/course/${id}`,
     
  //   };

  //   axios(config)
  //     .then(function (response) {
  //    console.log(response)
  //    setCourse(response.data.course)
  //       setLoader(false);
  //     })
  //     .catch(function (error) {
  //       setLoader(false);

  //       console.log(error);
  //     });
  // };

  const  courseApi= async ()=> {
    setLoading(true);
    try {
      const response = await axios.get(`${BaseUrl.baseurl}/user/course/${id}`);
      setLoading(false);
      console.log(response.data);
      setCourse(response.data.course);
      console.log(response);
    } catch (error) {
      setLoading(false);
      console.log(error?.response?.message);
    }
  }
 

  // const arr = [1, 2, 3, 4, 5];
  return (
    <div>
      <Headers />
      <main>
        <section className="page__title-area pt-120 pb-90">
          <div className="page__title-shape">
            <img
              className="page-title-shape-5 d-none d-sm-block"
              src="/assets/img/page-title/page-title-shape-1.png"
              alt=""
            />
            <img
              className="page-title-shape-6"
              src="/assets/img/page-title/page-title-shape-6.png"
              alt=""
            />
            <img
              className="page-title-shape-7"
              src="/assets/img/page-title/page-title-shape-4.png"
              alt=""
            />
          </div>
          <div className="container">
            <div className="row">
              <div className="col-xxl-8 col-xl-8 col-lg-8">
                <div className="course__wrapper">
                  <div className="page__title-content mb-25">
                    <div className="page__title-breadcrumb">
                      <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                          <li className="breadcrumb-item">
                            <Link to="/">Home</Link>
                          </li>
                          <li className="breadcrumb-item">
                            <Link to="/courses">Courses</Link>
                          </li>
                          <li
                            className="breadcrumb-item active"
                            aria-current="page"
                          >
                             {course?.name}
                          </li>
                        </ol>
                      </nav>
                    </div>
                    <h5 className="page__title-3" style={{ textAlign: "left" }}>
                      {course?.name}
                    </h5>
                  </div>
                  <div className="course__meta-2 d-sm-flex mb-30"></div>
                  <div className="course__img w-img mb-30">
                    <img src={`${img_link}${course?.image}`} alt="" />
                  </div>
                  <div className="course__tab-2 mb-45">
                    <ul className="nav nav-tabs" id="courseTab" role="tablist">
                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link active"
                          id="description-tab"
                          data-bs-toggle="tab"
                          data-bs-target="#description"
                          type="button"
                          role="tab"
                          aria-controls="description"
                          aria-selected="true"
                        >
                          {" "}
                          <i className="icon_ribbon_alt"></i>{" "}
                          <span>Discription</span>{" "}
                        </button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link "
                          id="curriculum-tab"
                          data-bs-toggle="tab"
                          data-bs-target="#curriculum"
                          type="button"
                          role="tab"
                          aria-controls="curriculum"
                          aria-selected="false"
                        >
                          {" "}
                          <i className="icon_book_alt"></i>{" "}
                          <span>Curriculum</span>{" "}
                        </button>
                      </li>
                    </ul>
                  </div>
                  <div className="course__tab-content mb-95">
                    <div className="tab-content" id="courseTabContent">
                      <div
                        className="tab-pane fade show active"
                        id="description"
                        role="tabpanel"
                        aria-labelledby="description-tab"
                      >
                        <div className="course__description">
                          <h3 style={{ textAlign: "left" }}>Course Overview</h3>
                          <p style={{ textAlign: "left" }}>
                            {course?.description}
                          </p>
                        </div>
                      </div>
                      <div
                        class="tab-pane fade"
                        id="curriculum"
                        role="tabpanel"
                        aria-labelledby="curriculum-tab"
                      >
                        <div class="course__curriculum">

                          {course?.chapters?.map((item) => (
                            <Chapter {...item} />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xxl-4 col-xl-4 col-lg-4">
                <div className="course__sidebar pl-70 p-relative">
                  <div className="course__shape">
                  {/* <img src={`${img_link}${course?.image}`} alt='' /> */}

                  </div>
                  <div className="course__sidebar-widget-2 white-bg mb-20">
                    <div className="course__video">
                      <div className="course__video-thumb w-img mb-25">
                      <img src={`${img_link}${course?.image}`} alt='' />
                      </div>
                      <div className="course__video-meta mb-25 d-flex align-items-center justify-content-between">
                        <div className="course__video-price">
                          <h5>
                            $74.<span>00</span>{" "}
                          </h5>
                          <h5 className="old-price">$129.00</h5>
                        </div>
                      </div>
                      <div className="course__video-content mb-35">
                        <ul>
                         
                          <li className="d-flex align-items-center">
                            <div className="course__video-icon">
                              {/* <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 24 24" style="enable-background:new 0 0 24 24;" xml:space="preserve"> */}

                              <path
                                className="st0"
                                d="M4,19.5C4,18.1,5.1,17,6.5,17H20"
                              />
                              <path
                                className="st0"
                                d="M6.5,2H20v20H6.5C5.1,22,4,20.9,4,19.5v-15C4,3.1,5.1,2,6.5,2z"
                              />
                              {/* </svg> */}
                            </div>
                            <div className="course__video-info">
                              <h5>
                                <span>Chapters :</span>{course?.chapters?.length}
                              </h5>
                            </div>
                          </li>
                          <li className="d-flex align-items-center">
                            <div className="course__video-icon">
                              {/* <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 16 16" style="enable-background:new 0 0 16 16;" xml:space="preserve"> */}
                              <circle className="st0" cx="8" cy="8" r="6.7" />
                              <polyline
                                className="st0"
                                points="8,4 8,8 10.7,9.3 "
                              />
                              {/* </svg> */}
                            </div>
                            <div className="course__video-info">
                              <h5>
                                <span>Duration :</span>6 weeks
                              </h5>
                            </div>
                          </li>
                          <li className="d-flex align-items-center">
                            <div className="course__video-icon">
                              {/* <svg> */}
                              <path
                                className="st0"
                                d="M13.3,14v-1.3c0-1.5-1.2-2.7-2.7-2.7H5.3c-1.5,0-2.7,1.2-2.7,2.7V14"
                              />
                              <circle className="st0" cx="8" cy="4.7" r="2.7" />
                              {/* </svg> */}
                            </div>
                            <div className="course__video-info">
                              <h5>
                                <span>Enrolled :</span>20 students
                              </h5>
                            </div>
                          </li>
                          <li className="d-flex align-items-center">
                            <div className="course__video-icon">
                              {/* <svg> */}
                              <circle className="st0" cx="8" cy="8" r="6.7" />
                              <line
                                className="st0"
                                x1="1.3"
                                y1="8"
                                x2="14.7"
                                y2="8"
                              />
                              <path
                                className="st0"
                                d="M8,1.3c1.7,1.8,2.6,4.2,2.7,6.7c-0.1,2.5-1,4.8-2.7,6.7C6.3,12.8,5.4,10.5,5.3,8C5.4,5.5,6.3,3.2,8,1.3z"
                              />
                              {/* </svg> */}
                            </div>
                            <div className="course__video-info">
                              <h5>
                                <span>Language :</span>English
                              </h5>
                            </div>
                          </li>
                        </ul>
                      </div>

                      <div className="course__enroll-btn">
                        <a
                          href="contact.html"
                          className="e-btn e-btn-7 w-100"
                          style={{ background: "#337c75" }}
                        >
                          Enroll <i className="far fa-arrow-right"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default CourseDetail;
