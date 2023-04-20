import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useRef } from "react";
import Modal from 'react-bootstrap/Modal';


const VideoList = ({ ...item }) => {
  const videoEl = useRef(null);

  const { title, image ,video} = item;

  const [show, setShow] = useState(false);
  const [time,settime] = useState()
  const video_link = localStorage.getItem("video_link");
  const img_link = localStorage.getItem("image_link");


  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleLoadedMetadata = () => {
    const videolength = videoEl.current;
    settime(Math.floor(videolength.duration)/60)
    if (!videolength) return videolength.duration

  };
  return (
    <div
    className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 grid-item cat1 cat2 cat4"
  >
    <div className="course__item white-bg mb-30 fix">
      <div className="course__thumb w-img p-relative fix">
          <img src={`${img_link}${image}`} alt="" width="300" height="200" />
      </div>
      <div className="course__item white-bg mb-30 fix" style={{display:'none'}}>
      <video src={`${video_link}${video}`}  ref={videoEl} onLoadedMetadata={handleLoadedMetadata}  alt=""  height="300" width="250" autoPlay muted loop playsInline ><source src={`${video_link}${video}`} type='video/mp4'/></video>
    </div>
      <div className="course__content">
       
        <h3
          className="course__title"
          style={{ textAlign: "left", paddingTop: "5px" }}
        >
          {title}
        </h3>
      </div>
      <div className="course__more d-flex justify-content-between align-items-center">
          <div className="course__btn">
            <span className="theme-btn">{time} min </span>
          </div>
          <div className="course__btn" onClick={handleShow}>
            <Link href="#" className="link-btn" to="">
              Play
              <i className="far fa-play"></i>
              <i className="far fa-play"></i>
            </Link>
          </div>
        </div>
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

export default VideoList;
