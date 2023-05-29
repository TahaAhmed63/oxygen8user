import React from 'react'
import Footer from "../../component/Footer/Footer";
import Header from "../../component/Header/Header";
import "./../About/Components/style.css"
import {Container, Row, Col } from "react-bootstrap"
import owner3 from "./../../../src/Assets/AboutImages/Ben-Conference-From-Left.png"
import {Contact2} from '../Home/Components/Contact2';
import { useNavigate } from 'react-router-dom';
 const Coorperate = () => {

  const navigate = useNavigate();
  return (
   <>
   
   <Header/>
   <section className="AboutPage">
            <Row>

               <Col md={12} sm={12}>
                  <div className="headwrapabout">
                     <h1>Corporate</h1>
                  </div>
               </Col>


            </Row>

         </section>
         <section className='corperate-head'>
        <Container>
           <div className='corp-head-wrap'>
            <div className='corphead'>
              <h3>
                "the uk has suffers a collective 23.3 MILLION stress-related sick days per year ."
              </h3>
            </div>
            <div className="para-corp">
              <p>
                 - Center of Ecnomic and Bussiness Research
              </p>
            </div>
           </div>
        </Container>
        


         </section>
         <section className="main-about mt-5">
         <Container>
    
    <div className="more-detail-wrap">
      <Row>
        <Col lg={4} xl={4} xxl={4} md={4} sm={12}>
          <div className="owner3-image-wrap">
            <div className="owner3-wrap">
              <img src={owner3} className="owner3" alt="" />
            </div>
        


  <div className='list-item-corperate'>
    <div className='list-head'>
      <h4>Corporate Services:</h4>

    </div>
    <div className='list'>
    <p className='dot'>Workshops for:</p>
    <p className='dash'>Down-Regulation</p>
    <p className='dash'>Resilience Building</p>
    <p className='dash'>Sustainable Productivity</p>
    <p className='dot'>Online Courses</p>
    <p className='dot'>Online Libraries</p>
    <p className='dot'>Physiology</p>
    <p className='ml-14 pt-5'>Optimisation</p>
    <p className='ml-14 pt-5'>Presentations</p>
    <div className='parent-container'>
  <div className='bottommark-5'></div>
</div>
    </div>
  </div>
          </div>
        </Col>
        <Col lg={7} xl={7} xxl={7} md={8} sm={12}>
        <div className="para-wrap-about mt-0">
                  <p className="para-wrap-about-heading">
                    Stress burnout and the associated mental health illnesses
                    cost the UK economy an estimated <strong>£28ben</strong>{" "}
                    each year...
                  </p>
                  <p className="para-wrap-about-para">
                    ....and thats before we consider the personal impact its has
                    no the welfare of employees. 1 in 5 employees have taken a
                    day off due to excessive stress. yet 90% of those stated a
                    deifferent reason to avoid any associated stigma. (Mind,
                    2023)
                    <br />
                  </p>
                  <br />
                  <p className="para-wrap-about-para">
                    We grow up learning how to push ourselve, but we are not
                    taught how to come back down from these heightened and
                    unsustainable states.
                    <br />
                  </p>
                  <br/>
                  <p className="para-wrap-about-para">
                    I have curated Workshops and presentations that can be
                    tailored to support employees' individuals needs. Oxygen8  <em style={
                      {
                        fontSize: "12px",
                        left:"-5px",
                            position: "relative",
                            bottom: "0.5rem"}
                     }>TM</em>
                    offer the tools and information needs. to build an arsenal
                    of self-regulating techniques to manage stress levels. These
                    techniques can be used discreetly throughtout the working
                    day, but also be adapted to cover employees any time,
                    anywhere. <br />
                  </p>
                  <br/>
                  <p className="para-wrap-about-para">
                    {" "}
                    The methods use biofeedback in the form of CNSF and
                    Physiology Optimisation to empower your employees resilience
                    and influence over stress. with greater resilience come not
                    only greater. health and wellness, but increased,
                    sustainable productivity and efficiency.
                    <br />
                  </p>
                </div>
        </Col>
</Row>
</div>
<div className=' button-about-3'>
            <button   onClick={() => {
                            navigate("/contact");
                          }} style={{background:"#fff",color:"#317C74"}}>Contact</button>
          </div>
</Container>
</section>
    
      

<Contact2/>
   <Footer/>
   
   </>
  )
}
export default Coorperate