import React from "react";
import Header from "../../component/Header/Header";
import { Row, Col } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
import "./../About/Components/style.css";
import { useNavigate } from "react-router-dom";
import { Contact2 } from "../Home/Components/Contact2";
import Footer from "../../component/Footer/Footer";
const Services = () => {
  const navigate = useNavigate();

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
                    CNSF & Optimisation Consultency
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
                        style={{
                    
                          paddingBottom: "2rem",
                        }}
                      >
                        <p
                          style={{
                            color: "#fff",
                            fontSize: "18px",
                            width:"98%",
                            margin:"0 auto",
                            fontWeight: "500",
                            textAlign: "justify",
                          }}
                        >
                          1:1 appointments provide a highly personalised
                          approach to developing resilience and enhancing your
                          relationship with stress.
                          <br />
                          <br />
                          During these appointments, we explore your unique
                          nervous system and identify strategies that can
                          improve your stress management based on your specific
                          circumstances. By tailoring a comprehensive plan that
                          fits into your weekly routine, we address both
                          immediate stress relief techniques and long-term
                          changes that lead to substantial benefits over time.
                          In addition to utilising various helpful Conscious
                          Nervous System Feedback (CNSF) resources to regulate
                          your nervous system, we focus on optimising your
                          physiology. Over time, you will feel this resilience
                          extend to every aspect of your life.
                          <br />
                          <br />
                          To maximise the impact of our sessions, we structure
                          them into three parts. We begin with an initial
                          consultation, where we discuss your goals, lifestyle
                          and emotional wellbeing, before learning some
                          quick-fire downregulating techniques. Following this,
                          you receive a tailored plan to assimilate into your
                          day-to-day life. You have access to email support,
                          allowing you to reach out with any questions or
                          concerns between appointments. At our second
                          appointment, we evaluate your progress and make any
                          necessary adjustments to further enhance your ability
                          to cope with stress. As progress will be likely we can
                          alter plans as required further appointments as you
                          progress.
                          <br />
                          <br />
                          The package pricing is £200 which includes the initial
                          appointment, email support, follow-up appointment and
                          individualised plan.
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
                    The Oxygen8  <em
                    style={{
                      fontSize: "11px",
                      position: "relative",
                      bottom: "0.8rem",
                      left:"-5px",
                      fontStyle:"normal"
                    }}
                  >
                    TM
                  </em> Courses 
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
                        style={{
                    
                          paddingBottom: "2rem",
                        }}
                      >
                        <p
                          style={{
                            color: "#fff",
                            fontSize: "18px",
                            width:"98%",
                            margin:"0 auto",
                            fontWeight: "500",
                            textAlign: "justify",
                          }}
                        >
                          The Oxygen8   <em
                    style={{
                      fontSize: "11px",
                      position: "relative",
                      bottom: "0.8rem",
                      left:"-5px",
                      fontStyle:"normal"
                    }}
                  >
                    TM
                  </em> Courses provide a comprehensive array of
                          science-based techniques. They are designed to equip
                          you with a diverse arsenal of stress management
                          methods that range from biofeedback practices like
                          breathwork, to macro-level adjustments to your
                          circadian rhythms. These courses offer the flexibility
                          to select only the techniques that resonate best with
                          you, all backed by scientific research.
                          <br />
                          <br />
                          The methods on offer cover a range of needs and
                          preferences. Whether beginner to experienced, the
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
                    The Oxygen8   <em
                    style={{
                      fontSize: "11px",
                      position: "relative",
                      bottom: "0.8rem",
                      left:"-5px",
                      fontStyle:"normal"
                    }}
                  >
                    TM
                  </em> Library
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
                        style={{
                    
                          paddingBottom: "2rem",
                        }}
                      >
                        <p
                          style={{
                            color: "#fff",
                            fontSize: "18px",
                            width:"98%",
                            margin:"0 auto",
                            fontWeight: "500",
                            textAlign: "justify",
                          }}
                        >
                          The Oxygen8   <em
                    style={{
                      fontSize: "11px",
                      position: "relative",
                      bottom: "0.8rem",
                      left:"-5px",
                      fontStyle:"normal"
                    }}
                  >
                    TM
                  </em> Library is split into 3 sections: Stress,
                          Anxiety and Performance. The stress and anxiety
                          libraries offer guided sessions where all you have to
                          do is listen to the instructions and relax with guided
                          sessions incorporating a hybrid mix of breathwork,
                          somatics and meditation that allow you to release your
                          sympathetic arousal wherever you are. With sessions
                          ranging from 2 minutes to full 20+ minute sessions,
                          you are covered any time, anywhere.
                          <br />
                          <br />
                          The Performance Library offers guided sessions for
                          improving your fitness through Oxygen Advantage
                          techniques, of which Ben is a fully qualified
                          instructor. Expect breath holds, challenges, and an
                          increase in your aerobic capacity.
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
                        style={{
                    
                          paddingBottom: "2rem",
                        }}
                      >
                        <p
                          style={{
                            color: "#fff",
                            fontSize: "18px",
                            width:"98%",
                            margin:"0 auto",
                            fontWeight: "500",
                            textAlign: "justify",
                          }}
                        >
                          Having experienced severe burnout working in
                          engineering, Oxygen8  <em
                    style={{
                      fontSize: "11px",
                      position: "relative",
                      bottom: "0.8rem",
                      left:"-5px",
                      fontStyle:"normal"
                    }}
                  >
                    TM
                  </em> was founded with the sole
                          intention of helping prevent as many people as
                          possible head down the same path. To learn more about
                          corporate offerings, please follow the link above.
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
                        style={{
                    
                          paddingBottom: "2rem",
                        }}
                      >
                        <p
                          style={{
                            color: "#fff",
                            fontSize: "18px",
                            width:"98%",
                            margin:"0 auto",
                            fontWeight: "500",
                            textAlign: "justify",
                          }}
                        >
                          Breathwork is a powerful practice that harnesses the
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
                          be of benefit to you!
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
