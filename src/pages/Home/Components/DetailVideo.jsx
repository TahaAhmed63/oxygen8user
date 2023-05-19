import React from 'react'
import "./style.css"
import { Container,Row,Col } from 'react-bootstrap'
import mainvideo from "./../../../../src/Assets/videohome/090523_Oxygen8-Website-Medium-Loop_4x3.mp4"
import skeleton from "./../../../../src/Assets/Videoaboutimages/skeleton.png"
import skeleton2 from "./../../../../src/Assets/AboutImages/8__1_-removebg-preview.png"

export const DetailVideo = () => {
  return (
<>

<section className='Home-detail'>

<div className="bottommark-2"></div> 

<Container fluid>

  <Container>
    <Row className='flex-direction-column'>
    
       <Col md={6} className='video-details'>
        <div className="head-wrap">
            <h3>Conscious Nervous System Feedback (CNSF) Explained</h3>
        </div>
        <div className="video-wrap">
        <video src={mainvideo} muted autoPlay loop>
    
        </video>
        </div>
       </Col>
     <Col md={6} className='img-section'>
      
   
        <div className="about-img-wrap">
          <img src={skeleton} alt="" className='img-fluid' width='300' height='900'/>
        </div>
     
     
     </Col>
    </Row>
</Container>
</Container>

</section>


</>
  )
}
