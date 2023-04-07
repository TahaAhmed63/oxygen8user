import React from "react";
import { useNavigate,Link } from "react-router-dom";

const VideoCard = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div className="col-xxl-12" onClick={()=>{navigate('/videolibrarydetail')}}>
        <div className="course__item white-bg mb-30 fix">
          <div className="row gx-0">
            <div className="col-xxl-4 col-xl-4 col-lg-4">
              <div className="course__thumb course__thumb-list w-img p-relative fix" >
                <Link>
                  <img src="assets/img/course/list/course-1.jpg" alt="" />
                </Link>
                <div className="course__tag" >
                  <Link style={{background:'#337c75'}}>Art & Design</Link>
                </div>
              </div>
            </div>
            <div className="col-xxl-8 col-xl-8 col-lg-8">
              <div className="course__right">
                <div className="course__content course__content-3">
                  <div className="course__meta d-flex align-items-center">
                    <div className="course__lesson mr-20">
                      <span>
                        <i className="far fa-book-alt"></i>43 Lesson
                      </span>
                    </div>
                    
                  </div>
                  <h3 className="course__title course__title-3" style={{textAlign:'left',paddingTop:'5px',paddingBottom:'5px'}}>
                    <Link>
                      Become a product Manager learn the skills & job.
                    </Link>
                  </h3>
                  <div className="course__summary">
                    <p style={{textAlign:'left'}}>
                      Communia virtutes tutiorem declarat stoicorum sanabat
                      oblivisci nostris tamquam iucunditatem
                    </p>
                  </div>
                  
                </div>
                <div className="course__more course__more-2 d-flex justify-content-between align-items-center">
                  <div className="course__status">
                    <span style={{color:'#337c75'}}>Free</span>
                  </div>
                  <div className="course__btn">
                    <Link className="link-btn" to='/videolibrarydetail'>
                      Know Details
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
