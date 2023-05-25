import React from "react";
import { useNavigate,Link } from "react-router-dom";

const VideoCard = ({...item}) => {

  const img_link = localStorage.getItem("image_link");

  const navigate = useNavigate();
  const {id,name,description,image,playlist_videos_count,pack }=item

  return (
    <div style={{cursor:'pointer'}}>
      <div className="col-xxl-12" onClick={()=>{navigate(`/videolibrarydetail/${id}`)}}>
        <div className="course__item white-bg mb-30 fix">
          <div className="row gx-0">
            <div className="col-xxl-4 col-xl-4 col-lg-4">
              <div className="course__thumb course__thumb-list w-img p-relative fix" >
                <Link>
                  <img src={`${img_link}${image}`} alt="" width='300' height='300' />
                </Link>
              </div>
            </div>
            <div className="col-xxl-8 col-xl-8 col-lg-8">
              <div className="course__right">
                <div className="course__content course__content-3">
                  <div className="course__meta d-flex align-items-center">
                    <div className="course__lesson mr-20">
                      <span>
                        <i className="far fa-book-alt"></i>{playlist_videos_count} Videos
                      </span>
                    </div>
                    
                  </div>
                  <h3 className="course__title course__title-3" style={{textAlign:'left',paddingTop:'5px',paddingBottom:'5px'}}>
                    <Link style={{textDecoration:"none",color:"#000"}}>
                     {name}
                    </Link>
                  </h3>
                  <div className="course__summary">
                    <p style={{textAlign:'left',cursor:'pointer'}} to={`/videolibrarydetail/${id}`} >
                      {description.length > 150 ? `${description.slice(0,150)} ` : description}
                    {description.length > 150 && <span style={{color:'blue'}}> Read more</span>}
                    </p>
                  </div>
                  
                </div>
                <div className="course__more course__more-2 d-flex justify-content-between align-items-center">
                  <div className="course__status">
                    <span style={{color:'#337c75'}}>{pack ? 'Enroll' : 'Paid'}</span>
                  </div>
                  <div className="course__btn">
                    <Link style={{textDecoration:"none",color:"#000"}} className="link-btn" to='/videolibrarydetail'>
               Find Out More
                      <i className="far fa-arrow-right"></i>
                      <i className="far fa-arrow-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
