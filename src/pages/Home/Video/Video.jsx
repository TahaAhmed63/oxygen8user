// import React, { useState, useRef } from 'react';
import myvideo from "../../../../src/Assets/videohome/090523_Oxygen8-Website-Medium-Loop_4x3.mp4"

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
  <video src={myvideo} className='myvideo' muted autoPlay loop></video>
</div>

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
