import React from 'react'
import "./style.css"
import icon1 from './../../../Assets/Blogs/Blog1.png'
import icon2 from './../../../Assets/Blogs/Blog2.png'
import icon3 from './../../../Assets/Blogs/Blog3.png'
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
           btn:"Explore"
           
        },
        {
            icon:icon2,
            head:"Consultation",
            para:"Dive deeper with: ",
            list1:"Personalised integration plans built around you ",
            list2:"Tailored sessions",
            list3:"Facilitated sessions",
            btn:"Find Out More"
            
         },
         {
            icon:icon3,
            head:"Libraries",
            para:"Guided sessions for: ",
            list1:"Anxiety ",
            list2:"Down-Regulating",
            list4:"Resilience building",
            list3:"Performance",
            btn:"Explore"
            
            
         }



    ]
  return (

    <>
   
   <section className="Blogs-home">
    <Container fluid>
  <Container >
    <div className="card-wraper">
    <Row className='justify-content-center align-items-center ml-5'>

        {
            BLogData.map((BLogData,index)=>{
                return(
                  
                    <Col key={index} md={4} sm={12} xs={12}>
                  
                    <div className="card">
                        <div className="card-content">
                            <div className="card-img">
                                <img src={BLogData.icon} alt="" />
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
                                <span>{BLogData.btn}</span>
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
  </Container>
  
  
     </section>
   
   </>
  )
}
