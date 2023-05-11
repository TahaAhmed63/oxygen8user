import React, { useState, useRef } from 'react';
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
    <div className='video-container'>
      <video src={myvideo} className='myvideo' muted autoPlay loop>

      </video>
   
    </div>
  );
}

export default Video;
