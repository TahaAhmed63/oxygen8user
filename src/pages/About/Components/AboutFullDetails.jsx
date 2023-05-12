import React from 'react'
import "./style.css"
import { Container,Row,Col } from 'react-bootstrap'
import owner1 from "./../../../Assets/AboutImages/Ben-In-Front-Of-Roll-Mats.png"
export const AboutFullDetails = () => {
  return (
   <>
   <section className="main-about mt-5">
    <Container fluid>
        <Container>
   <div className="more-detail-wrap">
    <Row>
       <Col lg={4} md={4} sm={12}>
        <div className="owner-image-wrap">
            <div className="owner1">
                <img src={owner1} className='img-fluid' alt="" />
            </div>
            <div className="owner1">
                <img src={owner1} className='img-fluid' alt="" />
            </div>
        </div>
       
       
       </Col>
       <Col lg={7} md={8} sm={12}>

       <div className="para-wrap-about">
        <p className="mb-3">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.        </p>
        <p className="mb-3">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. 
        Curabitur sodales ligula in libero. Sed dignissim lacinia nunc. Curabitur tortor. 
        </p>
        <p className="mb-3">
        Nulla metus metus, ullamcorper vel, tincidunt sed, euismod in, nibh. Quisque volutpat condimentum velit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam nec ante. Sed lacinia, urna non tincidunt mattis, tortor neque adipiscing diam, a cursus ipsum ante quis turpis. Nulla facilisi. Ut fringilla. Suspendisse potenti. Nunc feugiat mi a tellus consequat imperdiet. Vestibulum sapien. Proin quam. 

Etiam ultrices. Suspendisse in justo eu magna luctus suscipit. Sed lectus. Integer euismod lacus luctus magna. Quisque cursus,
        </p>
        <p className="mb-3">
        Nulla metus metus, ullamcorper vel, tincidunt sed, euismod in, nibh. Quisque volutpat condimentum velit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam nec ante. Sed lacinia, urna non tincidunt mattis, tortor neque adipiscing diam, a cursus ipsum ante quis turpis. Nulla facilisi. Ut fringilla. Suspendisse potenti. Nunc feugiat mi a tellus consequat imperdiet. Vestibulum sapien. Proin quam. 

Etiam ultrices. Suspendisse in justo eu magna luctus suscipit. Sed lectus.
        </p>
        <p className="mb-3">
        Suspendisse in justo eu magna luctus suscipit. Sed lectus. Integer
        </p>
       </div>
       
       </Col>
       <div className="mt-5">
       <Col md={12} sm={12}>
          <div className="button-wrap">
            <div className="button-about-1">
                <button> Explore Cources </button>
            </div>
            <div className="button-about-1">
                <button> Explore Libraries </button>
            </div>
          </div>
       </Col>
       </div>
    </Row>
   </div>
   </Container>
   </Container>
   </section>
   
   
   
   </>
  )
}
