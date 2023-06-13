import React,{useState,useRef} from 'react'
import "./style.css"
import { Container,Row,Col } from 'react-bootstrap'
import mainvideo from "./../../../../src/Assets/videohome/090523_Oxygen8-Website-Medium-Loop_4x3.mp4"
// import skeleton from "./../../../../src/Assets/Videoaboutimages/skeleton.png"
import playButtonIcon from "./../../../Assets/AboutImages/videobtn-removebg-preview.png"
import mylogo from "./../../../Assets/AboutImages/Oxygen icon.png"

export const DetailVideo = () => {
  const videoRef = useRef(null);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const handleVideoToggle = () => {
    if (isVideoPlaying) {
      videoRef.current.pause();
      setIsVideoPlaying(false);
    } else {
      videoRef.current.play();
      setIsVideoPlaying(true);
    }
  };


  return (
<>

<section className='Home-detail'>
<div className="watermark-container">
<div className="bottommark-2"></div> 
</div>


<Container fluid>

  <Container>
    <Row className='flex-direction-column'>
    
       <Col md={12} xl={12} xxl={12} className='video-details'>
        <div className="head-wrap">
            <h3 className='text-center'>Conscious Nervous System Feedback </h3>
            <h3 className='text-center'>(CNSF) and Optimisation</h3>
        </div>
        <div className='middle-img'>
          <img src={mylogo} width="150" height="100" alt="" />
        </div>
        <div className="video-container-2">
                  <video ref={videoRef}  playsinline src={mainvideo} controls />
                  {!isVideoPlaying && (
                    <div className="play-button" onClick={handleVideoToggle}>
                      <img src={playButtonIcon} alt="Play Button" />
                    </div>
                  )}
                </div>
       </Col>
     {/* <Col md={4} xl={4} xxl={4} className='img-section'>
      
   
        <div className="about-img-wrap">
          <img src={skeleton} alt="" className='img-fluid' width='300' height='900'/>
        </div>
     
     
     </Col> */}
    </Row>
</Container>
</Container>

</section>


</>
  )
}
