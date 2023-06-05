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
                <h4>Try the Libraries for Free</h4>

            </div>
            <div className="library-para">
                <p>Access all Libraries for tools on stress, anxiety, sleep and resilience management.</p>
            </div>
            <div className="wrap">
                 <div className="cardBtn">
                <span style={{
                  cursor:"pointer"
                }} onClick={()=>{
                  navigate("/videolibrary")
                }}>

               Free Trial</span>
                 </div>
                 </div>
        </div>
        </div>
        </section>    
    </>
  )
}
