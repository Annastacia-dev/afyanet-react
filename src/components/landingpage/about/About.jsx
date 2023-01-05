import React from 'react'
import { Container,Row, Col } from 'react-bootstrap';
import image from "../../../assets/images/about/nurse2.jpg"
import "./about.css"


const About = () => {
  return (
    <>
    <div id='about' className='about us'>
      <Container>
        <Row>
        <Col md={6} className="about-image">
          <img src={image} alt = "nurse" />
        </Col>
        <Col md={6} className="about-content">
          <h1 className="about-title"><strong>About Us</strong></h1>
          <p>
            At Afyanet, our mission is to make it easy for patients to find and connect with the right healthcare providers.
            We understand that navigating the healthcare system can be overwhelming,which is why we've developed a platform that makes it simple and convenient for patients to access the care they need.
          </p>
          <p>
            Afyanet is a platform that connects patients to healthcare providers in a simple and convenient way.
            We are a team of passionate individuals who are committed to making healthcare more accessible and affordable for all.
          </p>
        </Col>
    </Row>
    </Container>
    </div>
   </>
  )
}

export default About