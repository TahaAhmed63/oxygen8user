import React, { useState, useRef, useEffect } from 'react';
import './style.css';
import { Container, Row, Col } from 'react-bootstrap';
import mainvideo from './../../../../src/Assets/videohome/090523_Oxygen8-Website-Medium-Loop_4x3.mp4';
import playButtonIcon from './../../../Assets/AboutImages/videobtn-removebg-preview.png';
import mylogo from './../../../Assets/AboutImages/Oxygen icon W.png';

export const DetailVideo = () => {
  const videoRef = useRef(null);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [showPlayButton, setShowPlayButton] = useState(true);

  const handleVideoToggle = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
      videoRef.current.controls = true
      setIsVideoPlaying(true);
    } else {
      videoRef.current.pause();
      setIsVideoPlaying(false);
    }
  };
  
//  useEffect(() => {
//   const videoElement = videoRef.current;
//    if(videoElement.current){
    
//     videoElement.current.autoplay = true
     
      
//    }
//    const handleCanPlay = () => {
//      setShowPlayButton(false);
//    };
//    videoElement.current.addEventListener('canplay', handleCanPlay);

//    return () => {
//      videoElement.current.removeEventListener('canplay', handleCanPlay);
//    }
//  }, []);


  
 useEffect(() => {
   const videoElement = videoRef.current; 

   if (videoElement) {
    // videoElement.autoplay = true;
   
   }

   const handleCanPlay = () => {
     setShowPlayButton(false);
   };

   videoElement.addEventListener('canplay', handleCanPlay);

   return () => {
     videoElement.removeEventListener('canplay', handleCanPlay);
   };
 }, []);
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
                  <video ref={videoRef} muted  playsInline   >
                    <source src={mainvideo} type="video/mp4"  />
                    <source src={mainvideo} type="video/webm" />
                    <source src={mainvideo} type="video/mov" />
                    Your browser does not support the video tag.
                  </video> 
                  {!showPlayButton && !isVideoPlaying && (
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
