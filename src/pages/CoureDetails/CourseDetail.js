import React from "react";
import Footer from "../../component/Footer/Footer";
import Headers from "../../component/Header/Header";
import { Link } from "react-router-dom";
import Lesson from "../../component/Lesson/Lesson";

const CourseDetail = () => {
  const arr = [1, 2, 3, 4, 5];
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
                            The business Intelligence analyst Course 2022
                          </li>
                        </ol>
                      </nav>
                    </div>
                    <span className="page__title-pre">Development</span>
                    <h5 className="page__title-3" style={{ textAlign: "left" }}>
                      The business Intelligence analyst Course 2022
                    </h5>
                  </div>
                  <div className="course__meta-2 d-sm-flex mb-30"></div>
                  <div className="course__img w-img mb-30">
                    <img
                      src="assets/img/course/details/course-details-1.jpg"
                      alt=""
                    />
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
                            Only a quid me old mucker squiffy tomfoolery grub
                            cheers ruddy cor blimey guvnor in my flat, up the
                            duff Eaton car boot up the kyver pardon you A bit of
                            how's your father David skive off sloshed, don't get
                            shirty with me chip shop vagabond crikey bugger
                            Queen's English chap. Matie boy nancy boy bite your
                            arm off up the kyver old no biggie fantastic boot,
                            David have it show off show off pick your nose and
                            blow off lost the plot porkies bits and bobs only a
                            quid bugger all mate, absolutely bladdered
                            bamboozled it's your round don't get shirty with me
                            down the pub well. Give us a bell bits and bobs
                            Charles he lost his bottle super my lady cras
                            starkers bite your arm off Queen's English, pardon
                            me horse play Elizabeth a blinding shot chinwag
                            knees up do one David, blag cup of tea Eaton so I
                            said bleeding haggle James Bond cup of char. Gosh
                            William ummm I'm telling crikey burke I don't want
                            no agro A bit of how's your father bugger all mate
                            off his nut that, what a plonker cuppa owt to do
                            with me nancy boy show off show off pick your nose
                            and blow off spiffing good time lavatory me old
                            mucker, chimney pot what a load of rubbish boot
                            squiffy lost the plot brolly wellies excuse my
                            french.
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
                          {/* chaptaer */}
                          <div class="accordion" id="course__accordion">
                            <div class="accordion-item mb-50">
                              <h2 class="accordion-header" id="week-01">
                                <button
                                  class="accordion-button"
                                  type="button"
                                  data-bs-toggle="collapse"
                                  data-bs-target="#week-01-content"
                                  aria-expanded="true"
                                  aria-controls="week-01-content"
                                >
                                  chapter 01
                                </button>
                              </h2>
                              <div
                                id="week-01-content"
                                class="accordion-collapse collapse show"
                                aria-labelledby="week-01"
                                data-bs-parent="#course__accordion"
                              >
                                <div class="accordion-body">
                                  {/* lesson */}
                                  {arr.map((item) => (
                                    <Lesson />
                                  ))}
                                </div>
                              </div>
                            </div>
                          </div>

                          <div class="accordion" id="course__accordion-2">
                            <div class="accordion-item mb-50">
                              <h2 class="accordion-header" id="week-02">
                                <button
                                  class="accordion-button"
                                  type="button"
                                  data-bs-toggle="collapse"
                                  data-bs-target="#week-02-content"
                                  aria-expanded="true"
                                  aria-controls="week-02-content"
                                >
                                  Chapter 02
                                </button>
                              </h2>
                              <div
                                id="week-02-content"
                                class="accordion-collapse  collapse show"
                                aria-labelledby="week-02"
                                data-bs-parent="#course__accordion-2"
                              >
                                <div class="accordion-body">
                                  {arr.map((item) => (
                                    <Lesson />
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
              <div className="col-xxl-4 col-xl-4 col-lg-4">
                <div className="course__sidebar pl-70 p-relative">
                  <div className="course__shape">
                    <img
                      className="course-dot"
                      src="assets/img/course/course-dot.png"
                      alt=""
                    />
                  </div>
                  <div className="course__sidebar-widget-2 white-bg mb-20">
                    <div className="course__video">
                      <div className="course__video-thumb w-img mb-25">
                        <img
                          src="assets/img/course/video/course-video.jpg"
                          alt=""
                        />
                        <div className="course__video-play">
                          <a
                            href="https://youtu.be/yJg-Y5byMMw"
                            data-fancybox=""
                            className="play-btn"
                          >
                            {" "}
                            <i className="fas fa-play"></i>{" "}
                          </a>
                        </div>
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
                              {/* <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 16 16" style="enable-background:new 0 0 16 16;" xml:space="preserve"> */}
                              <path
                                className="st0"
                                d="M2,6l6-4.7L14,6v7.3c0,0.7-0.6,1.3-1.3,1.3H3.3c-0.7,0-1.3-0.6-1.3-1.3V6z"
                              />
                              <polyline
                                className="st0"
                                points="6,14.7 6,8 10,8 10,14.7 "
                              />
                              {/* </svg> */}
                            </div>
                            <div className="course__video-info">
                              <h5>
                                <span>Instructor :</span> Eleanor Fant
                              </h5>
                            </div>
                          </li>
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
                                <span>Lectures :</span>14
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
