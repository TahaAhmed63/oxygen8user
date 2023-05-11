import React from 'react'
import "./style.css"
import { Container,Row,Col } from 'react-bootstrap'
import mainvideo from "./../../../../src/Assets/videohome/090523_Oxygen8-Website-Medium-Loop_4x3.mp4"

export const DetailVideo = () => {
  return (
<>

<section className='Home-detail'>
<Container>
    <Row className='flex-direction-column'>
       <Col md={7}>
        <div className="head-wrap">
            <h3>Conscious Nervous System Feedback (CNSF) Explained</h3>
        </div>
        <div className="video-wrap">
        <video src={mainvideo} muted autoPlay loop>
    
        </video>
        </div>
       </Col>
     <Col md={3}>
     
     
     
     </Col>
    </Row>
</Container>

</section>


</>
  )
}
