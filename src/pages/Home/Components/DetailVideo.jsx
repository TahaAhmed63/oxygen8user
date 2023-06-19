import React, { useState, useRef } from 'react';
import ReactPlayer from 'react-player';
import './style.css';
import { Container, Row, Col } from 'react-bootstrap';
import playButtonIcon from './../../../Assets/AboutImages/videobtn-removebg-preview.png';
import mainvideo from './../../../../src/Assets/videohome/HomePage CNSf.mp4';
import mylogo from './../../../Assets/AboutImages/Oxygen icon W.png';
import mythumbnail from "../../../Assets/AboutImages/Ben-Conference-From-Left.png"

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
                <div className="head-wrap">
                  <h3 className="text-center">Conscious Nervous System Feedback</h3>
                  <h3 className="text-center">(CNSF) and Optimisation</h3>
                </div>
                <div className="middle-img">
                  <img src={mylogo} alt="" />
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
              
                      <img src={playButtonIcon} alt="Play Button" />
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