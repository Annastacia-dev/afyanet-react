import React from 'react'
import { Container,Row, Col } from 'react-bootstrap';
import image from "../../../assets/images/about/nurse.jpg"
import "./about.css


const About = () => {
  return (
    <>
    <div className='about us'>
      <Container>
        <Row>
        <Col md={9} className="about-content">
        <h1 className="about-title"><strong>About Us</strong></h1>
        {/* <p className="text-right">
      At Afyanet, our mission is to make it easy for patients to find and connect with the right healthcare providers.We understand that navigating the healthcare system can be overwhelming,which is why we've developed a platform that makes it simple and convenient for patients to access the care they need.
    </p> */}
    </Col>
     <Col md={8} className="about-image">
    <img src={image} alt = "nurse" className="nurse"  style={{
          display: 'inline-block',
          float: 'right',
          marginLeft: '20px',
          width: "100%"}}/>

    </Col> 
    
  <Col md={4}>
  <p className="text-right">
      At Afyanet, our mission is to make it easy for patients to find and connect with the right healthcare providers.
     
      We understand that navigating the healthcare system can be overwhelming,which is why we've developed a platform that makes it simple and convenient for patients to access the care they need.
    
    </p> 
  </Col>
    </Row>
    </Container>
    </div>
   </>
  )
}

export default About