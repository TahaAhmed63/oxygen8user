/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import Footer from "../../component/Footer/Footer";
import Header from "../../component/Header/Header";
import VideoCard from "../../component/VideoLibaray/VideoCard";
import axios from "axios";
import { useState, useEffect } from "react";
import BaseUrl from "../../component/BaseUrl/BaseUrl";
import VideoCardSkeleton from "../../component/Skeleton/VideoCardSkeleton";
import "./../../../src/pages/About/Components/style.css"
import {Row,Col,Container} from 'react-bootstrap'
import { Contact2 } from "../Home/Components/Contact2";

const Playlist = () => {
  const [loading, setLoading] = useState(false);
  const [playlist, setPlaylist] = useState([]);
  const userToken = localStorage.getItem("accesstoken");
  const arr = [1, 1, 1, 1];

  useEffect(() => {
    playlistApi();
  }, []);

  async function playlistApi() {
    setLoading(true);
    try {
      var config = {
        method: "get",
        url: `${BaseUrl.baseurl}/user/playlist`,
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${userToken}`,
        },
      };
      const response = await axios(config);
      setLoading(false);
      setPlaylist(response.data.playlists);
      console.log(response);
    } catch (error) {
      setLoading(false);
      console.log(error?.response?.message);
    }
  }

  return (
    <div>
      <Header />
      {/* <section
        className="page__title-area page__title-height page__title-overlay d-flex align-items-center"
        style={{ background: "url('/assets/img/page-title/page-title.jpg')" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-xxl-12">
              <div className="page__title-wrapper mt-110">
                <h3 className="page__title">Video Library</h3>
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
                            bottom: "2rem"}
                     }>TM</em> Library</h1>
                  </div>
               </Col>


            </Row>

         </section>
        <section style={{
          marginTop:"4rem"
        }} className="library-text">
          <Container>
            <Row>
              
              <Col md={12} xl={12} xs={12} xxl={12}>
                <h3 style={{
                  color:"#317C74",
                  fontSize:"44px"

                }}>Guided session to influence your nervous system</h3>
                <p style={{
                  color:"#317C74",
                  fontSize:"44px",
                  lineHeight:"45px",
                  textAlign:"left",
                  marginLeft:"80px"

                }}>the Video library offers accessible down-regulation performance-enhancing and anxiety management tools in the form of guided sessions. </p>
              </Col>
            </Row>
          </Container>
        </section>

      <section className="course__area pt-120 pb-120">
        <div className="container">
          <div className="row">
            {loading &&
              arr.map((item) => <VideoCardSkeleton loading={loading} />)}

            {playlist?.map((item) => (
              <VideoCard {...item} />
            ))}
          </div>
        </div>
      </section>
      <Contact2/>
      <Footer />
  
    </div>
  );
};

export default Playlist;
