/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import Header from "../../component/Header/Header";
import Footer from "../../component/Footer/Footer";
import { Link, useNavigate, useParams } from "react-router-dom";
import StripeCheckout from "react-stripe-checkout";
// import Video from '../../component/VideoList/VideoList'
import DetailSkeleton from "../../component/Skeleton/DetailSkeleton";
import { ColorRing } from "react-loader-spinner";
import { useEffect, useState } from "react";
import axios from "axios";
import BaseUrl from "../../component/BaseUrl/BaseUrl";
import VideoList from "../../component/VideoList/VideoList";
import Swal from "sweetalert2";

const VideoLibraryDetail = () => {
  // const arr=[1,2,3,4]

  const { id } = useParams();
  const navigate = useNavigate();
  const img_link = localStorage.getItem("image_link");

  const [loading, setLoading] = useState(false);
  const [monthly, setMonthly] = useState([]);
  const [yearly, setYearly] = useState([]);
  const [video, setVideo] = useState();
  const [, setSubscription] = useState();
  const userToken = localStorage.getItem("accesstoken");

  useEffect(() => {
    if (!userToken) {
      navigate("/signin");
    }
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
      var config1 = {
        method: "get",
        url: `${BaseUrl.baseurl}/user/subscription/playlist/${id}`,
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${userToken}`,
        },
      };
      const response = await axios(config);
      const response1 = await axios(config1);
      setLoading(false);
      setSubscription(response1.data);
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

  const onToken = async (token) => {
    setLoading(true);
    try {
      const data1 = new FormData();
      data1.append("plan_id", yearly[0]?.id);
      data1.append("source", token.id);
      data1.append("bulk_id", '');
      data1.append("type", 'plan');
      var config = {
        method: "post",
        url: `${BaseUrl.baseurl}/user/subscription`,
        data: data1,
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${userToken}`,
        },
      };
      const response = await axios(config);
      Swal.fire({
        title: "Good job!",
        text: response.message,
        icon: "success",
        button: "Ok",
      });
      console.log(response);
      videoApi();
    } catch (e) {
     
      Swal.fire({
        title: "Good job!",
        text: e.message,
        icon: "success",
        button: "Ok",
      });
    }
  };

  const onToken1 = async (token) => {
    try {
      const data1 = new FormData();
      data1.append("plan_id", monthly[0]?.id);
      data1.append("source", token.id);
      data1.append("bulk_id", '');
      data1.append("type", 'plan');
      var config = {
        method: "post",
        url: `${BaseUrl.baseurl}/user/subscription`,
        data: data1,
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${userToken}`,
        },
      };
      const response = await axios(config);
      console.log(response);
      videoApi();
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div>
      <Header />
      {loading ? (
        <DetailSkeleton />
      ) : (
        <main>
          <section className="page__title-area pt-120 pb-90">
            {/* <div className="page__title-shape">
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
            </div> */}
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
                              <Link  to="/videolibrary">Oxygen8TM Library</Link>
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
                      <h5 className="page__title-3 text-start">
                        {video?.name}
                      </h5>
                    </div>
                    <div className="course__meta-2 d-sm-flex mb-30"></div>
                    <div className="course__img w-img mb-30">
                      <img
                        src={`${img_link}${video?.image}`}
                        alt=""
                        width={450}
                        height={500}
                        
                      />
                    </div>
                    <div className="course__tab-2 mb-45">
                      <ul
                        className="nav nav-tabs"
                        id="courseTab"
                        role="tablist"
                      >
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
                            <span>Description</span>{" "}
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
                            <span>Overview</span>{" "}
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
                            {/* <h3>Video Library Overview</h3> */}
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
                                          {video?.playlist_videos?.map(
                                            (item) => (
                                              <VideoList item={item} buy={video?.pack} />
                                            )
                                          )}
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

                {video?.pack ? (
                  // after course buy card
                  <div className="col-xxl-4 col-xl-4 col-lg-4">
                    <div className="course__sidebar pl-70 p-relative">
                      <div className="course__shape">
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
                            {/* <CourseSidebar
                        courseID={id}
                        id={yearly[0]?.id}
                          length={video.chapters?.length}
                          img={video.image}
                          duration={`${yearly[0]?.duration} ${yearly[0]?.period}`}
                          price={yearly[0]?.price}
                          buy={subscription?.subscription?.plan?.period === 'year' ? true : false}
                          loading={loading}
                          api={courseApi}
                          /> */}

                            <div className="course__video">
                              <div
                                className="course__video-thumb w-img mb-25"
                                style={{ position: "relative" }}
                              >
                                <img src={`${img_link}${video.image}`} alt="" />
                              </div>
                              <div className="course__video-meta mb-25 d-flex align-items-center justify-content-between">
                                <div className="course__video-price">
                                  <h5>Course Information</h5>
                                </div>
                              </div>
                              <div className="course__video-content mb-35">
                                <ul>
                                  <li className="d-flex align-items-center">
                                    <div className="course__video-info">
                                      <h5>
                                        <span>Total chapters :</span>
                                        {video.playlist_videos
                                          ? video.playlist_videos?.length
                                          : 0}
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
                                  className="e-btn e-btn-7 w-100"
                                  style={{ background: "#337c75" }}
                                >
                                  {loading === true ? (
                                    <ColorRing
                                      visible={true}
                                      height="40"
                                      width="40"
                                      ariaLabel="blocks-loading"
                                      wrapperStyle={{}}
                                      wrapperClass="blocks-wrapper"
                                      colors={[
                                        "#fff",
                                        "#fff",
                                        "#fff",
                                        "#fff",
                                        "#fff",
                                      ]}
                                    />
                                  ) : (
                                    "Your are Enrolled"
                                  )}
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
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
                                {" "}
                                <i className="icon_book_alt"></i>{" "}
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
                                {" "}
                                <i className="fa fa-calendar"></i>{" "}
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
                                {/* <Sidebar
                            id={yearly[0]?.id}
                            length={video?.playlist_videos?.length}
                            img={video?.image}
                            duration={`${yearly[0]?.duration} ${yearly[0]?.period}`}
                            price={yearly[0]?.price}
                            buy={subscription?.subscription?.plan?.period === 'year' ? true : false}
                          /> */}
                                <div className="course__video">
                                  <div
                                    className="course__video-thumb w-img mb-25"
                                    style={{ position: "relative" }}
                                  >
                                    <img
                                      src={`${img_link}${video?.image}`}
                                      alt=""
                                    />
                                  </div>
                                  <div className="course__video-meta mb-25 d-flex align-items-center justify-content-between">
                                    <div className="course__video-price">
                                      <h5>
                                      £{yearly[0] ? yearly[0]?.price : 0}
                                      </h5>
                                    </div>
                                  </div>
                                  <div className="course__video-content mb-35">
                                    <ul>
                                      <li className="d-flex align-items-center">
                                        <div className="course__video-info">
                                          <h5>
                                            <span>Videos :</span>
                                            {video?.playlist_videos
                                              ? video?.playlist_videos?.length
                                              : 0}
                                          </h5>
                                        </div>
                                      </li>
                                      <li className="d-flex align-items-center">
                                        <div className="course__video-info">
                                          <h5>
                                            <span>Duration :</span>
                                            {yearly[0]
                                              ? `${yearly[0]?.duration} ${yearly[0]?.period}`
                                              : 0}
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
                                    {/* subscription?.subscription?.plan ?.period === "year" ? 
                                     //   true
                                    // : false ? 
                                    //   <button
                                    //     className="e-btn e-btn-7 w-100"
                                    //     style={{ background: "#337c75" }}
                                    //   >
                                    //     Enrolled
                                    //   </button>
                                    //  :  */}
                                    <StripeCheckout
                                      token={onToken}
                                      stripeKey="pk_test_51MdqNVAOm2Y7pmXtOPM7GnEqm0icL0bkvRAKxCdVUjnRyIKkDh5HGnVexJGiDG48c9B4kLQKxIVwCCC4DyTjdP0o00FWouzEvv"
                                      amount={yearly[0]?.price * 100}
                                    >
                                      <button
                                        className="e-btn e-btn-7 w-100"
                                        style={{ background: "#337c75" }}
                                      >
                                        {loading === true ? (
                                          <ColorRing
                                            visible={true}
                                            height="40"
                                            width="40"
                                            ariaLabel="blocks-loading"
                                            wrapperStyle={{}}
                                            wrapperClass="blocks-wrapper"
                                            colors={[
                                              "#fff",
                                              "#fff",
                                              "#fff",
                                              "#fff",
                                              "#fff",
                                            ]}
                                          />
                                        ) : (
                                          "Buy"
                                        )}
                                      </button>
                                    </StripeCheckout>
                                    {/* } */}
                                  </div>
                                </div>
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
                                {/* {
                            <Sidebar
                            id={monthly[0]?.id}
                              length={video?.playlist_videos?.length}
                              img={video?.image}
                              duration={`${monthly[0]?.duration} ${monthly[0]?.period}`}
                              price={monthly[0]?.price}
                              buy={subscription?.subscription?.plan?.period === 'month' ? true : false}
                            />
                          } */}
                                <div className="course__video">
                                  <div
                                    className="course__video-thumb w-img mb-25"
                                    style={{ position: "relative" }}
                                  >
                                    <img
                                      src={`${img_link}${video?.image}`}
                                      alt=""
                                    />
                                  </div>
                                  <div className="course__video-meta mb-25 d-flex align-items-center justify-content-between">
                                    <div className="course__video-price">
                                      <h5>
                                      £{monthly[0] ? monthly[0]?.price : 0}
                                      </h5>
                                    </div>
                                  </div>
                                  <div className="course__video-content mb-35">
                                    <ul>
                                      <li className="d-flex align-items-center">
                                        <div className="course__video-info">
                                          <h5>
                                            <span>Videos :</span>
                                            {video?.playlist_videos
                                              ? video?.playlist_videos?.length
                                              : 0}
                                          </h5>
                                        </div>
                                      </li>
                                      <li className="d-flex align-items-center">
                                        <div className="course__video-info">
                                          <h5>
                                            <span>Duration :</span>
                                            {monthly[0]
                                              ? `${monthly[0]?.duration} ${monthly[0]?.period}`
                                              : 0}
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
                                    {/* subscription?.subscription?.plan ?.period === "year" ? 
                                     //   true
                                    // : false ? 
                                    //   <button
                                    //     className="e-btn e-btn-7 w-100"
                                    //     style={{ background: "#337c75" }}
                                    //   >
                                    //     Enrolled
                                    //   </button>
                                    //  :  */}
                                    <StripeCheckout
                                      token={onToken1}
                                      stripeKey="pk_test_51MdqNVAOm2Y7pmXtOPM7GnEqm0icL0bkvRAKxCdVUjnRyIKkDh5HGnVexJGiDG48c9B4kLQKxIVwCCC4DyTjdP0o00FWouzEvv"
                                      amount={monthly[0]?.price * 100}
                                    >
                                      <button
                                        className="e-btn e-btn-7 w-100"
                                        style={{ background: "#337c75" }}
                                      >
                                        {loading === true ? (
                                          <ColorRing
                                            visible={true}
                                            height="40"
                                            width="40"
                                            ariaLabel="blocks-loading"
                                            wrapperStyle={{}}
                                            wrapperClass="blocks-wrapper"
                                            colors={[
                                              "#fff",
                                              "#fff",
                                              "#fff",
                                              "#fff",
                                              "#fff",
                                            ]}
                                          />
                                        ) : (
                                          "Buy"
                                        )}
                                      </button>
                                    </StripeCheckout>
                                    {/* } */}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </section>
        </main>
      )}
      <Footer />
    </div>
  );
};

export default VideoLibraryDetail;
