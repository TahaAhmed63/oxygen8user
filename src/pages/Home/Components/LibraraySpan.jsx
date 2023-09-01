import React from 'react'
import "./style.css"
import { useNavigate } from 'react-router-dom'

export const LibraraySpan = () => {
  const navigate = useNavigate();

  return (
    
    <>

    <section className="libraryspan">
   <div className="parent-container">
      <div className="bottommark-3"></div> 
 

        <div className="librarycontent-">
            <div className="library-head">
                <h4>The Oxygen8™ Stress Resilience Course</h4>

            </div>
            <div className="library-para">
                <p>An arsenal of over 50+ tools and techniques to build your stress resilience.</p>
            </div>
            <div className="wrap">
                 <div className="cardBtn">
                <span style={{
                  cursor:"pointer"
                }} onClick={()=>{
                  navigate("/Courses")
                }}>

Find Out More</span>
                 </div>
                 </div>
        </div>
        </div>
        </section>    
    </>
  )
}
