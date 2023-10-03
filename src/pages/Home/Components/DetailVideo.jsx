import React, { useState, useRef } from 'react';
import ReactPlayer from 'react-player';
import './style.css';
import { Container, Row, Col } from 'react-bootstrap';
// import playButtonIcon from './../../../Assets/AboutImages/newplaybtn.png';
import mainvideo from './../../../../src/Assets/videohome/finalhomevideo.mp4';
// import mylogo from './../../../Assets/AboutImages/Oxygen icon W.png';
import mylogo from './../../../Assets/AboutImages/updated logo.png';
import mythumbnail from "../../../Assets/AboutImages/thumbnail.png"
//import mysecondvideo from "../../../Assets/videohome/animation.mp4"
import gifimage from "../../../Assets/AboutImages/maingif.gif"

 const DetailVideo = () => {
   const videoRef = useRef(null);
   const [isVideoPlaying, setIsVideoPlaying] = useState(false);

   const handleVideoToggle = () => {
     setIsVideoPlaying(!isVideoPlaying);
   };

  return (
    <>
      <section className="Home-detail">
        <div className="watermark-container">
          <div className="bottommark-2"></div>
        </div>

        <Container fluid>
          <Container>
            <Row className="flex-direction-column">
              <Col md={12} xl={12} xxl={12} className="video-details">
                {/* <div className="head-wrap">
                  <h3 className="text-center">Conscious Nervous System Feedback</h3>
                  <h3 className="text-center">(CNSF) and Optimisation</h3>
                </div> */}
                <div className="middle-img">
                  <img src={mylogo} alt="" />
                </div>
                {/* <div className='video-container secondV'>
<video autoPlay muted  playsInline webkit-playsinline>
              <source src={mysecondvideo} type="video/mp4" />
              <source src={mysecondvideo} type="video/webm" />
              Your browser does not support the video tag.
            </video></div> */}
            <div className='d-flex justifty-content-center' >
              <img src={gifimage} className='img-fluid text-center' alt='img'/>
            </div>
        

                <div className="video-container-2">
                <ReactPlayer
               ref={videoRef}
                url={mainvideo}
             playing={isVideoPlaying}
                controls
               light={mythumbnail}
                muted={false}
                playsinline
                width="100%"
                height="100%"
/>
          {!isVideoPlaying && (
                 
                    <div className="play-button" onClick={handleVideoToggle}>
              
                      {/* <img src={playButtonIcon} alt="Play Button" /> */}
                    </div>
                  )}  
                </div>
              </Col>
            </Row>
          </Container>
        </Container>
      </section>
    </>
  );
};
export default DetailVideo;