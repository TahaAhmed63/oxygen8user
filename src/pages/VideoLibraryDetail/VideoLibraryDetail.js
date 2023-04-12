/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import Header from "../../component/Header/Header";
import Footer from "../../component/Footer/Footer";
import { Link, useParams } from "react-router-dom";
// import Video from '../../component/VideoList/VideoList'
import { useEffect, useState } from "react";
import axios from "axios";
import BaseUrl from "../../component/BaseUrl/BaseUrl";
import Sidebar from "../../component/Sidebar/Sidebar";
import VideoList from "../../component/VideoList/VideoList";

const VideoLibraryDetail = () => {
  // const arr=[1,2,3,4]

  const { id } = useParams();

  const img_link = localStorage.getItem("image_link");

  const [, setLoading] = useState(false);
  const [monthly, setMonthly] = useState([]);
  const [yearly, setYearly] = useState([]);
  const [video, setVideo] = useState();
  const userToken = localStorage.getItem("accesstoken");


  useEffect(() => {
    videoApi();
  }, []);

  async function videoApi() {
    setLoading(true);
    try {
      var config = {
        method: "get",
        url: `${BaseUrl.baseurl}/user/playlist/${id}`,
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${userToken}`,
        },
      };
      const response = await axios(config);
      setLoading(false);
      setVideo(response.data.playlist);
      console.log(response.data);
      setMonthly(
        response.data.playlist.playlist_package.filter(
          (item) => item.period === "month"
        )
      );
      setYearly(
        response.data.playlist.playlist_package.filter(
          (item) => item.period === "year"
        )
      );
      console.log(response);
    } catch (error) {
      setLoading(false);
      console.log(error?.response?.message);
    }
  }

  return (
    <div>
      <Header />
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
                            <Link to="/videolibrary">Video Library</Link>
                          </li>
                          <li
                            className="breadcrumb-item active"
                            aria-current="page"
                          >
                            {video?.name}
                          </li>
                        </ol>
                      </nav>
                    </div>
                    <h5 className="page__title-3 text-start">{video?.name}</h5>
                  </div>
                  <div className="course__meta-2 d-sm-flex mb-30"></div>
                  <div className="course__img w-img mb-30">
                    <img src={`${img_link}${video?.image}`} alt="" />
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
                        <div className="course__description text-start">
                          <h3>Video Library Overview</h3>
                          <p>{video?.description}</p>
                        </div>
                      </div>
                      <div
                        class="tab-pane fade"
                        id="curriculum"
                        role="tabpanel"
                        aria-labelledby="curriculum-tab"
                      >
                        <div class="course__curriculum">
                          {/* video list */}
                          <div className="row">
                            <div className="col-xxl-12">
                              <div className="course__tab-conent">
                                <div
                                  className="tab-content"
                                  id="courseTabContent"
                                >
                                  <div
                                    className="tab-pane fade show active"
                                    id="grid"
                                    role="tabpanel"
                                    aria-labelledby="grid-tab"
                                  >
                                    <div className="row">
                                      {video?.playlist_videos?.map((item) => (
                                        <VideoList {...item} />
                                      ))}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xxl-4 col-xl-4 col-lg-4">
                <div className="course__sidebar pl-70 p-relative">
                  <div className="course__shape">
                    <div className="course__tab-2 mb-45 ">
                      <ul
                        className="nav nav-tabs"
                        id="courseTab"
                        role="tablist"
                      >
                        <li className="nav-item w-50" role="presentation">
                          <button
                            className="nav-link active"
                            id="yearly-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#yearly"
                            type="button"
                            role="tab"
                            aria-controls="yearly"
                            aria-selected="true"
                          >
                            <span>Yearly</span>{" "}
                          </button>
                        </li>
                        <li className="nav-item w-50" role="presentation">
                          <button
                            className="nav-link "
                            id="monthly-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#monthly"
                            type="button"
                            role="tab"
                            aria-controls="monthly"
                            aria-selected="false"
                          >
                            <span>Monthly</span>{" "}
                          </button>
                        </li>
                      </ul>
                    </div>

                    <div className="course__tab-content mb-95">
                      <div className="tab-content" id="courseTabContent">
                        <div
                          class="tab-pane fade show active"
                          id="yearly"
                          role="tabpanel"
                          aria-labelledby="yearly-tab"
                        >
                          <div
                            className="course__sidebar-widget-2 white-bg mb-20"
                            // className="tab-pane fade show active"
                            id="yearly"
                            role="tabpanel"
                            aria-labelledby="yearly-tab"
                          >
                            <Sidebar
                            id={yearly[0]?.id}
                              length={video?.playlist_videos?.length}
                              img={video?.image}
                              duration={`${yearly[0]?.duration} ${yearly[0]?.period}`}
                              price={yearly[0]?.price}
                            />
                          </div>
                        </div>

                        <div
                          class="tab-pane fade"
                          id="monthly"
                          role="tabpanel"
                          aria-labelledby="monthly-tab"
                        >
                          <div
                            className="course__sidebar-widget-2 white-bg mb-20"
                            // className="tab-pane fade show active"
                            id="yearly"
                            role="tabpanel"
                            aria-labelledby="yearly-tab"
                          >
                            {
                              <Sidebar
                              id={monthly[0]?.id}
                                length={video?.playlist_videos?.length}
                                img={video?.image}
                                duration={`${monthly[0]?.duration} ${monthly[0]?.period}`}
                                price={monthly[0]?.price}
                              />
                            }
                            {/* <div className="course__video">
                              <div className="course__video-thumb w-img mb-25">
                                <img
                                  src={`${img_link}${video?.image}`}
                                  alt=""
                                />
                              </div>
                              <div className="course__video-meta mb-25 d-flex align-items-center justify-content-between">
                                <div className="course__video-price">
                                  <h5>${monthly[0]?.price} </h5>
                                </div>
                              </div>
                              <div className="course__video-content mb-35">
                                <ul>
                                  <li className="d-flex align-items-center">
                                    <div className="course__video-icon">
                                      <path
                                        className="st0"
                                        d="M4,19.5C4,18.1,5.1,17,6.5,17H20"
                                      />
                                      <path
                                        className="st0"
                                        d="M6.5,2H20v20H6.5C5.1,22,4,20.9,4,19.5v-15C4,3.1,5.1,2,6.5,2z"
                                      />
                                    </div>
                                    <div className="course__video-info">
                                      <h5>
                                        <span>Videos :</span>
                                        {video?.playlist_videos?.length}
                                      </h5>
                                    </div>
                                  </li>
                                  <li className="d-flex align-items-center">
                                    <div className="course__video-icon">
                                      <circle
                                        className="st0"
                                        cx="8"
                                        cy="8"
                                        r="6.7"
                                      />
                                      <polyline
                                        className="st0"
                                        points="8,4 8,8 10.7,9.3 "
                                      />
                                    </div>
                                    <div className="course__video-info">
                                      <h5>
                                        <span>Duration :</span>
                                        {`${monthly[0]?.duration} ${monthly[0]?.period}`}
                                      </h5>
                                    </div>
                                  </li>
                                  <li className="d-flex align-items-center">
                                    <div className="course__video-icon">
                                      <path
                                        className="st0"
                                        d="M13.3,14v-1.3c0-1.5-1.2-2.7-2.7-2.7H5.3c-1.5,0-2.7,1.2-2.7,2.7V14"
                                      />
                                      <circle
                                        className="st0"
                                        cx="8"
                                        cy="4.7"
                                        r="2.7"
                                      />
                                    </div>
                                    <div className="course__video-info">
                                      <h5>
                                        <span>Enrolled :</span>20 students
                                      </h5>
                                    </div>
                                  </li>
                                  <li className="d-flex align-items-center">
                                    <div className="course__video-icon">
                                      <circle
                                        className="st0"
                                        cx="8"
                                        cy="8"
                                        r="6.7"
                                      />
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
                            </div> */}
                          </div>
                        </div>
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

export default VideoLibraryDetail;
