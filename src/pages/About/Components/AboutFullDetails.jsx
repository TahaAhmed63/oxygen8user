import React from "react";
import "./style.css";
import { Container, Row, Col } from "react-bootstrap";
import owner1 from "./../../../Assets/AboutImages/Ben-In-Front-Of-Roll-Mats.png";
import owner2 from "./../../../Assets/AboutImages/Ben2.png"
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
                  <div className="owner-image-wrap">
                    <div className="owner1-wrap">
                      <img src={owner1} className="owner1" alt="" />
                    </div>
                    <div className="owner2-wrap">
                      <img src={owner2} className="owner2" alt="" />
                    </div>
                  </div>
                </Col>
                <Col lg={7} md={8} sm={12}>
                  <div className="para-wrap-about">
                    <p>
                    Welcome! My name is Ben Perham and I am the Founder of Oxygen8. <br/>
                    I left university with a First-Class Honours degree in Mechanical Engineering, and had a successful six-year career designing and building spacecraft. However, the long hours and high pressure led me to a significant burnout, causing numerous health issues. Overnight I went from working on a spacecraft for a NASA to not being able to leave my bed.<br/>
                    My nervous system became heavily dysregulated and I had to contend with a range of health problems that took years to recover from. In search of a solution, I explored my recovery as I would a systems-engineering problem. I tried a myriad of science-based techniques alongside medical help to fix the issues that medications could not help with...in essence methods to control my stress and anxiety to allow my body space to recover.<br/>
                    I now offer these techniques as a comprehensive arsenal to prevent others from burning out. By better regulating stress and building resilience using Conscious Nervous System Feedback  (CNSF) and Optimising protocols, we can cover each client's unique nervous system responses. These micro-CNSF's and Macro-Optimisations  are designed to fit in to your day regardless of where you are or what time it is.<br/>s
                    I hope they are of benefit to you!
                    </p>
                  </div>
                </Col>
                <div className="mt-5 both-btn">
                  <Col md={12} sm={12}>
                    <div className="button-wrap">
                      <div className="button-about-1">
                        <button
                          onClick={() => {
                            navigate("/courses");
                          }}
                        >
                          {" "}
                          Explore Cources{" "}
                        </button>
                      </div>
                      <div className="button-about-1">
                        <button
                          onClick={() => {
                            navigate("/videolibrary");
                            console.log("click")
                          }}
                        >
                          {" "}
                          Explore Libraries{" "}
                        </button>
                      </div>
                    </div>
                  </Col>
                </div>
              </Row>
            </div>
          </Container>
</div>
      </section>
    </>
  );
};
