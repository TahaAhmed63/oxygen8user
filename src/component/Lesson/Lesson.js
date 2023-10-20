/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import { useState,useRef } from "react";
import Modal from 'react-bootstrap/Modal';
import Swal from "sweetalert2";
import {AiOutlineFilePdf} from 'react-icons/ai'
import {MdOutlineSlowMotionVideo} from 'react-icons/md'
const Lesson = ({item,buy}) => {

const {title,video}=item

  const [show, setShow] = useState(false);


  const videoEl = useRef(null);
  const [time,settime] = useState()

  const video_link = localStorage.getItem("video_link");

  const handleClose = () => setShow(false);
  const handleShow = (pdf,type) => {
    if(buy){
      if(type==="video"){
        setShow(true)
      
      }else{
        window.open(pdf,"_blank")
      }
  }
    else{
      Swal.fire({
        title: "OOps!",
        text: 'You are not Enrolled in this Course',
        icon: "danger",
        button: "Ok",
      });
    }
  };
  // const handleShowPDF = (pdf) => {
  //   if(buy){
  //  window.open(pdf,"_blank")
  //   }
  //   else{
  //     Swal.fire({
  //       title: "OOps!",
  //       text: 'You are not Enrolled in this Course',
  //       icon: "danger",
  //       button: "Ok",
  //     });
  //   }
  // };

  const handleLoadedMetadata = () => {
    const videolength = videoEl.current;
    const duration = Math.floor(videolength.duration);
    const hours = Math.floor(duration / 3600);
    const minutes = Math.floor((duration % 3600) / 60);
    const seconds = duration % 60;
    
    let formattedDuration = '';
    
    if (hours > 0) {
      formattedDuration += `${hours} hr${hours !== 1 ? 's' : ''} `;
    }
    
    if (minutes > 0) {
      formattedDuration += `${minutes} min${minutes !== 1 ? 's' : ''} `;
    }
    
    formattedDuration += `${seconds} sec${seconds !== 1 ? 's' : ''}`;
    
    settime(formattedDuration);
  };
  return (
    <div className="course__curriculum-content d-sm-flex justify-content-between align-items-center" > 
      <div className="course__curriculum-info">
        {
          item.type === "video" ? <MdOutlineSlowMotionVideo/>:<AiOutlineFilePdf/>
        }
        <h3>
          {" "}
          <div className="course__item white-bg mb-30 fix" style={{display:'none'}}>
      <video src={`${video_link}${video}`}  ref={videoEl} onLoadedMetadata={handleLoadedMetadata}  alt=""  height="300" width="250" autoPlay muted loop playsInline ><source src={`${video_link}${video}`} type='video/mp4'/></video>
    </div>
    
          <span>{title}</span> 
        
        </h3>
      </div>
      {item.type === "video"?
      <>
      <div className="course__curriculum-meta" onClick={()=>handleShow("",item.type)} style={{cursor:'pointer'}}>
        <span className="time">
          {" "}
          <i className="icon_clock_alt"></i> 
          {time ? time :"loading" } 
        </span>
      </div>
      </>
      :
      <>


    

      <button style={{
        backgroundColor:"transparent"
      }} onClick={()=>handleShow(`${video_link}${video}`,item.type)}>View pdf</button>
     
    
      </>
}
       <Modal show={show} onHide={handleClose} fullscreen={true}>
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body> <video src={`${video_link}${video}`}  alt=""  height="100%" width="100%" autoPlay muted loop playsInline controls><source src={`${video_link}${video}`} type='video/mp4'/></video></Modal.Body>
      </Modal>
    </div>
  );
};

export default Lesson;