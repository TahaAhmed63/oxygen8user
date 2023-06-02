import React from 'react'
import "./style.css"
import { Row,Col } from 'react-bootstrap'

import { Container } from 'react-bootstrap'
// import about1 from './../../../../src/Assets/AboutImages/About1.jpg'
// import about2 from "./../../../../src/Assets/AboutImages/About2.jpg"
// import about3 from "./../../../../src/Assets/AboutImages/About3.jpg"
// import about4 from "./../../../../src/Assets/AboutImages/About4.jpg"




export const AboutDetail = () => {

// const myimage=[
//     {
//         myimg:about1
//     },
//     {
//         myimg:about2
//     },
//     {
//         myimg:about3
//     },
//     {
//         myimg:about4
//     },
// ]


  return (
    <>
 <section className="AboutPage">
        <Row>
     
    <Col md={12} sm={12}>
        <div className="headwrapabout">
           <h1>About</h1>
        </div>
    </Col>


        </Row>

    </section> 
    <section className='corperate-head'>
        <Container>
           <div className='corp-head-wrap'>
            <div className='corphead'>
              <h3>
                "Overnight I went from building a spacecraft for NASA to not being able to leave my bed ."
              </h3>
            </div>
            {/* <div className="para-corp">
              <p>
                 -Center of Ecnomic and Bussiness Research
              </p>
            </div> */}
           </div>
        </Container>
        


         </section>
{/* <section className="About-image py-5">
        <Container fluid>
         <Container>
             <Row className='close-img'>

      
          
               <Col  md={3} sm={6} xs={12}> 
          <div className="img-wrap">
                <img src={about1}  alt="" />
                </div>
               </Col>
               <Col  md={3} sm={6} xs={12}> 
          <div className="img-wrap">
                <img src={about2}  alt="" />
                </div>
               </Col>
               <Col  md={3} sm={6} xs={12}> 
          <div className="img-wrap">
                <img src={about3}  alt="" />
                </div>
               </Col>
               <Col  md={3} sm={6} xs={12}> 
          <div className="img-wrap">
                <img src={about4}  alt="" />
                </div>
               </Col>
            
    
           
             </Row>
       

         </Container>
        </Container>
    
    </section>  */}
    </>
    
  )
}
