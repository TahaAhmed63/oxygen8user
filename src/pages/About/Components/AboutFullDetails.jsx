import React from "react";
import "./style.css";
import { Container, Row, Col } from "react-bootstrap";
import owner1 from "./../../../Assets/AboutImages/Ben-In-Front-Of-Roll-Mats.png";
// import owner2 from "./../../../Assets/AboutImages/Ben2.png"
import { useNavigate } from "react-router";

export const AboutFullDetails = () => {
  const navigate = useNavigate();
  return (
    <>
      <section className="main-about mt-5">
        <div className="parent-container">
          <div className="bottommark-4"></div>
          <Container>
            <div className="more-detail-wrap">
              <Row>
                <Col lg={4} md={4} sm={12}>
                  <div className="owner1-wrap">
                    <img src={owner1} className="owner1" alt="" />
                  </div>
                  {/* <div className="owner2-wrap">
                      <img src={owner2} className="owner2" alt="" />
                    </div> */}
                </Col>
                <Col lg={7} md={8} sm={12}>
                  <div className="para-wrap-about">
                    <p>
                      Welcome! I'm Ben Perham, the Founder of Oxygen8 &nbsp;{" ."}
                      <em className="style-about"
                      
                      >
                        TM
                      </em>
                      
                      
                      <br />
                      <br />
                      After graduating with a First-Class Honours degree in
                      Mechanical Engineering, I enjoyed a successful six-year
                      career designing and building spacecraft. However, the
                      demanding workload and significant pressure eventually
                      took their toll, leading me to a significant burnout that
                      resulted in numerous health issues. Overnight, I went from
                      working on spacecraft for NASA to being unable to leave my
                      bed.
                      <br />
                      <br />
                      My nervous system became severely dysregulated, and I had
                      to confront a range of health problems that took years to
                      overcome. Determined to find a solution, I approached my
                      recovery as if it were a systems-engineering problem. I
                      explored a multitude of science-based techniques,
                      supplemented with medical assistance, to address the
                      issues that medications alone couldn't resolve. I focussed
                      on methods to effectively manage stress and anxiety,
                      creating the necessary conditions for my body to heal.
                    </p>
                  </div>
                </Col>
                <Col lg={12} sm={12} xxl={12} xl={12}>
                  <div className="para-wrap-about-2">
                    <p>
                      Now, I offer these techniques as a comprehensive arsenal
                      to help others avoid or recover from burnout. By improving
                      stress regulation and building resilience through
                      Conscious Nervous System Feedback (CNSF) techniques and
                      Optimisation protocols, we can cater to the unique
                      responses of each client's nervous system. Whether through
                      Micro-CNSFs or Macro-Optimisations, these strategies are
                      designed to seamlessly integrate into your day, regardless
                      of your location or the time.
                      <br />
                      <br />I hope these techniques prove valuable to you!
                    </p>
                  </div>
                </Col>

                <Col md={12} sm={12} className="mt-5">
                  <div className="button-wrap">
                    <div className="button-about-1">
                      <button
                        onClick={() => {
                          navigate("/courses");
                        }}
                      >
                        {" "}
                        Explore Courses{" "}
                      </button>
                    </div>
                    <div className="button-about-1">
                      <button
                        onClick={() => {
                          navigate("/videolibrary");
                          console.log("click");
                        }}
                      >
                        {" "}
                        Explore Libraries{" "}
                      </button>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </Container>
        </div>
      </section>
    </>
  );
};
