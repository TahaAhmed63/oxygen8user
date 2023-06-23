// import React, { useState, useRef } from 'react';
import myvideo from "../../../../src/Assets/videohome/240523_Oxygen8-Website-Medium-Loop_Conference-First_16x9.mp4"

import "../home.css"
function Video() {
//   const [isPlaying, setIsPlaying] = useState(false);
//   const videoRef = useRef(null);

//   const handlePlay = () => {
//     setIsPlaying(true);
//     videoRef.current.play();
//   };

//   const handlePause = () => {
//     setIsPlaying(false);
//     videoRef.current.pause();
//   };

  return (
<>
<div className='video-container'>
<video autoPlay muted loop playsInline>
              <source src={myvideo} type="video/mp4" />
              <source src={myvideo} type="video/webm" />
              Your browser does not support the video tag.
            </video></div>

     <div className="overlay-absolute-text">
          <div className="text-video-wrap">
            <h2 >Control your nervous system.</h2>
            <h2 >
Control your stress.</h2> 
<p >Micro-regulation tools for stress. Any time, anywhere.</p>
          </div>
     </div>
     {/* <div className="watermark-container">
      <div className="bottommark1">
          <div className="main-bottom"></div>
      </div>
     </div> */}
<div className="bottom-mark"></div> 
     </>
   

  );
}

export default Video;
