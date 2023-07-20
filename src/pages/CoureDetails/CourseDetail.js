import React from "react";
import Footer from "../../component/Footer/Footer";
import Headers from "../../component/Header/Header";
import { Link, useParams } from "react-router-dom";
import Chapter from "../../component/Chapter/Chapter";
import DetailSkeleton from "../../component/Skeleton/DetailSkeleton";
import { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import BaseUrl from "../../component/BaseUrl/BaseUrl";
// import CourseSidebar from "../../component/Sidebar/CourseSidebar";
import StripeCheckout from "react-stripe-checkout";
import { ColorRing } from "react-loader-spinner";
import toast, { Toaster } from "react-hot-toast";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useNavigate } from "react-router-dom";

const CourseDetail = () => {
  const img_link = localStorage.getItem("image_link");
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);
  const [loading, setLoading] = useState(false);
  const [btnLoader, setBtnLoader] = useState(false);
  const [btnLoader1, setBtnLoader1] = useState(false);
  const [code, setCode] = useState("");
  const [percentage, setPercentage] = useState(null);
  const [coupon_id, setCoupon_id] = useState(null);
  const [course, setCourse] = useState();
  const [monthly, setMonthly] = useState([]);
  const [yearly, setYearly] = useState([]);
  // const [, setSubscription] = useState();
  const userToken = localStorage.getItem("accesstoken");
  const { id } = useParams();
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleClose1 = () => setShow1(false);
  // const handleShow1 = () => setShow1(true);


  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    courseApi();
    // eslint-disable-next-line
  }, []);

  const courseApi = async () => {
    setBtnLoader(false);
    setBtnLoader1(false);
    setLoading(true);
    try {
      var config = {
        method: "get",
        url: `${BaseUrl.baseurl}/user/course/${id}`,
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${userToken}`,
        },
      };
      // var config1 = {
      //   method: "get",
      //   url: `${BaseUrl.baseurl}/user/subscription/course/${id}`,
      //   headers: {
      //     Accept: "application/json",
      //     Authorization: `Bearer ${userToken}`,
      //   },
      // };
      const response = await axios(config);
      // const response1 = await axios(config1);
      // setSubscription(response1.data);
      console.log(response, "course detaik");
      setCourse(response.data.course);
      setMonthly(
        response.data.course.packages.filter((item) => item.period === "month")
      );
      setYearly(
        response.data.course.packages.filter((item) => item.period === "year")
      );
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error?.response?.message);
    }
  };

  const handleCoupen = async () => {
    if (code) {
      setBtnLoader(true);
      try {
        var config = {
          method: "get",
          url: `${BaseUrl.baseurl}/user/subscription/coupon/${code}`,
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${userToken}`,
          },
        };
        const response = await axios(config);
        setCoupon_id(response.data.coupon.id);
        setPercentage(response.data.coupon.percentage);
        handleShow();
        setCode("");
        setBtnLoader(false);
      } catch (error) {
        setBtnLoader(false);
        setCode("");
        Swal.fire({
          title: "Oops",
          text: `${error?.response?.data?.message}`,
          icon: "error",
          button: "Ok",
        });
      }
    } else {
      toast.error("first enter a coupon code");
    }
  };

  const onToken = async (token) => {
    setBtnLoader1(true);

    try {
      const data1 = new FormData();
      data1.append("plan_id", yearly[0]?.id);
      data1.append("source", token.id);
      data1.append("type", "plan");
      data1.append("coupon_id", coupon_id);
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
        title: "Good Job",
        text: response?.data?.message,
        icon: "success",
        button: "Ok",
      });
      handleClose();
      courseApi();
    } catch (e) {
      console.log(e);
      setBtnLoader1(false);
      handleClose();
      Swal.fire({
        title: "Oops!",
        text: e?.response?.data?.message,
        icon: "error",
        button: "Ok",
      });
    }
  };

  // const handleCoupen1 = async () => {
  //   if (code) {
  //     setBtnLoader(true);
  //     try {
  //       var config = {
  //         method: "get",
  //         url: `${BaseUrl.baseurl}/user/subscription/coupon/${code}`,
  //         headers: {
  //           Accept: "application/json",
  //           Authorization: `Bearer ${userToken}`,
  //         },
  //       };
  //       const response = await axios(config);
  //       setCoupon_id(response.data.coupon.id);
  //       setPercentage(response.data.coupon.percentage);
  //       handleShow1();
  //       setCode("");
  //       setBtnLoader(false);
  //     } catch (error) {
  //       setBtnLoader(false);
  //       setCode("");
  //       Swal.fire({
  //         title: "Oops",
  //         text: `${error?.response?.data?.message}`,
  //         icon: "error",
  //         button: "Ok",
  //       });
  //     }
  //   } else {
  //     toast.error("first enter a coupon code");
  //   }
  // };

  const onToken1 = async (token) => {
    setBtnLoader1(true);
    try {
      const data1 = new FormData();
      data1.append("plan_id", monthly[0]?.id);
      data1.append("source", token.id);
      data1.append("type", "plan");
      data1.append("coupon_id", coupon_id);
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
        title: "Good Job",
        text: response?.data?.message,
        icon: "success",
        button: "Ok",
      });
      handleClose();
      courseApi();
    } catch (e) {
      setBtnLoader1(false);
      handleClose();
      Swal.fire({
        title: "Oops!",
        text: e?.response?.data?.message,
        icon: "error",
        button: "Ok",
      });
    }
  };

  const checktoken = () => {
    navigate("/signin");
  };

  // const lectureLengths = course?.chapters?.map(
  //   (item) => item?.lectures?.length
  // );
// const chapterlength=course?.chapters.length
// console.log(chapterlength +"chapter length")
const chapters = course?.chapters;

const chapterLength = chapters?.filter(chapter => chapter.lectures.length > 0).length;

console.log(chapterLength +"CHPTER2VIDEs")



  return (
    <>
      <Headers />
      {loading ? (
        <DetailSkeleton />
      ) : (
        <main>
          <section className="page__title-area pt-120 pb-90">
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
                      <h5 className="page__title-3 text-start">
                        {course?.name}
                      </h5>
                    </div>
                    <div className="course__meta-2 d-sm-flex mb-30"></div>
                    <div className="course__img w-img mb-30 ">
                      <img
                        src={`${img_link}${course?.image}`}
                        alt=""
                        style={{ height: "400px", objectFit: "contain" }}
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
                          <div className="course__description">
                            <h3 style={{ textAlign: "left" }}>
                              Course Overview
                            </h3>
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
                          {course?.chapters?.map((item,index) => {
  if (item.lectures.length > 0) {
    return <Chapter item={item} buy={course?.pack} id={index+1} />;
  }
  return null;
})}
                            {
                            // lectureLengths !==0 ?
                            //   course?.chapters?.map((item) =>{ 
                             
                            //     <Chapter item={item} buy={course?.pack} chapterLength={chapterlength}/>
                            // })
                              // :null
                              }
                           {/* {  const lectur = e?.filter((lec)=> {lec?.lectures?.length > 0}
                             console.log(lectur,"lectrure")
                           
                           )} */}

                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {course?.pack ? (
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
                            <div className="course__video">
                              {/* <div
                                className="course__video-thumb w-img mb-25"
                                style={{ position: "relative" }}
                              >
                                <img
                                  src={`${img_link}${course?.image}`}
                                  alt=""
                                />
                              </div> */}
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
                                        
                                       {
                                        chapterLength
                                       }
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
                  // side bar yealy and monthly
                  <div className="col-xxl-4 col-xl-4 col-lg-4">
                    <div className="course__sidebar pl-70 p-relative">
                      <div className="course__shape">
                        {/* <div className="course__tab-2 mb-45 ">
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
                        </div> */}

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
                                <div className="course__video">
                                  {/* <div
                                    className="course__video-thumb w-img mb-25"
                                    style={{ position: "relative" }}
                                  >
                                    <img
                                      src={`${img_link}${course?.image}`}
                                      alt=""
                                    />
                                  </div> */}
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
                                            <span>Chapters :</span>

                                            {/* {course?.chapters
                                              ? course?.chapters?.length
                                              : 0} */}
                                              {chapterLength}
                                          </h5>
                                        </div>
                                      </li>
                                      {/* <li className="d-flex align-items-center">
                                        <div className="course__video-info">
                                          <h5>
                                            <span>Duration :</span>
                                            {yearly[0]
                                              ? `${yearly[0]?.duration} ${yearly[0]?.period}`
                                              : 0}
                                          </h5>
                                        </div>
                                      </li> */}

                                      <li className="d-flex align-items-center">
                                        <div className="course__video-info">
                                          <h5>
                                            <span>Language :</span>English
                                          </h5>
                                        </div>
                                      </li>
                                      <li className="d-flex-column align-items-center ">
                                        <h5>
                                          <span>Discount Code</span>
                                        </h5>
                                        <input
                                          type="text"
                                          className="form-control"
                                          value={code}
                                          placeholder="Enter your Discount Code"
                                          onChange={(e) =>
                                            setCode(e.target.value)
                                          }
                                        />
                                        <button
                                          onClick={handleCoupen}
                                          className="e-btn e-btn-7 w-100 mt-2"
                                          style={{ background: "#337c75" }}
                                        >
                                          {btnLoader === true ? (
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
                                            "Submit"
                                          )}
                                        </button>
                                      </li>
                                    </ul>
                                  </div>

                                  <div className="course__enroll-btn">
                                    {userToken ? (
                                      <StripeCheckout
                                        token={onToken}
                                        stripeKey="pk_test_51MdqNVAOm2Y7pmXtOPM7GnEqm0icL0bkvRAKxCdVUjnRyIKkDh5HGnVexJGiDG48c9B4kLQKxIVwCCC4DyTjdP0o00FWouzEvv"
                                        amount={
                                          percentage
                                            ? yearly[0]?.price * 100 -
                                              yearly[0]?.price *
                                                100 *
                                                (percentage / 100)
                                            : yearly[0]?.price * 100
                                        }
                                      >
                                        <button
                                          className="e-btn e-btn-7 w-100"
                                          style={{ background: "#337c75" }}
                                        >
                                          {btnLoader1 === true ? (
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
                                    ) : (
                                      <button
                                        onClick={() => {
                                          checktoken();
                                        }}
                                        className="e-btn e-btn-7 w-100"
                                        style={{ background: "#337c75" }}
                                      >
                                        Buy
                                      </button>
                                    )}
                                  </div>
                                </div>
                              </div>
                            </div>

                            {/* <div
                              class="tab-pane fade"
                              id="monthly"
                              role="tabpanel"
                              aria-labelledby="monthly-tab"
                            >
                              <div
                                className="course__sidebar-widget-2 white-bg mb-20"
                               
                                id="yearly"
                                role="tabpanel"
                                aria-labelledby="yearly-tab"
                              >
                                <div className="course__video">
                                  <div
                                    className="course__video-thumb w-img mb-25"
                                    style={{ position: "relative" }}
                                  >
                                    <img
                                      src={`${img_link}${course?.image}`}
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
                                            <span>chapters :</span>

                                          
                                              {chapterLength}
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
                                            <span>Language :</span>English
                                          </h5>
                                        </div>
                                      </li>
                                      <li className="d-flex-column align-items-center ">
                                        <h5>
                                          <span>Discount Code</span>
                                        </h5>
                                        <input
                                          type="text"
                                          className="form-control"
                                          value={code}
                                          placeholder="Enter your Discount Code"
                                          onChange={(e) =>
                                            setCode(e.target.value)
                                          }
                                        />
                                        <button
                                          onClick={handleCoupen1}
                                          className="e-btn e-btn-7 w-100 mt-3"
                                          style={{ background: "#337c75" }}
                                        >
                                          {btnLoader === true ? (
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
                                            "Submit"
                                          )}
                                        </button>
                                      </li>
                                    </ul>
                                  </div>

                                  <div className="course__enroll-btn">
                                    {userToken ? (
                                      <StripeCheckout
                                        token={onToken1}
                                        stripeKey="pk_test_51MdqNVAOm2Y7pmXtOPM7GnEqm0icL0bkvRAKxCdVUjnRyIKkDh5HGnVexJGiDG48c9B4kLQKxIVwCCC4DyTjdP0o00FWouzEvv"
                                        amount={
                                          percentage
                                            ? monthly[0]?.price * 100 -
                                              monthly[0]?.price *
                                                100 *
                                                (percentage / 100)
                                            : monthly[0]?.price * 100
                                        }
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
                                    ) : (
                                      <button
                                        onClick={() => {
                                          checktoken();
                                        }}
                                        className="e-btn e-btn-7 w-100"
                                        style={{ background: "#337c75" }}
                                      >
                                        Buy
                                      </button>
                                    )}
                                  </div>
                                </div>
                              </div>
                            </div> */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </section>
          <Toaster position="top-right" reverseOrder={false} />
          <Modal
            show={show}
            onHide={handleClose}
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
            <Modal.Header>
              <Modal.Title>
                <h5>Coupon Information</h5>
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <h5>{`You get a ${percentage}% off for this course`}</h5>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <StripeCheckout
                token={onToken}
                stripeKey="pk_test_51MdqNVAOm2Y7pmXtOPM7GnEqm0icL0bkvRAKxCdVUjnRyIKkDh5HGnVexJGiDG48c9B4kLQKxIVwCCC4DyTjdP0o00FWouzEvv"
                amount={
                  percentage
                    ? yearly[0]?.price * 100 -
                      yearly[0]?.price * 100 * (percentage / 100)
                    : yearly[0]?.price * 100
                }
              >
                <button
                  className="e-btn e-btn-7 w-100"
                  style={{ background: "#337c75" }}
                >
                  {btnLoader1 === true ? (
                    <ColorRing
                      visible={true}
                      height="40"
                      width="40"
                      ariaLabel="blocks-loading"
                      wrapperStyle={{}}
                      wrapperClass="blocks-wrapper"
                      colors={["#fff", "#fff", "#fff", "#fff", "#fff"]}
                    />
                  ) : (
                    "Buy"
                  )}
                </button>
              </StripeCheckout>
            </Modal.Footer>
          </Modal>
          <Modal
            show={show1}
            onHide={handleClose1}
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
            <Modal.Header>
              <Modal.Title>
                <h5>Coupon Information</h5>
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <h5>{`You get a ${percentage}% off for this course`}</h5>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose1}>
                Close
              </Button>
              <StripeCheckout
                token={onToken1}
                stripeKey="pk_test_51MdqNVAOm2Y7pmXtOPM7GnEqm0icL0bkvRAKxCdVUjnRyIKkDh5HGnVexJGiDG48c9B4kLQKxIVwCCC4DyTjdP0o00FWouzEvv"
                amount={
                  percentage
                    ? monthly[0]?.price * 100 -
                      monthly[0]?.price * 100 * (percentage / 100)
                    : monthly[0]?.price * 100
                }
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
                      colors={["#fff", "#fff", "#fff", "#fff", "#fff"]}
                    />
                  ) : (
                    "Buy"
                  )}
                </button>
              </StripeCheckout>
            </Modal.Footer>
          </Modal>
        </main>
      )}

      <Footer />
    </>
  );
};

export default CourseDetail;
