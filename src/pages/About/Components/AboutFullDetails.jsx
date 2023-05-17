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
                      My name is Ben Perham and am the Founder of
                      Oxygens - welcome! I left university with a First-Class
                      Honours degree in Mechanical Engineering, and had a
                      sucosssful six-year career designing and building
                      spacecraft. However, the long hours: and high pressure led
                      me 10 a signficant bumout, causing numerous health issues.
                      Overnight 1 went from working as a Lead Spacecraft
                      Production Enginser for a NASA project to not being able
                      to leave my bed. My nervous system became heavily
                      dysregulated and  had to contend with a range of health
                      problems that took years to recover from. In search of a
                      solution,  explored my recovery 2s  would a
                      systems-engineering problem.  tried a myriad of
                      science-based techniques alongside medical help Lo fix the
                      sues that medications ould not help with an essence
                      methods 1o control my stress and anxety 10 alow my body to
                      recover. now offer thoco techniques 26 3 comprohencive
                      arceni to provent others from burning out by better
                      regulating thei tress and buliding resilience using
                      Conscious Nervous System Feedback (CNS) protocols, whie
                      considering each cllents unique nervous system responses.
                      These micro-CNSF's are designed 10 ft In to your day
                      regardless of where you are or what time it is. 1hope they
                      are of benefit to you
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

      </section>
    </>
  );
};
