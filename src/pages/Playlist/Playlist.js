import React from 'react'
import Footer from "../../component/Footer/Footer";
import Header from "../../component/Header/Header";
import { Link } from 'react-router-dom';
import VideoCard from '../../component/VideoLibaray/VideoCard';
const Playlist = () => {

    const arr=[1,2,3,4,5]

  return (
    <div>
        <Header/>
        <section className="page__title-area page__title-height page__title-overlay d-flex align-items-center" style={{background: "url('/assets/img/page-title/page-title.jpg')"}}>
            <div className="container">
               <div className="row">
                  <div className="col-xxl-12">
                     <div className="page__title-wrapper mt-110">
                        <h3 className="page__title">Video Library</h3>                         
                        <nav aria-label="breadcrumb">
                           <ol className="breadcrumb">
                              <li className="breadcrumb-item"><Link to='/'>Home</Link></li>
                              <li className="breadcrumb-item active" aria-current="page">Video Library</li>
                           </ol>
                        </nav>
                     </div>
                  </div>
               </div>
            </div>
         </section>

         <section className="course__area pt-120 pb-120">
            <div className="container">
               <div className="row">

               {arr.map(item=> <VideoCard/> )}
               
               </div>
            </div>
         </section>
        <Footer/>

    </div>
  )
}

export default Playlist