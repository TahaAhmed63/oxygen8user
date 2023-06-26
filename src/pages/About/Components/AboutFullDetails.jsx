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
                      Welcome! I'm Ben, the Founder of Oxygen8.
                      <em className="style-about">TM</em>
                      {"."}
                      <br />
                      <br />
                      My journey into the world of stress wellness and recovery
                      was born out of necessity. After six years of working as a
                      lead spacecraft production engineer, a severe burnout
                      resulted in numerous health issues as my mind and body
                      shut down. Overnight, I went from building a satellite for
                      NASA to being unable to leave my bed. Unfortunately this
                      is not a new story, we are a stressed nation with 74% of
                      people in the UK experiencing overwhelm and an inability
                      to cope with rising stress levels. (Mental Health
                      Foundation, 2018)
                      <br />
                      <br />
                      My experience left my nervous system heavily dysregulated,
                      and medicine was unable to fully help me. Determined to
                      find a solution, I researched and trialled scientifically
                      proven methods to manage my stress and anxiety,
                      cultivating the conditions to re-regulate my nervous
                      system and allow my body to heal. As part of this process
                      I developed an effective toolkit of solutions which I
                      truly believe can benefit anyone, from low level stress to
                      burnout recovery.
                    </p>
                  </div>
                </Col>
                <Col lg={12} sm={12} xxl={12} xl={12}>
                  <div className="para-wrap-about-2">
                    <p>
                    I now offer these techniques as a
                      comprehensive arsenal to help you improve or maintain your
                      health using a range of techniques that incorporate
                      Conscious Nervous System Feedback to regulate stress
                      levels, and combine them with optimising protocols to
                      increase the baseline resilience of your physiology.
                      <br />
                      <br />I hope they prove as valuable and life-improving to you as they have been for me!
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
