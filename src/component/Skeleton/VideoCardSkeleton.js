import React from "react";
import Skeleton from "react-loading-skeleton";

const VideoCardSkeleton = (loading) => {

  return (
    <div>
      <div className="col-xxl-12" >
        <div className="course__item white-bg mb-30 fix">
          <div className="row gx-0">
            <div className="col-xxl-4 col-xl-4 col-lg-4">
              <div className="course__thumb course__thumb-list w-img p-relative fix" >
              {loading && <Skeleton width={350}  height={300}/> }
              </div>
            </div>
            <div className="col-xxl-8 col-xl-8 col-lg-8">
              <div className="course__right">
                <div className="course__content course__content-3">
                  <div className="course__meta d-flex align-items-center">
                    <div className="course__lesson mr-20">
                      <span>
                      {loading && <Skeleton  width={120}  height={30}/>}
                      </span>
                    </div>
                    
                  </div>
                  <h3 className="course__title course__title-3" style={{textAlign:'left',paddingTop:'5px',paddingBottom:'5px'}}>
                  {loading && <Skeleton  width={500}  height={50}/>}

                  </h3>
                  <div className="course__summary">
                    <p style={{textAlign:'left'}}>
                    {loading && <Skeleton  width={150}  height={40}/>}

                    </p>
                  </div>
                  
                </div>
                <div className="course__more course__more-2 d-flex justify-content-between align-items-center">
                  <div className="course__status">
                  {loading && <Skeleton  width={100}  height={30}/>}

                  </div>
                  <div className="course__btn">
                  {loading && <Skeleton  width={120}  height={30}/>}

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

export default VideoCardSkeleton;
