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
                "The UK  suffers a collective 23.3 MILLION stress-related sick days per year ."
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
    <p className='dash'>Physiology Optimisation</p>
    <p className='dot'>Online Access:</p>
    <p className='dash'>The Oxygen8  <em style={
                      {
                        fontSize: "12px",
                        left:"-5px",
                            position: "relative",
                            bottom: "0.5rem"}
                     }>TM</em>Courses</p>
    <p className='dash'>The Oxygen8  <em style={
                      {
                        fontSize: "12px",
                        left:"-5px",
                            position: "relative",
                            bottom: "0.5rem"}
                     }>TM</em> Libraries</p>
    {/* <p className='dot'>Physiology</p>
    <p className='ml-14 pt-5'>Optimisation</p>
    <p className='ml-14 pt-5'>Presentations</p> */}
    <div className='parent-container'>
  <div className='bottommark-5'></div>
</div>
    </div>
  </div>
          </div>
        </Col>
        <Col lg={7} xl={7} xxl={7} md={8} sm={12}>
        <div className="para-wrap-about mt-0">
                  <p className="para-wrap-about-heading" style={{
                    fontSize:"35px",
                    lineHeight:"49px"
                  }}>
                    Stress burnout and the associated mental health issues
                    cost the UK economy an estimated <strong>£28billion</strong>{" "}
                    each year...
                  </p>
                  <p className="para-wrap-about-para">
                  ...and that is before we consider the personal impact these issues have on employees' wellbeing. One in five people has taken a day off due to excessive stress, yet 90% of them cited a different reason to avoid potential stigma. (Mind, 2023.)
                    <br />
                  </p>
                  <br />
                  <p className="para-wrap-about-para">
                  While we are often taught how to push ourselves, 
                  we frequently lack the knowledge and skills to effectively manage and recover from these intense and unsustainable states.
                    <br />
                  </p>
                  <br/>
                  <p className="para-wrap-about-para">
                  Based upon my experiences in industry, and my personal recovery from stress-related illnesses, I have curated workshops and presentations
                   that can be tailored to meet the unique needs of employees. Oxygen8  <em style={
                      {
                        fontSize: "12px",
                        left:"-5px",
                            position: "relative",
                            bottom: "0.5rem"}
                     }>TM</em>
                  equips individuals with the necessary tools and information to develop an arsenal of self-regulating techniques for effectively managing stress levels or supporting burnout recovery. These methods can be discreetly 
                  incorporated into the workday and can be adapted to suit employees any time and anywhere. <br />
                  </p>
                  <br/>
                  <p className="para-wrap-about-para">
                    {" "}
                    The techniques employ biofeedback, utilising CNSF and Optimisation, 
                    to empower your employees with tools for resilience and control over stress. 
                    By enhancing their resilience,   
                    we not only contribute to their improved health and well-being, but also foster increased, sustainable productivity, and efficiency.
                    <br /><br/>
                    Please get in touch if you would like to find out more.
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