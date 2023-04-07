import Card from "../../component/Card/Card";
import Footer from "../../component/Footer/Footer";
import Header from "../../component/Header/Header";
import {Link} from 'react-router-dom'
import axios from "axios";
import { useState,useEffect } from "react";
import BaseUrl from '../../component/BaseUrl/BaseUrl'

function Home(){

   const [loading,setLoading]=useState(false);
   const [course,setCourse]=useState([])

   useEffect(()=>{
      courseApi()
   },[])

  async  function courseApi(){
      setLoading(true)
   try {

      const response = await axios.get(`${BaseUrl.baseurl}/user/course`);
      setLoading(false);
      setCourse(response.data.courses)
      console.log(response)
    } catch (error) {
      setLoading(false);
      console.log(error?.response?.message);
    }
   }

    return(
        <main>
<Header/>
        <section className="hero__area hero__height d-flex align-items-center grey-bg-2 p-relative">
           <div className="hero__shape">
              <img className="hero-1-circle" src="assets/img/shape/hero/hero-1-circle.png" alt=""/>
              <img className="hero-1-circle-2" src="assets/img/shape/hero/hero-1-circle-2.png" alt=""/>
              <img className="hero-1-dot-2" src="assets/img/shape/hero/hero-1-dot-2.png" alt=""/>
           </div>
           <div className="container">
              <div className="hero__content-wrapper mt-90">
                 <div className="row align-items-center">
                    <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                       <div className="hero__content p-relative z-index-1" style={{textAlign:'left'}}>
                          <h3 className="hero__title">
                             <span>Access 2700+</span>
                             <span className="yellow-shape">Online <img src="assets/img/shape/yellow-bg.png" alt="yellow-shape"/> </span> 
                             Tutorial From Top Instructor.</h3>
                             <p >Meet university,and cultural institutions, who'll share their experience.</p>
                             <Link to='/courses' href="course-grid.html" className="e-btn" style={{backgroundColor:'#337c75'}} >view all course</Link>
                       </div>
                    </div>
                    <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                       <div className="hero__thumb d-flex p-relative">
                          <div className="hero__thumb-shape">
                             <img className="hero-1-dot" src="assets/img/shape/hero/hero-1-dot.png" alt=""/>
                             <img className="hero-1-circle-3" src="assets/img/shape/hero/hero-1-circle-3.png" alt=""/>
                             <img className="hero-1-circle-4" src="assets/img/shape/hero/hero-1-circle-4.png" alt=""/>
                          </div>
                          <div className="hero__thumb-big mr-30">
                             <img src="assets/img/hero/hero-1.jpg" alt=""/>
                             <div className="hero__quote hero__quote-animation">
                                <span>Tomorrow is our</span>
                                <h4>“When I Grow Up” Spirit Day!</h4>
                             </div>
                          </div>
                          <div className="hero__thumb-sm mt-50 d-none d-lg-block">
                             <img src="assets/img/hero/hero-sm-1.jpg" alt=""/>
                          </div>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </section>
        
        
      
        <section className="course__area pt-115 pb-120 grey-bg">
           <div className="container">
           <div class="row align-items-end">
                  <div class="col-xxl-5 col-xl-6 col-lg-6">
                     <div class="section__title-wrapper mb-60" style={{textAlign:'left'}}>
                        <h2 class="section__title">Find the Right<br/>Online <span class="yellow-bg yellow-bg-big">Course<img src="assets/img/shape/yellow-bg.png" alt=""/></span> for you</h2>
                        <p>You don't have to struggle alone, you've got our assistance and help.</p>
                     </div>
                  </div>
                 
               </div>
             <div className="row grid">
            {course?.map(item=> <Card {...item}/> )}
          
              </div>
           </div>
        </section> 


        
        
<Footer/>
     </main>
    )
}
export default Home;