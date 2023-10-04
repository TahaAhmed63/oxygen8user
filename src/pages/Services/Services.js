import React, { useEffect } from "react";
import Header from "../../component/Header/Header";
import { Row, Col } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
import "./../About/Components/style.css";
import { useNavigate } from "react-router-dom";
import { Contact2 } from "../Home/Components/Contact2";
import Footer from "../../component/Footer/Footer";
import courseimg from "../../Assets/AboutImages/courses.jpg";
import libraryimg from "./../../Assets/AboutImages/library.jpg";
import corporateimg from "../../Assets/AboutImages/corporate.jpg";
import breathworkimg from "../../Assets/AboutImages/breathwork.jpg";
import sideimage from "../../Assets/AboutImages/sideimage.png";
import mylogo from "./../../Assets/AboutImages/A4 Website Designs (10).png";
const Services = () => {
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Header />
      <section className="AboutPage">
        <Row>
          <Col md={12} sm={12}>
            <div className="headwrapabout">
              <h1>Services</h1>
            </div>
          </Col>
        </Row>
      </section>
      <section className="contact__area pt-115 pb-120">
        <div className="container">
          <div className="row">
            <div className="col-xxl-12 col-xl-12 col-lg-12 mx-auto">
              <Accordion eventKey="0" className="services-acord">
                <Accordion.Item eventKey="0">
                  <Accordion.Header className="button-after">
                    Consultancy
                  </Accordion.Header>
                  <Accordion.Body
                    style={{
                      backgroundColor: "#317C74",
                      color: "white",
                    }}
                  >
                    <section
                      style={{
                        paddingTop: "2rem",
                        paddingBottom: "2rem",
                      }}
                    >
                      <div
                        className="service-img-wrap d-flex justify-content-center  "
                        style={{
                          paddingBottom: "2rem",
                        }}
                      >
                        <img
                          src={mylogo}
                          className="img-fluid"
                          alt="asa"
                          width="150"
                          height="120"
                        />
                      </div>

                      <div
                        style={{
                          paddingBottom: "2rem",
                        }}
                      >
                        <p className="acordin-para">
                          1:1 appointments provide a highly personalised
                          approach to developing resilience and enhancing your
                          relationship with stress or anxiety.
                          <br />
                          <br />
                          During these online video consultancy sessions we
                          will:
                          <br />
                          <br />
                          - Explore your unique nervous system.
                          <br />
                          - Identify strategies that can improve your stress
                          management based on your specific circumstances.
                          <br />
                          - Tailor a comprehensive plan that merges into your
                          weekly routine.
                          <br />
                          - Address both immediate stress relief techniques and
                          long-term changes for increased resilience.
                          <br />
                          <br />
                          To maximise the impact of our sessions, we structure
                          them into three parts:
                          <br />
                          <br />
                          <div
                            className="row wrap-mb"
                            style={{ maxWidth: "90%", margin: "0 auto" }}
                          >
                            <div className="col-md-6">
                              <img
                                src={sideimage}
                                alt="asas"
                                width="100%"
                                className="img-fluid"
                              />
                            </div>
                            <div className="col-md-6">
                              <h4 className="square-box">
                                <span className="after-box"></span> Initial
                                consultation:{" "}
                              </h4>{" "}
                              <p
                                style={{
                                  fontSize: "16px",
                                  fontWeight: "300",
                                  lineHeight: "20px",
                                }}
                              >
                                {" "}
                                We will initially discuss your stress management
                                goals, lifestyle and emotional wellbeing,
                                delving into information that is useful to
                                create a plan unique to you and your life in an
                                online appointment.
                              </p>
                              <br />
                              <h4 className="square-box">
                                {" "}
                                <span className="after-box"></span>{" "}
                                Individualised Plan:{" "}
                              </h4>
                              <p
                                style={{
                                  fontSize: "16px",
                                  fontWeight: "300",
                                  lineHeight: "20px",
                                }}
                              >
                                {" "}
                                A tailored plan to assimilate into your
                                day-to-day life will be created. Guided
                                sessions, lifestyle changes and resources will
                                be sent through to accompany these changes based
                                upon your individual requirements.
                              </p>
                              <br />
                              <h4 className="square-box">
                                {" "}
                                <span className="after-box"></span> Additional
                                Support:{" "}
                              </h4>
                              <p
                                style={{
                                  fontSize: "16px",
                                  fontWeight: "300",
                                  lineHeight: "20px",
                                }}
                              >
                                {" "}
                                The plan is unique to you and each of the guided
                                sessions, lifestyle change suggestions and
                                resources will have email support available for
                                any questions on the exercises or topics
                                provided.
                              </p>
                              <br />
                              <h4 className="square-box">
                                {" "}
                                <span className="after-box"></span> Optional
                                Facilatted Appointment{" "}
                              </h4>{" "}
                              <p
                                style={{
                                  fontSize: "16px",
                                  fontWeight: "300",
                                  lineHeight: "20px",
                                }}
                              >
                                Depending on the outcome of your initial
                                consultancy, I may recommend a non-compulsory
                                1:1 facilitated session.
                              </p>
                              <br />
                            </div>
                          </div>
                          Further appointments can be booked as we evaluate your
                          progress and make any necessary adjustments to further
                          enhance your ability to cope with stress.
                          <br />
                          <br />
                          <h2
                            style={{
                              fontSize: "18px",
                              fontWeight: "bold",
                              color: "#fff",
                            }}
                          >
                            Pricing
                          </h2>
                          Initial Consultation: £95*
                          <br />
                          Follow-up Appointments: £85
                          <br />
                          1:1 Guided Sessions: £85**
                          <br /> <br />
                          *Includes initial consultation, tailored plan,
                          resources to learn the suggested techniques and
                          follow-up support regarding the implementation or
                          learning of the techniques.
                          <br />
                          <br />
                          **Depending on the outcome of your initial
                          consultancy, I may recommend a 1:1 guided session, for
                          example Conscious Connected Breathwork. It is entirely
                          at your discretion and not compulsory, but the session
                          falls outside of the scope of the appointments and
                          CNSF techniques.
                          <br />
                        </p>
                      </div>
                      <div className=" button-about-3">
                        <button
                          onClick={() => {
                            navigate("/consultant");
                          }}
                          style={{ background: "#fff", color: "#317C74" }}
                        >
                          Book
                        </button>
                      </div>
                    </section>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header className="button-after">
                    The Oxygen8{" "}
                    <em
                      style={{
                        fontSize: "11px",
                        position: "relative",
                        bottom: "0.8rem",
                        left: "-1px",
                        fontStyle: "normal",
                      }}
                    >
                      TM
                    </em>{" "}
                    &nbsp; Courses
                  </Accordion.Header>
                  <Accordion.Body
                    style={{
                      backgroundColor: "#317C74",
                      color: "white",
                    }}
                  >
                    <section
                      style={{
                        paddingTop: "2rem",
                        paddingBottom: "2rem",
                      }}
                    >
                      <div
                        className="service-img-wrap d-flex justify-content-center  "
                        style={{
                          paddingBottom: "2rem",
                        }}
                      >
                        <img
                          src={courseimg}
                          alt="asa"
                          width="100"
                          height="100"
                        />
                      </div>
                      <div
                        style={{
                          paddingBottom: "2rem",
                        }}
                      >
                        <p className="acordin-para">
                          The Oxygen8 <em className="em-style-para">TM</em>{" "}
                          Courses provide a comprehensive array of science-based
                          techniques. They are designed to equip you with a
                          diverse arsenal of stress management methods that
                          range from CNSF practices such as Breathwork or
                          Somatics, mental rewiring, or lifestyle adjustments to
                          improve your baseline physiology. These courses allow
                          you to select techniques that resonate best with you
                          for stress management, all backed by recent scientific
                          research.
                          <br />
                          <br />
                          The methods on offer cover a range of needs and
                          preferences. Whether beginner or experienced, the
                          courses are specifically designed to seamlessly
                          integrate into your workweek. From 3 minute videos to
                          watch on the go, to month-long integrations, the
                          courses have you covered.
                        </p>
                      </div>
                      <div className=" button-about-3">
                        <button
                          onClick={() => {
                            navigate("/courses");
                          }}
                          style={{ background: "#fff", color: "#317C74" }}
                        >
                          Explore Courses
                        </button>
                      </div>
                    </section>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header className="button-after">
                    The Oxygen8{" "}
                    <em
                      style={{
                        fontSize: "11px",
                        position: "relative",
                        bottom: "0.8rem",
                        left: "-1px",
                        fontStyle: "normal",
                      }}
                    >
                      TM
                    </em>
                    &nbsp; Library
                  </Accordion.Header>
                  <Accordion.Body
                    style={{
                      backgroundColor: "#317C74",
                      color: "white",
                    }}
                  >
                    <section
                      style={{
                        paddingTop: "2rem",
                        paddingBottom: "2rem",
                      }}
                    >
                      <div
                        className="service-img-wrap d-flex justify-content-center  "
                        style={{
                          paddingBottom: "2rem",
                        }}
                      >
                        <img
                          src={libraryimg}
                          alt="asa"
                          width="100"
                          height="100"
                        />
                      </div>
                      <div
                        style={{
                          paddingBottom: "2rem",
                        }}
                      >
                        <p className="acordin-para">
                          The Oxygen8 <em className="em-style-para">TM</em>{" "}
                          Library is split into 3 sections: Stress, Anxiety and
                          Performance.
                          <br />
                          <br />
                          The Stress and Anxiety libraries offer guided sessions
                          where all you have to do is listen to the instructions
                          and find yourself relaxing through a hybrid mix of
                          breathwork, somatics and meditation that allow you to
                          release your sympathetic arousal wherever you are.
                          With sessions ranging from 2 minutes to full 20+
                          minute sessions, you are covered any time, anywhere.
                          <br />
                          <br />
                          Ben is a fully qualified Oxygen Advantage instructor,
                          and the Performance Library offers guided sessions for
                          improving your fitness through these techniques.
                          Expect breath holds, challenges, and an increase in
                          your aerobic capacity to find yourself at the next
                          level of fitness, whilst simultaneously experiencing a
                          lower load on your cardiovascular system.
                        </p>
                      </div>
                      <div className=" button-about-3">
                        <button
                          onClick={() => {
                            navigate("/videolibrary");
                          }}
                          style={{ background: "#fff", color: "#317C74" }}
                        >
                          Explore Library
                        </button>
                      </div>
                    </section>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                  <Accordion.Header className="button-after">
                    Corporate
                  </Accordion.Header>
                  <Accordion.Body
                    style={{
                      backgroundColor: "#317C74",
                      color: "white",
                    }}
                  >
                    <section
                      style={{
                        paddingTop: "2rem",
                        paddingBottom: "2rem",
                      }}
                    >
                      <div
                        className="service-img-wrap d-flex justify-content-center  "
                        style={{
                          paddingBottom: "2rem",
                        }}
                      >
                        <img
                          src={corporateimg}
                          alt="asa"
                          width="100"
                          height="90"
                        />
                      </div>
                      <div
                        style={{
                          paddingBottom: "2rem",
                        }}
                      >
                        <p className="acordin-para">
                          Oxygen8{" "}
                          <em
                            style={{
                              fontSize: "11px",
                              position: "relative",
                              bottom: "0.8rem",
                              left: "-5px",
                              fontStyle: "normal",
                            }}
                          >
                            TM
                          </em>{" "}
                          was initially founded with the sole intention of
                          helping prevent workplace burnout, providing tools for
                          stress regulation to allow an increase in health and
                          wellbeing, but also productivity.
                          <br />
                          <br />
                          To learn more about corporate offerings, please follow
                          the link to the dedicated Corporate page.
                        </p>
                      </div>
                      <div className=" button-about-3">
                        <button
                          onClick={() => {
                            navigate("/corporate");
                          }}
                          style={{ background: "#fff", color: "#317C74" }}
                        >
                          Find Out More
                        </button>
                      </div>
                    </section>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4">
                  <Accordion.Header className="button-after">
                    Breathwork
                  </Accordion.Header>
                  <Accordion.Body
                    style={{
                      backgroundColor: "#317C74",
                      color: "white",
                    }}
                  >
                    <section
                      style={{
                        paddingTop: "2rem",
                        paddingBottom: "2rem",
                      }}
                    >
                      <div
                        className="service-img-wrap d-flex justify-content-center  "
                        style={{
                          paddingBottom: "2rem",
                        }}
                      >
                        <img
                          src={breathworkimg}
                          alt="asa"
                          width="100"
                          height="100"
                        />
                      </div>
                      <div
                        style={{
                          paddingBottom: "2rem",
                        }}
                      >
                        <p className="acordin-para">
                          {/* Breathwork is a powerful practice that harnesses the
                          innate connection between our breath and our autonomic
                          nervous system. Through intentional and conscious
                          control of the breath, the techniques offer a pathway
                          to deep relaxation, stress reduction, anxiety
                          management and increased self-awareness. By exploring
                          various breathing patterns, rhythms, and forms,
                          breathwork unlocks the potential to enhance physical
                          and mental wellbeing, as well as process emotional
                          states. Incorporating breathwork into your daily
                          routine has been shown to offer numerous health
                          benefits in studies by renowned neuroscientist Dr.
                          Andrew Huberman at Stanford University.
                          <br />
                          <br />
                          Ben is trained across the spectrum of breathwork. This
                          includes down-regulating forms for stress and anxiety
                          management, performance-enhancing Oxygen Advantage
                          methods (Ben is a fully qualified OA Instructor) and
                          is qualified in the more therapeutic Conscious
                          Connected Breathing that acts to help release trauma
                          and allow emotional processing.
                          <br />
                          <br />
                          If breathwork is something you would like to explore,
                          please feel free to get in contact to see how it could
                          be of benefit to you! */}
                          <p className="acordin-para">
                            Ben is a fully qualified breathwork facilitator and
                            practitioner across the spectrum of breathwork
                            techniques. Breathwork harnesses the innate
                            connection between our conscious breathing and our
                            autonomic nervous system. Through intentional
                            control of the breath, the techniques offer a
                            pathway to deep relaxation, stress reduction,
                            anxiety management, and increased self-awareness.
                            Incorporating breathwork into your daily routine has
                            been shown to offer numerous health benefits in
                            studies by renowned neuroscientist Dr. Andrew
                            Huberman at Stanford University.
                          </p>
                          <br />
                          <h2
                            style={{
                              fontSize: "20px",
                              fontWeight: "bold",
                              color: "#fff",
                            }}
                          >
                            Offerings
                          </h2>
                          <ul>
                            <li className="acordin-para-li">
                              - Down-regulating Breathwork for stress and
                              anxiety management.
                            </li>
                            <li className="acordin-para-li">
                              - Performance-enhancing Breathwork using the
                              Oxygen Advantage breathing techniques.
                            </li>
                            <li className="acordin-para-li">
                              - Conscious Connected Breathing using a form of
                              therapeutic breathwork that acts to help release
                              trauma and allow emotional processing through
                              transient hypofrontality.
                            </li>
                          </ul>
                          <br />
                          <p
                            style={{
                              marginBottom: "10px",
                              color: "#fff",
                            }}
                            className="acordin-para"
                          >
                            To learn down-regulating breathwork, head to the{" "}
                            Courses to build your own arsenal of techniques that
                            resonate with you. For guided breathwork sessions,
                            head to the Library offerings for the most
                            accessible route into breathwork for relaxation.
                            Performance-enhancing options can be found in both
                            the Course and Library sections of the website.
                          </p>
                          <p
                            style={{
                              marginBottom: "10px",
                              color: "#fff",
                            }}
                            className="acordin-para"
                          >
                            I offer Conscious Connected Breathwork as a 1:1
                            session only due to the emotional and therapeutic
                            nature of the technique. If this is something you
                            would like to explore, please feel free to get in
                            contact to see how it could be of benefit to you.
                          </p>
                          <br />
                          <h3
                            style={{
                              fontSize: "20px",
                              fontWeight: "bold",
                              color: "#fff",
                            }}
                          >
                            Pricing
                          </h3>
                          Conscious Connected Breathwork Session, 75mins: £85
                          <br />
                          Down-regulating 1:1 Session, 30 minutes: £55
                        </p>
                      </div>
                      <div className=" button-about-3">
                        <button
                          onClick={() => {
                            navigate("/contact");
                          }}
                          style={{ background: "#fff", color: "#317C74" }}
                        >
                          Contact
                        </button>
                      </div>
                    </section>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
          </div>
        </div>
      </section>

      <Contact2 />
      <Footer />
    </>
  );
};
export default Services;
