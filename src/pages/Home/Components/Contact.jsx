import React from 'react'
import "./style.css"
import { Container,Row,Col } from 'react-bootstrap'
import {RxEnvelopeClosed} from 'react-icons/rx'
import {BsInstagram} from 'react-icons/bs'
import Form from 'react-bootstrap/Form';
import contactlogo  from  "./../Fav.png"


export const Contact = () => {
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
                      <h4>
                      info@oxygen8breathwork.com
                      </h4>
                      </div>
                  
                    </div>
                    <div className="emails">
                        <div className="email-icon">
                      <i><BsInstagram/></i>
                      </div>
                      <div className="email-info">
                      <h4>
                      @Oxygen8_Breathwork
                                            </h4>
                      </div>
                  
                    </div>
            </div>
           
            </Col>
            <Col md={6} sm={12}>

            <div className="contact-info">
            
            <div className="contact-head">
                <h4>Support</h4>
            </div>
            <div className="email-info">
          <p>Find out about events, techniques and 
stress management strategies.</p>
            </div>
            <div className="form-info">
            <Form>
            <Form.Control type="email" placeholder="Email Address" />
<button type='submit'>Sign Up</button>
</Form>
            </div>

</div>

              </Col>
              <Col md={12} sm={12}>
    <div className="contact-img-wrap">
      <img src={contactlogo} alt="" />
    </div>
              </Col>
            </Row>


            </Container>

    </section>
 
 
 </>
  )
}
