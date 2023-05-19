import React from 'react'
import Footer from "../../component/Footer/Footer";
import Header from "../../component/Header/Header";
import "./../About/Components/style.css"
import {Container, Row, Col } from "react-bootstrap"
import owner3 from "./../../../src/Assets/AboutImages/Ben-Conference-From-Left.png"
import {Contact2} from '../Home/Components/Contact2';
 const Coorperate = () => {
  return (
   <>
   
   <Header/>
   <section className="AboutPage">
            <Row>

               <Col md={12} sm={12}>
                  <div className="headwrapabout">
                     <h1>Corperate</h1>
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
        <Col lg={4} md={4} sm={12}>
          <div className="owner3-image-wrap">
            <div className="owner3-wrap">
              <img src={owner3} className="owner3" alt="" />
            </div>
        


  <div className='list-item-corperate'>
    <div className='list-head'>
      <h4>Corperate Services:</h4>

    </div>
    <div className='list'>
    <p className='dot'>Workshops for:</p>
    <p className='dash'>Down-Regulation</p>
    <p className='dash'>Resilience Building</p>
    <p className='dash'>Sustainable Productivity</p>
    <p className='dot'>Online Cources</p>
    <p className='dot'>Online Libraries</p>
    <p className='dot'>Physiology</p>
    <div className='parent-container'>
  <div className='bottommark-5'></div>
</div>
    </div>
  </div>
          </div>
        </Col>
        <Col lg={7} md={8} sm={12}>
          <div className="para-wrap-about mt-0">
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
</Row>
</div>
<div className=' button-about-3'>
            <button style={{background:"#fff",color:"#317C74"}}>Contact</button>
          </div>
</Container>
</section>
    
      

<Contact2/>
   <Footer/>
   
   </>
  )
}
export default Coorperate