/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import Header from '../../component/Header/Header'
import Footer from '../../component/Footer/Footer'
import Card from '../../component/Card/Card'
import axios from "axios";
import { useState, useEffect } from "react";
import BaseUrl from '../../component/BaseUrl/BaseUrl'
// import CardSkeleton from '../../component/Skeleton/CardSkeleton'
import "./../About/Components/style.css"
import { Row, Col,Container } from "react-bootstrap"
import { Contact2 } from '../Home/Components/Contact2';
import VideoCardSkeleton from "../../component/Skeleton/VideoCardSkeleton";


const Courses = () => {

   const [loading, setLoading] = useState(false);
   const [courses, setCourses] = useState([])
   const userToken = localStorage.getItem("accesstoken");

   const arr = [1, 2, 3, 4, 5, 6]

   // useEffect(() => {
   //    courseApi()
   // }, [])

   // const courseApi = async () => {
   //    setLoading(true);
   //    try {
   //       var config = {
   //          method: "get",
   //          url: `${BaseUrl.baseurl}/user/course`,
   //          headers: {
   //             Accept: "application/json",
   //             Authorization: `Bearer ${userToken}`,
   //          },
   //       };

   //       const response = await axios(config);
   //       setCourses(response.data.courses);
   //       setLoading(false);

   //    } catch (error) {
   //       setLoading(false);
   //       console.log(error?.response?.message);
   //    }
   // };

    useEffect(() => {
      courseApi();
    }, []);

    const courseApi = async () => {
      setLoading(true);
      try {
        var config = {
          method: "get",
          url: `${BaseUrl.baseurl}/user/course`,
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${userToken}`,
          },
        };

        const response = await axios(config);
        setCourses(response.data.courses);
        localStorage.setItem("image_link", response.data.image_link);
        localStorage.setItem("video_link", response.data.videolink);
        setLoading(false);

      } catch (error) {
        setLoading(false);
        console.log(error?.response?.message);
      }
    };

   return (
      <div>
         <Header />
         {/* 
        <section className="page__title-area page__title-height page__title-overlay d-flex align-items-center"  style={{background: "url('/assets/img/page-title/yoga4.jpg')"
        ,backgroundRepeat:"no-repeat",backgroundSize: "cover",objectFit:'contain'}}>
            <div className="container">
               <div className="row">
                  <div className="col-xxl-12">
                     <div className="page__title-wrapper mt-110">
                        <h3 className="page__title">Courses</h3>                         
                       
                     </div>
                  </div>
               </div>
            </div>
         </section> */}
         <section className="AboutPage">
            <Row>

                  <Col md={12} sm={12}>
                     <div className="headwrapabout">
                     <h1> The Oxygen8 <em style={
                        {
                           fontSize: "12px",
                              position: "relative",
                              bottom: "2rem",
                              left: "-16px",
                              fontStyle:"normal"}
                        }>TM</em>
                     <br className='break-mobile'/>
                        Courses</h1>
                  </div>
               </Col>


            </Row>

         </section>
         <section style={{
          marginTop:"4rem",
          marginBottom:"4rem"
        }} className="library-text">
          <Container>
            <Row>
              
              <Col md={12} xl={12} xs={12} xxl={12}>
                <h3 className='mb-left' style={{
                  color:"#317C74",
                  fontSize:"30px"

                }}>Science-based techniques to boost stress resilience, productivity and recovery. </h3>
                <p  style={{
                  color:"#317C74",
                  fontSize:"24px",
                  lineHeight:"45px",
                  textAlign:"justify",
                  // marginLeft:"58px"
                  maxWidth:"1075px",
                  margin:"0 auto"

                }}>"Discover the latest, evidence-based biofeedback techniques that enable you to effectively regulate stress, anxiety, and overwhelm at any time and in any location. By combining these techniques with guided macro-level adjustments, you can enhance your body's resilience to stress and promote overall health improvement." </p>
              </Col>
            </Row>
          </Container>
        </section>

         <section className="course__area pt-120 pb-120" style={{
backgroundColor:"#317C74",
         }}>
         <div className="container">
          <div className="row">
                     <div className="course__tab-conent">
                        <div className="tab-content" id="courseTabContent">
                           <div className="tab-pane fade show active" id="grid" role="tabpanel" aria-labelledby="grid-tab">
                              <div className="row">
                                 {loading && arr.map(item => <VideoCardSkeleton loading={loading} />)}

                                 {courses?.map(item => <Card {...item} />)}
                              </div>
                           </div>

                 
                     </div>
                  </div>
               </div>

            </div>
         </section>
<Contact2/>
         <Footer />

      </div>
   )
}

export default Courses