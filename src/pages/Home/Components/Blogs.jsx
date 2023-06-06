import React from 'react'
import "./style.css"
import icon1 from './../../../Assets/Blogs/Blog1.png'
import icon2 from './../../../Assets/Blogs/Blog2.png'
import icon3 from './../../../Assets/Blogs/Blog3.png'
import { Link } from 'react-router-dom'
import { Container,Row,Col } from 'react-bootstrap'
export const Blogs = () => {
    const BLogData =[

        {
           icon:icon1,
           head:"Courses",
           para:"Give yourself the tools to",
           list1:"Control your own stress ",
           list2:"Build resilience",
           list3:"Cultivate methods to help recover from burnout",
           btn:"Explore",
           linkto:"/courses"
           
        },
        {
            icon:icon2,
            head:"Consultation",
            para:"Dive deeper with: ",
            list1:"Personalised integration plans built around you ",
            list2:"Tailored sessions",
            list3:"Facilitated sessions",
            btn:"Find Out More",
            linkto:"/consultant"
            
         },
         {
            icon:icon3,
            head:"Libraries",
            para:"Guided sessions for: ",
            list1:"Anxiety ",
            list2:"Down-Regulating",
            list4:"Resilience building",
            list3:"Performance",
            btn:"Explore",
            linkto:"/videolibrary"
            
            
         }



    ]
  return (

    <>
   
   <section className="Blogs-home">
  <Container >
    <div className="card-wraper">
    <Row className='justify-content-center align-items-center ml-5'>

        {
            BLogData.map((BLogData,index)=>{
                return(
                  
                    <Col key={index} xl={4} xxl={4} md={4} sm={12} xs={12}>
                  
                    <div className="card">
                        <div className="card-content ">
                            <div style={{
  height: "75%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}} className="card-img">
                                <img style={{
                                    width:"82px",
                                    height:"auto"
                                }} src={BLogData.icon} alt="" />
                            </div>
                            <div className="card-head">
                                <h6>
                                    {BLogData.head}
                                </h6>
                            </div>
                            <div className="card-para">
                                <p>{BLogData.para}</p>
                            </div>
                            <div className="card-list mt-2">
                                   <ul>
                                    <li>{BLogData.list1}</li>
                                    <li>{BLogData.list2}</li>
                                    { index === 2 && <li>{BLogData.list4}</li> }

                                    <li>{BLogData.list3}</li>
                               
                                   </ul>
                            </div>
                            <div className="cardBtn">
                       <Link to={BLogData.linkto} style={{
                        textDecoration:"none",
                        color:"#608984"
                       }}>  <span>{BLogData.btn}</span></Link>       
                            </div>
                        </div>
               
                    </div>
                    </Col>
                
                )
            })
            
        }
      
        
        
   
    
    </Row>
    </div>
  </Container>

  
  
     </section>
   
   </>
  )
}
