/* eslint-disable react-hooks/exhaustive-deps */

// import Card from "../../component/Card/Card";
import Footer from "../../component/Footer/Footer";
import Header from "../../component/Header/Header";
// import { Link } from "react-router-dom";
// import axios from "axios";
// import { useState, useEffect } from "react";
// import BaseUrl from "../../component/BaseUrl/BaseUrl";
// import CardSkeleton from "../../component/Skeleton/CardSkeleton";
import { Contact } from "./Components/Contact";
import {Col} from 'react-bootstrap'
import mylogo from './Fav.png'

// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/effect-fade";
// import "swiper/css/navigation";
// import { Pagination,Navigation, EffectFade } from "swiper";
// import "swiper/css/effect-fade";
import './home.css'
import Video from "./Video/Video";
import { Container, Row } from "react-bootstrap";
import { DetailVideo } from "./Components/DetailVideo";
import { Blogs } from "./Components/Blogs";
import { LibraraySpan } from "./Components/LibraraySpan";

function Home() {
//   const [loading, setLoading] = useState(false);
//   const [course, setCourse] = useState([]);
//   const userToken = localStorage.getItem("accesstoken");
// const arr=[1,1,1,1,1,1];

//   useEffect(() => {
//     courseApi();
//   }, []);

//   const courseApi = async () => {
//     setLoading(true);
//     try {
//       var config = {
//         method: "get",
//         url: `${BaseUrl.baseurl}/user/course`,
//         headers: {
//           Accept: "application/json",
//           Authorization: `Bearer ${userToken}`,
//         },
//       };
      
//       const response = await axios(config);
//       setCourse(response.data.courses);
//       localStorage.setItem("image_link", response.data.image_link);
//       localStorage.setItem("video_link", response.data.videolink);
//       setLoading(false);

//     } catch (error) {
//       setLoading(false);
//       console.log(error?.response?.message);
//     }
//   };
  
  return (
    <main>
      <Header />
   
     
      {/* <Swiper
        spaceBetween={30}
        effect={"fade"}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Navigation, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><div className='main-div'></div><img src='https://ahgroup-pk.com/assets/images/moh_1920.jpg' alt='' className="img-fluid slider-img"/></SwiperSlide>
        <SwiperSlide><img src='https://ahgroup-pk.com/assets/images/slider.jpg' alt='' className="img-fluid slider-img"/></SwiperSlide>
       
      </Swiper> */}
     {/* <section>
        <div>
        <video src='assets/video/video1.mp4' alt="" border="3" height="50%" width="100%" autoPlay muted loop playsInline ><source src='assets/video/video1.mp4' type='video/mp4'/></video>
        </div>
      </section>
      <section className="hero__area hero__height d-flex align-items-center grey-bg-2 p-relative">
        <div className="hero__shape">
          <img
            className="hero-1-circle"
            src="assets/img/shape/hero/hero-1-circle.png"
            alt=""
          />
          <img
            className="hero-1-circle-2"
            src="assets/img/shape/hero/hero-1-circle-2.png"
            alt=""
          />
          <img
            className="hero-1-dot-2"
            src="assets/img/shape/hero/hero-1-dot-2.png"
            alt=""
          />
        </div>
        <div className="container">
          <div className="hero__content-wrapper mt-90">
            <div className="row align-items-center">
              <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                <div
                  className="hero__content p-relative z-index-1 text-start"
                >
                  <h3 className="hero__title">
                    <span>Access 2700+</span>
                    <span className="yellow-shape">
                      Online{" "}
                      <img
                        src="assets/img/shape/yellow-bg.png"
                        alt="yellow-shape"
                      />{" "}
                    </span>
                    Tutorial From Top Instructor.
                  </h3>
                  <p>
                    Meet university,and cultural institutions, who'll share
                    their experience.
                  </p>
                  <Link
                    to="/videolibrary"
                    href="course-grid.html"
                    className="e-btn"
                    style={{ backgroundColor: "#337c75" }}
                  >
                    View all Video Library
                  </Link>
                </div>
              </div>
              <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                <div className="hero__thumb d-flex p-relative">
                  <div className="hero__thumb-shape">
                    <img
                      className="hero-1-dot"
                      src="assets/img/shape/hero/hero-1-dot.png"
                      alt=""
                    />
                    <img
                      className="hero-1-circle-3"
                      src="assets/img/shape/hero/hero-1-circle-3.png"
                      alt=""
                    />
                    <img
                      className="hero-1-circle-4"
                      src="assets/img/shape/hero/hero-1-circle-4.png"
                      alt=""
                    />
                  </div>
                  <div className="hero__thumb-big mr-30">
                    <img src="assets/img/shape/fitness3.jpg" alt="" />
                    <div className="hero__quote hero__quote-animation">
                      <span>Tomorrow is our</span>
                      <h4>“When I Grow Up” Spirit Day!</h4>
                    </div>
                  </div>
                  <div className="hero__thumb-sm mt-50 d-none d-lg-block">
                    <img src="assets/img/shape/fitness2.jpg" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </section> */}
    <div className="main-video">
      <section className="home-main">
        
      <Video/>

      </section>
     
      </div>
     <section className="about-home">
  
      <Container>
        <Row  >
          <Col md={12} xs={12}>
   

            <div className="header-wrap">
            <div className="about-head">
          <h4>
          Welcome to Oxygen8 Stress Wellness

          </h4>
           </div>
           <div className="logo">
             <img src={mylogo} alt=''/>
           </div>
            </div>
          
          
          </Col>
        <Col md={12}>
 
        <div className="para-wrap">
            <p>
            Whether you are looking for stress or anxiety management, burnout recovery, or resilience building, Oxygen8 offers a comprehensive and integrative approach to dealing with the stresses of life. We offer you the tools to directly regulate your nervous system in both the short and long term using Conscious Nervous System Feedback (CNSF) and Optimising exercises. These methods become an arsenal of quick-fire techniques that cover you anytime, anywhere.            </p>
          </div>
        
        </Col>
        </Row>
      </Container>

     </section>

<DetailVideo/>
<Blogs/>
<LibraraySpan/>
<Contact/>

      {/* <section className="course__area pt-115 pb-120 grey-bg">
        <div className="container">
          <div class="row align-items-end">
            <div class="col-xxl-5 col-xl-6 col-lg-6">
              <div
                class="section__title-wrapper mb-60 text-start"
              >
                <h2 class="section__title">
                  Find the Right
                  <br />
                  Online{" "}
                  <span class="yellow-bg yellow-bg-big">
                    Course
                    <img src="assets/img/shape/yellow-bg.png" alt="" />
                  </span>{" "}
                  for you
                </h2>
                <p>
                  You don't have to struggle alone, you've got our assistance
                  and help.
                </p>
              </div>
            </div>
          </div>
          <div className="row grid">
            {loading && arr.map(item=> <CardSkeleton loading={loading} />)}
            {course?.map((item) => (
              <Card {...item} />
            ))}
          </div>
        </div>
      </section> */}

      <Footer />
    </main>
  );
}
export default Home;
