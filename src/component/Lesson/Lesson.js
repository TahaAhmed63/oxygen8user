import React from "react";
import { useState,useRef } from "react";
import Modal from 'react-bootstrap/Modal';

const Lesson = ({...item}) => {

const {title,video}=item

  const [show, setShow] = useState(false);

  const videoEl = useRef(null);
  const [time,settime] = useState()

  const video_link = localStorage.getItem("video_link");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleLoadedMetadata = () => {
    const videolength = videoEl.current;
    settime(Math.floor(videolength.duration)/60)
    if (!videolength) return videolength.duration
  };

  return (
    <div className="course__curriculum-content d-sm-flex justify-content-between align-items-center" > 
      <div className="course__curriculum-info">
        <svg className="document" viewBox="0 0 24 24">
          <path
            className="st0"
            d="M14,2H6C4.9,2,4,2.9,4,4v16c0,1.1,0.9,2,2,2h12c1.1,0,2-0.9,2-2V8L14,2z"
          />
          <polyline className="st0" points="14,2 14,8 20,8 " />
          <line className="st0" x1="16" y1="13" x2="8" y2="13" />
          <line className="st0" x1="16" y1="17" x2="8" y2="17" />
          <polyline className="st0" points="10,9 9,9 8,9 " />
        </svg>
        <h3>
          {" "}
          <div className="course__item white-bg mb-30 fix" style={{display:'none'}}>
      <video src={`${video_link}${video}`}  ref={videoEl} onLoadedMetadata={handleLoadedMetadata}  alt=""  height="300" width="250" autoPlay muted loop playsInline ><source src={`${video_link}${video}`} type='video/mp4'/></video>
    </div>
          <span>{title}</span> 
        
        </h3>
      </div>
      <div className="course__curriculum-meta" onClick={handleShow} style={{cursor:'pointer'}}>
        <span className="time">
          {" "}
          <i className="icon_clock_alt"></i> {time} minutes
        </span>
      </div>
       <Modal show={show} onHide={handleClose} fullscreen={true}>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body> <video src={`${video_link}${video}`}  alt=""  height="100%" width="100%" autoPlay muted loop playsInline controls><source src={`${video_link}${video}`} type='video/mp4'/></video></Modal.Body>
      </Modal>
    </div>
  );
};

export default Lesson;
