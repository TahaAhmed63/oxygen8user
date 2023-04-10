/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import Header from '../../component/Header/Header'
import Footer from '../../component/Footer/Footer'
import { Link ,useParams} from 'react-router-dom'
// import Video from '../../component/VideoList/VideoList'
import { useEffect,useState} from "react";
import axios from "axios";
import BaseUrl from '../../component/BaseUrl/BaseUrl'
import Sidebar from '../../component/Sidebar/Sidebar'
import VideoList from '../../component/VideoList/VideoList'

const VideoLibraryDetail = () => {

  // const arr=[1,2,3,4]

  const {id}=useParams()

  const img_link = localStorage.getItem("image_link");

   const [,setLoading]=useState(false);
   const [video,setVideo]=useState()

   useEffect(()=>{
       videoApi()
   },[])

  async  function videoApi(){
   setLoading(true)
   try {

      const response = await axios.get(`${BaseUrl.baseurl}/user/playlist/${id}`);
      setLoading(false);
      console.log('video details===>',response.data)
      setVideo(response.data.playlist)
      console.log(response)
    } catch (error) {
      setLoading(false);
      console.log(error?.response?.message);
    }
   }

  return (
    <div>
        
        <Header/>
        <main>
        <section className="page__title-area pt-120 pb-90">
          <div className="page__title-shape">
            <img
              className="page-title-shape-5 d-none d-sm-block"
              src="/assets/img/page-title/page-title-shape-1.png"
              alt=""
            />
            <img
              className="page-title-shape-6"
              src="/assets/img/page-title/page-title-shape-6.png"
              alt=""
            />
            <img
              className="page-title-shape-7"
              src="/assets/img/page-title/page-title-shape-4.png"
              alt=""
            />
          </div>
          <div className="container">
            <div className="row">
              <div className="col-xxl-8 col-xl-8 col-lg-8">
                <div className="course__wrapper">
                  <div className="page__title-content mb-25">
                    <div className="page__title-breadcrumb">
                      <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                          <li className="breadcrumb-item">
                            <Link to="/">Home</Link>
                          </li>
                          <li className="breadcrumb-item">
                            <Link to="/videolibrary">Video Library</Link>
                          </li>
                          <li
                            className="breadcrumb-item active"
                            aria-current="page"
                          >   
                              {video?.name}
                          </li>
                        </ol>
                      </nav>
                    </div>
                    <h5 className="page__title-3" style={{ textAlign: "left" }}>
                          {video?.name}
                   </h5>
                  </div>
                  <div className="course__meta-2 d-sm-flex mb-30"></div>
                  <div className="course__img w-img mb-30">
                    <img
                      src={`${img_link}${video?.image}`}
                      alt=""
                    />
                  </div>
                  <div className="course__tab-2 mb-45">
                    <ul className="nav nav-tabs" id="courseTab" role="tablist">
                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link active"
                          id="description-tab"
                          data-bs-toggle="tab"
                          data-bs-target="#description"
                          type="button"
                          role="tab"
                          aria-controls="description"
                          aria-selected="true"
                        >
                          {" "}
                          <i className="icon_ribbon_alt"></i>{" "}
                          <span>Discription</span>{" "}
                        </button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link "
                          id="curriculum-tab"
                          data-bs-toggle="tab"
                          data-bs-target="#curriculum"
                          type="button"
                          role="tab"
                          aria-controls="curriculum"
                          aria-selected="false"
                        >
                          {" "}
                          <i className="icon_book_alt"></i>{" "}
                          <span>Curriculum</span>{" "}
                        </button>
                      </li>
                    </ul>
                  </div>
                  <div className="course__tab-content mb-95">
                    <div className="tab-content" id="courseTabContent">
                      <div
                        className="tab-pane fade show active"
                        id="description"
                        role="tabpanel"
                        aria-labelledby="description-tab"
                      >
                        <div className="course__description">
                          <h3 style={{ textAlign: "left" }}>Video Library Overview</h3>
                          <p style={{ textAlign: "left" }}>
                           {video?.description}
                          </p>
                        </div>
                      </div>
                      <div
                        class="tab-pane fade"
                        id="curriculum"
                        role="tabpanel"
                        aria-labelledby="curriculum-tab"
                      >
                        <div class="course__curriculum">
                          {/* video list */}
                          <div className="row">
                  <div className="col-xxl-12">
                     <div className="course__tab-conent">
                        <div className="tab-content" id="courseTabContent">
                           <div className="tab-pane fade show active" id="grid" role="tabpanel" aria-labelledby="grid-tab">
                              <div className="row">
                              {video?.playlist_videos?.map(item=> <VideoList {...item} />)}

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
              </div>
              <div className="col-xxl-4 col-xl-4 col-lg-4">
                {<Sidebar length={video?.playlist_videos?.length} img={video?.image}/>}
              </div>
            </div>
          </div>
        </section>
      </main>
        <Footer/>
        
        </div>
  )
}

export default VideoLibraryDetail