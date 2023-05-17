/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import Header from "../../component/Header/Header";
import Footer from "../../component/Footer/Footer";
import StripeCheckout from "react-stripe-checkout";
import { ColorRing } from "react-loader-spinner";
import axios from "axios";
import { useState, useEffect } from "react";
import BaseUrl from "../../component/BaseUrl/BaseUrl";
import CardSkeleton from "../../component/Skeleton/CardSkeleton";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import "./../../../src/pages/About/Components/style.css"
import {Row,Col} from 'react-bootstrap'
const Subscription = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [subscription, setsubscription] = useState([]);
  const userToken = localStorage.getItem("accesstoken");
  const arr = [1, 2, 3, 4, 5, 6];

  useEffect(() => {
    subscriptionApi();
  }, []);

  async function subscriptionApi() {
    setLoading(true);
    try {
      var config = {
        method: "get",
        url: `${BaseUrl.baseurl}/user/subscription/all/packages`,
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${userToken}`,
        },
      };
      const response = await axios(config);

      setLoading(false);
      setsubscription(response.data.bulks);
      console.log('subscription--->',response.data.bulks[0].pack);
    } catch (error) {
      setLoading(false);
      console.log(error?.response?.message);
    }
  }

  const onToken = async (token, item) => {
    setLoading(true);
    try {
      const data1 = new FormData();
      data1.append("bulk_id", item.id);
      data1.append("plan_id", "");
      data1.append("source", token.id);
      data1.append("type", "bulk");
      console.log(token.id);
      var config = {
        method: "post",
        url: `${BaseUrl.baseurl}/user/subscription`,
        data: data1,
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${userToken}`,
        },
      };
      const response = await axios(config);
      const { message } = response;
      setLoading(false);
      Swal.fire({
        title: "Good job!",
        text: message,
        icon: "success",
        button: "Ok",
      });
      console.log(response);
    } catch (e) {
      console.log(e);
      Swal.fire({
        title: "Good job!",
        text: e.message,
        icon: "success",
        button: "Ok",
      });
    }
  };

  return (
    <div>
      <Header />

      {/* <section
        className="page__title-area page__title-height page__title-overlay d-flex align-items-center"
        style={{
          background: "url('/assets/img/page-title/yoga4.jpg')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          objectFit: "contain",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-xxl-12">
              <div className="page__title-wrapper mt-110">
                <h3 className="page__title">Subscription</h3>
              </div>
            </div>
          </div>
        </div>
      </section> */}
        <section className="AboutPage">
            <Row>

               <Col md={12} sm={12}>
                  <div className="headwrapabout">
                     <h1>Video Library</h1>
                  </div>
               </Col>


            </Row>

         </section>

      <section className="course__area pt-120 pb-120">
        <div className="container">
          <div className="row">
            <div className="col-xxl-12">
              <div className="course__tab-conent">
                <div className="tab-content" id="courseTabContent">
                  <div
                    className="tab-pane fade show active"
                    id="grid"
                    role="tabpanel"
                    aria-labelledby="grid-tab"
                  >
                    <div className="row">
                      {loading &&
                        arr.map((item) => <CardSkeleton loading={loading} />)}

                      {subscription?.map((item) => (
                        <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 grid-item cat1 cat2 cat4 ">
                          <div className="course__item white-bg mb-30 fix subCard">
                            <h3 className="subCard-text">{item?.name}</h3>
                            <h4 className="subCard-price">
                              <sub>£</sub>
                              {item?.price}
                            </h4>
                            <p>
                              for {item?.duration} {item?.period}
                            </p>
                            <br />
                            <p className="subCard-detail">
                              {item?.description}
                            </p>
                            {userToken ? item.pack ?
                            <button
                                style={{
                                  color: "#fff",
                                  backgroundColor: "#74b3ac",
                                  width: "80%",
                                  textAlign: "center",
                                  marginTop: "30px",
                                  marginBottom: "10px",
                                  borderStyle: "solid",
                                  borderColor: "#fff",
                                  fontWeight: "bold",
                                  borderRadius: "50px",
                                  paddingInline: "50px",
                                  paddingTop: "10px",
                                  paddingBottom: "10px",
                                  fontSize: "1rem",
                                }}
                              >
                                Enroll
                              </button> : (
                              <StripeCheckout
                                token={(token) => {
                                  onToken(token, item);
                                }}
                                stripeKey="pk_test_51MdqNVAOm2Y7pmXtOPM7GnEqm0icL0bkvRAKxCdVUjnRyIKkDh5HGnVexJGiDG48c9B4kLQKxIVwCCC4DyTjdP0o00FWouzEvv"
                                amount={item?.price * 100}
                              >
                                <button
                                  type="submit"
                                  style={{
                                    color: "#fff",
                                    backgroundColor: "#74b3ac",
                                    width: "80%",
                                    textAlign: "center",
                                    marginTop: "30px",
                                    marginBottom: "10px",
                                    borderStyle: "solid",
                                    borderColor: "#fff",
                                    fontWeight: "bold",
                                    borderRadius: "50px",
                                    paddingInline: "50px",
                                    paddingTop: "10px",
                                    paddingBottom: "10px",
                                    fontSize: "1rem",
                                  }}
                                >
                                  {" "}
                                  {loading === true ? (
                                    <ColorRing
                                      visible={true}
                                      height="40"
                                      width="40"
                                      ariaLabel="blocks-loading"
                                      ss
                                      wrapperStyle={{}}
                                      wrapperClass="blocks-wrapper"
                                      colors={[
                                        "#fff",
                                        "#fff",
                                        "#fff",
                                        "#fff",
                                        "#fff",
                                      ]}
                                    />
                                  ) : (
                                    "Buy"
                                  )}
                                </button>
                              </StripeCheckout>
                            ) : (
                              <button
                                onClick={() => {
                                  navigate("/signin");
                                }}
                                style={{
                                  color: "#fff",
                                  backgroundColor: "#74b3ac",
                                  width: "80%",
                                  textAlign: "center",
                                  marginTop: "30px",
                                  marginBottom: "10px",
                                  borderStyle: "solid",
                                  borderColor: "#fff",
                                  fontWeight: "bold",
                                  borderRadius: "50px",
                                  paddingInline: "50px",
                                  paddingTop: "10px",
                                  paddingBottom: "10px",
                                  fontSize: "1rem",
                                }}
                              >
                                buy
                              </button>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Subscription;
