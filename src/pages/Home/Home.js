import Footer from "../../component/Footer/Footer";
import Header from "../../component/Header/Header";

import { Contact2 } from "./Components/Contact2";
import { Col } from "react-bootstrap";
import mylogo from "./Fav.png";

import "./home.css";
import Video from "./Video/Video";
import { Container, Row } from "react-bootstrap";
import { DetailVideo } from "./Components/DetailVideo";
import { Blogs } from "./Components/Blogs";
import { LibraraySpan } from "./Components/LibraraySpan";

function Home() {


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
          <Video />
        </section>
      </div>
      <section className="about-home">
        <Container>
          <Row>
            <Col md={12} xs={12} xl={12} xxl={12}>
              <div className="header-wrap">
                <div className="about-head">
                  <h4>
                    Welcome to Oxygen8{" "}
                    <em
                      style={{
                        fontSize: "11px",
                        position: "relative",
                        bottom: "1.4rem",
                        left:"-11px",
                        fontStyle:"normal"

                      }}
                    >
                      TM
                    </em>
                    Stress Wellness
                  </h4>
                </div>
                <div className="logo">
                  <img src={mylogo} alt="" />
                </div>
              </div>
            </Col>
            <Col md={12} xs={12} xl={12} xxl={12}>
              <div className="para-wrap">
                <p
                  style={{
                    color: "#317C74"
              
                  }}
                >
                  Whether you are looking for stress or anxiety management,
                  burnout recovery, or resilience building, Oxygen8{" "}
                  <em
                    style={{
                      fontSize: "11px",
                      position: "relative",
                      bottom: "0.8rem",
                      left:"-5px",
                      fontStyle:"normal"
                    }}
                  >
                    TM
                  </em>{" "}
                  offers a comprehensive and integrative approach to dealing
                  with the stresses of life. We offer you the tools to directly
                  regulate your nervous system in both the short and long term
                  using Conscious Nervous System Feedback (CNSF) and Optimising
                  exercises. These methods become an arsenal of quick-fire
                  techniques that cover you anytime, anywhere.{" "}
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <DetailVideo />
      <Blogs />
      <LibraraySpan />
      <Contact2 />

      <Footer />
    </main>
  );
}
export default Home;
