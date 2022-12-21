import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import customerservice from '../assets/images/footer/customerservice.webp'

const Footer = () => {
  return (
    <Container id="contactus" fluid="md" className="footer">
        <Row>
            <Col xs={12} md={6}>
                <img src={customerservice} alt="customer service" />
            </Col>
            <Col xs={12} md={6}>
                <h1>Customer Service</h1>   
                <p>Our customer service is available 24/7 to answer any questions you may have. We are here to help you.</p>
            </Col>
        </Row>
    </Container>
  )
}

export default Footer
