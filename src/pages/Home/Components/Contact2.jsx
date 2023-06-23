import React from 'react'
import "./style.css"
import { Container,Row,Col } from 'react-bootstrap'
import {RxEnvelopeClosed} from 'react-icons/rx'
import {BsInstagram} from 'react-icons/bs'
import Form from 'react-bootstrap/Form';
import contactlogo  from  "./../../../Assets/AboutImages/Oxygen icon.png"
import { Link } from 'react-router-dom'
// import { Link } from 'react-router-dom'


export const Contact2 = () => {
  return (
 <>
    <section className="contact">
        <Container>
            <Row>
            <Col md={6} sm={12}>
            <div className="contact-info">
            
                    <div className="contact-head">
                        <h4>Contact</h4>
                    </div>

                    <div className="emails">
                        <div className="email-icon">
                      <i><RxEnvelopeClosed/></i>
                      </div>
                      <div className="email-info">
                        <Link to="/contact">
                      <h4>
              Get In Touch
                      </h4>
                      
                      
</Link>
                      </div>
                  
                    </div>
                    <div className="emails">
                        <div className="email-icon">
                      <i><BsInstagram/></i>
                      </div>
                      <div className="email-info">
                  <Link to="https://www.instagram.com/oxygen8.health/"> 
                      <h4>
                      ben@oxygen8.health
                       </h4>
                   </Link>
                      </div>
                  
                    </div>
            </div>
           
            </Col>
            <Col md={6} sm={12}>

            <div className="contact-info">
            
            <div className="contact-head">
                <h4>Subscribe</h4>
            </div>
            <div className="email-info">
          <p>Find out about events, techniques and 
stress management strategies.</p>
            </div>
            <div className="form-info">
            <Form className='subform'>
            <Form.Control type="email" placeholder="Email Address"  className='subscribeForm'/>
            <Link to="/register" style={{textDecoration:"none",color:'rgb(51, 124, 117)'}}><button type='submit'>Sign Up</button></Link>

</Form>
            </div>

</div>

              </Col>
              <Col md={12} sm={12}>
    <div className="contact-img-wrap">
      <img src={contactlogo} width="100px" height="100px" alt=""  className='img-fluid'/>
    </div>
              </Col>
            </Row>


            </Container>

    </section>
 
 
 </>
  )
}
