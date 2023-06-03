/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import Skeleton from "react-loading-skeleton";

const DetailSkeleton = (loading) => {

  return (
    <div>
      <main>
        <section className="page__title-area pt-120 pb-90">
        
          <div className="container">
            <div className="row">
              <div className="col-xxl-8 col-xl-8 col-lg-8">
                <div className="course__wrapper">
                  <div className="page__title-content mb-25">
                    
                    <h5 className="page__title-3 text-start">{loading && <Skeleton width={300}  height={50}/> }</h5>
                  </div>
                  <div className="course__meta-2 d-sm-flex mb-30">   {loading && <Skeleton width={300}  height={400}/> }</div>
                  {/* <div className="course__img w-img mb-30 text-start">
                
                  </div> */}
                  <div className="course__tab-2 mb-45">
                
                  </div>
                  <div className="course__tab-content mb-95">
                    <div className="tab-content" id="courseTabContent">
                      <div
                        className="tab-pane fade show active"
                        id="description"
                        role="tabpanel"
                        aria-labelledby="description-tab"
                      >
                        <div className="course__description text-start">
                        </div>
                      </div>
                      <div
                        class="tab-pane fade"
                        id="curriculum"
                        role="tabpanel"
                        aria-labelledby="curriculum-tab"
                      >
                        <div class="course__curriculum">
                          <div className="row">
                            <div className="col-xxl-12">
                              <div className="course__tab-conent">
                                <div
                                  className="tab-content"
                                  id="courseTabContent"
                                >
                                  <div
                                    className="tab-pane fade show active"
                                    id="grid"
                                    role="tabpanel"
                                    aria-labelledby="grid-tab"
                                  >
                                
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xxl-4 col-xl-4 col-lg-4">
                <div className="course__sidebar pl-70 p-relative">
                  <div className="course__shape">
                    <div className="course__tab-2 mb-45 ">
                      {/* <ul
                        className="nav nav-tabs"
                        id="courseTab"
                        role="tablist"
                      >
                        <li className="nav-item w-50" role="presentation">
                          <button
                            className="nav-link active"
                            id="yearly-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#yearly"
                            type="button"
                            role="tab"
                            aria-controls="yearly"
                            aria-selected="true"
>                          </button>
                        </li>
                        <li className="nav-item w-50" role="presentation">
                          <button
                            className="nav-link "
                            id="monthly-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#monthly"
                            type="button"
                            role="tab"
                            aria-controls="monthly"
                            aria-selected="false"
                          >
                             
                      </button>
                        </li>
                      </ul> */}
                    </div>

                    <div className="course__tab-content mb-95">
                      <div className="tab-content" id="courseTabContent">
                        <div
                          class="tab-pane fade show active"
                          id="yearly"
                          role="tabpanel"
                          aria-labelledby="yearly-tab"
                        >
                          
                            {loading && <Skeleton width={300}  height={400}/> }
                          
                        </div>

                     
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default DetailSkeleton;
