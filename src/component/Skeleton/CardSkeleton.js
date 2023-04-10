import React from 'react'
import Skeleton from "react-loading-skeleton";

const CardSkeleton = (loading) => {
  return (
    <div
    className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 grid-item cat1 cat2 cat4"
  >
    <div className="course__item white-bg mb-30 fix">
      <div className="course__thumb w-img p-relative fix">
          {loading && <Skeleton width={350}  height={250}/> }

      
      </div>
      <div className="course__content">
        <div className="course__meta d-flex align-items-center justify-content-between">
          <div className="course__lesson">
              {loading && <Skeleton  width={100}  height={30}/>}

          </div>
        </div>
        <h3
          className="course__title"
          style={{ textAlign: "left", paddingTop: "5px" }}
        >
          {loading && <Skeleton  width={150}  height={30}/> }
        </h3>
      </div>
      <div className="course__more d-flex justify-content-between align-items-center">
        <div className="course__status">
          <span style={{ color: "#337c75" }}>{loading ? <Skeleton  width={100}  height={30}/> : 'Paid' }</span>
        </div>
        <div className="course__btn">
          {loading && <Skeleton  width={120}  height={30}/>}
        </div>
      </div>
    </div>
  </div>  )
}

export default CardSkeleton