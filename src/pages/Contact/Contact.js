import React, { useState } from 'react'
import Footer from '../../component/Footer/Footer'
import Header from '../../component/Header/Header'
import { Link } from 'react-router-dom'
// import BaseUrl from "../../component/BaseUrl/BaseUrl";
// import axios from "axios";
// import Swal from "sweetalert2";
import { ColorRing } from "react-loader-spinner";

const Contact = () => {
   const [data,setData]=useState()
   const [loader,]=useState(false)

   function hanldeChange(e){
      setData({
         ...data,
         [e.target.name]:e.target.value
      })
   }
   async function handleSubmit(i) {
 console.log(data)
      // setLoader(true)
      // try {
      //   const data1 = new FormData();
      //   data1.append("name", data.name);
      //   data1.append("email", data.email);
      //   data1.append("subject", data.subject);
      //   data1.append("message", data.message);
      //   var config = {
      //     method: "post",
      //     url: `${BaseUrl.baseurl}/user/appointment`,
      //     data: data1,
       
      //   };
      //   const response = await axios(config);
      //   console.log(response);
      //   const { message, status } = response.data;
      //   if (status === true) {
      //     setLoader(false);
      //     Swal.fire({
      //       title: "Good job!",
      //       text: message,
      //       icon: "success",
      //       button: "Ok",
      //     });
      //   } else {
      //     setLoader(false);
      //   }
      // } catch (e) {
      //   console.log(e);
      //   Swal.fire({
      //     title: "Oops",
      //     text: e.response.data.message,
      //     icon: "error",
      //     button: "Ok",
      //   });
      //   setLoader(false);
      // }
    }
  return (
    <div>
        <Header/>
        <section class="page__title-area page__title-height page__title-overlay d-flex align-items-center" style={{background: "url('/assets/img/page-title/page-title.jpg')"}}>
            <div class="container">
               <div class="row">
                  <div class="col-xxl-12">
                     <div class="page__title-wrapper mt-110">
                        <h3 class="page__title">Contact</h3>                         
                        <nav aria-label="breadcrumb">
                           <ol class="breadcrumb">
                              <li class="breadcrumb-item"><a href="index.html">Home</a></li>
                              <li class="breadcrumb-item active" aria-current="page">Contact</li>
                           </ol>
                        </nav>
                     </div>
                  </div>
               </div>
            </div>
         </section>
        <section className="contact__area pt-115 pb-120">
            <div className="container">
               <div className="row">
                  <div className="col-xxl-7 col-xl-7 col-lg-6">
                     <div className="contact__wrapper">
                        <div className="section__title-wrapper mb-40">
                           <h2 className="section__title">Get in<span className="yellow-bg yellow-bg-big">touch<img src="assets/img/shape/yellow-bg.png" alt=""/></span></h2>
                           <p>Have a question or just want to say hi? We'd love to hear from you.</p>
                        </div>
                        <div className="contact__form">
                           <form >
                              <div className="row">
                                 <div className="col-xxl-6 col-xl-6 col-md-6">
                                    <div className="contact__form-input">
                                       <input type="text" placeholder="Your Name" name="name" onChange={(e)=>{hanldeChange(e)}}/>
                                    </div>
                                 </div>
                                 <div className="col-xxl-6 col-xl-6 col-md-6">
                                    <div className="contact__form-input">
                                       <input type="email" placeholder="Your Email" name="email"onChange={(e)=>{hanldeChange(e)}}/>
                                    </div>
                                 </div>
                                 <div className="col-xxl-12">
                                    <div className="contact__form-input">
                                       <input type="text" placeholder="Subject" name="subject"onChange={(e)=>{hanldeChange(e)}}/>
                                    </div>
                                 </div>
                                 <div className="col-xxl-12">
                                    <div className="contact__form-input">
                                       <textarea placeholder="Enter Your Message" name="message"onChange={(e)=>{hanldeChange(e)}}></textarea>
                                    </div>
                                 </div>
                                 <div className="col-xxl-12">
                                    <div className="contact__form-agree  d-flex align-items-center mb-20">
                                       <input className="e-check-input" type="checkbox" id="e-agree"/>
                                       <label className="e-check-label" for="e-agree">I agree to the<Link>Terms & Conditions</Link></label>
                                    </div>
                                 </div>
                                 <div className="col-xxl-12 " >
                                    <div className="contact__btn" style={{float:'left'}}>
                                       <button type="button"  className="e-btn" style={{backgroundColor:'#337c75'}} onClick={(e)=>{handleSubmit(e)}}>{loader === true ?  
                           <ColorRing
                            //  visible={true}
                             height="40"
                             width="40"
                             ariaLabel="blocks-loading"
                             wrapperStyle={{}}
                             wrapperClass="blocks-wrapper"
                              colors={['#fff','#fff','#fff','#fff','#fff']}
                           />
                            :'Send your message'}</button>
                                    </div>
                                 </div>
                              </div>
                           </form>
                        </div>
                     </div>
                  </div>
                  <div className="col-xxl-4 offset-xxl-1 col-xl-4 offset-xl-1 col-lg-5 offset-lg-1">
                     <div className="contact__info white-bg p-relative z-index-1">
                        <div className="contact__shape">
                           <img className="contact-shape-1" src="assets/img/contact/contact-shape-1.png" alt=""/>
                           <img className="contact-shape-2" src="assets/img/contact/contact-shape-2.png" alt=""/>
                           <img className="contact-shape-3" src="assets/img/contact/contact-shape-3.png" alt=""/>
                        </div>
                        <div className="contact__info-inner white-bg">
                           <ul>
                              <li>
                                 <div className="contact__info-item d-flex align-items-start mb-35">
                                    <div className="contact__info-icon mr-15">
                                       <svg className="map" viewBox="0 0 24 24">
                                          <path className="st0" d="M21,10c0,7-9,13-9,13s-9-6-9-13c0-5,4-9,9-9S21,5,21,10z"/>
                                          <circle className="st0" cx="12" cy="10" r="3"/>
                                       </svg>
                                    </div>
                                    <div className="contact__info-text text-left">
                                       <h4 style={{textAlign:'left'}}>New York Office</h4>
                                       <p style={{textAlign:'left'}}><Link >Maypole Crescent 70-80 Upper St Norwich NR2 1LT</Link></p>
   
                                    </div>
                                 </div>
                              </li>
                              <li>
                                 <div className="contact__info-item d-flex align-items-start mb-35">
                                    <div className="contact__info-icon mr-15">
                                       <svg className="mail" viewBox="0 0 24 24">
                                          <path className="st0" d="M4,4h16c1.1,0,2,0.9,2,2v12c0,1.1-0.9,2-2,2H4c-1.1,0-2-0.9-2-2V6C2,4.9,2.9,4,4,4z"/>
                                          <polyline className="st0" points="22,6 12,13 2,6 "/>
                                       </svg>
                                    </div>
                                    <div className="contact__info-text">
                                       <h4>Email us directly</h4>
                                       <p style={{textAlign:'left'}}><Link>support@educal.com</Link></p>
                                       <p style={{textAlign:'left'}}><Link> info@educal.com</Link></p>
                                    </div>
                                 </div>
                              </li>
                              <li>
                                 <div className="contact__info-item d-flex align-items-start mb-35">
                                    <div className="contact__info-icon mr-15">
                                       <svg className="call" viewBox="0 0 24 24">
                                          <path className="st0" d="M22,16.9v3c0,1.1-0.9,2-2,2c-0.1,0-0.1,0-0.2,0c-3.1-0.3-6-1.4-8.6-3.1c-2.4-1.5-4.5-3.6-6-6  c-1.7-2.6-2.7-5.6-3.1-8.7C2,3.1,2.8,2.1,3.9,2C4,2,4.1,2,4.1,2h3c1,0,1.9,0.7,2,1.7c0.1,1,0.4,1.9,0.7,2.8c0.3,0.7,0.1,1.6-0.4,2.1  L8.1,9.9c1.4,2.5,3.5,4.6,6,6l1.3-1.3c0.6-0.5,1.4-0.7,2.1-0.4c0.9,0.3,1.8,0.6,2.8,0.7C21.3,15,22,15.9,22,16.9z"/>
                                          </svg>
                                    </div>
                                    <div className="contact__info-text text-left">
                                       <h4 style={{textAlign:'left'}}>Phone</h4>
                                       <p><a href="tel:+(426)-742-26-44">+(426) 742 26 44</a></p>
                                       <p><a href="tel:+(224)-762-442-32">+(224) 762 442 32</a></p>
                                    </div>
                                 </div>
                              </li>
                           </ul>
                           <div className="contact__social pl-30">
                              <h4>Follow Us</h4>
                              <ul>
                                 <li><Link className="fb" ><i className="social_facebook"></i></Link></li>
                                 <li><Link className="tw" ><i className="social_twitter"></i></Link></li>
                                 <li><Link className="pin" ><i className="social_pinterest"></i></Link></li>
                              </ul>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
 

         <section className="contact__area grey-bg-2 pt-120 pb-90 p-relative fix">
            <div className="contact__shape">
               <img className="contact-shape-5" src="assets/img/contact/contact-shape-5.png" alt=""/>
               <img className="contact-shape-4" src="assets/img/contact/contact-shape-4.png" alt=""/>
            </div>
            <div className="container">
               <div className="row">
                  <div className="col-lg-12 col-md-10 col-sm-12 ">
                     <div className="contact__item text-center mb-30 transition-3 white-bg">
                        <div className="contact__icon d-flex justify-content-center align-items-end">
                           <svg viewBox="0 0 24 24">
                              <circle className="st0" cx="12" cy="12" r="10"/>
                              <path className="st0" d="M8,14c0,0,1.5,2,4,2s4-2,4-2"/>
                              <line className="st0" x1="9" y1="9" x2="9" y2="9"/>
                              <line className="st0" x1="15" y1="9" x2="15" y2="9"/>
                           </svg>
                        </div>
                        <div className="contact__content">
                           <h3 className="contact__title">Knowledge Base</h3>
                           <p>My good sir plastered cuppa barney cobblers mush argy bargy ruddy.</p>
                           <Link className="e-btn e-btn-border">Visit Documentation</Link>
                        </div>
                     </div>
                  </div>
               
               </div>
            </div>
         </section>

        <Footer/>

    </div>
  )
}

export default Contact