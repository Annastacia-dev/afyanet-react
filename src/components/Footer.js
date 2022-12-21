import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import '../css/Footer.css'
import customerservice from '../assets/images/footer/customerservice.webp'

const Footer = () => {
  return (
    <Container fluid="md" id="contactus" className="footer">
        <Row className="grid-container">
            <Col xs={12} md={6} className="grid-item">
                <img src={customerservice} alt="customer service" />
            </Col>
            <Col className='content' xs={12} md={6}>
                <h1>Contact Us</h1>   
                <p>Our service is available 24/7 and our dedicated team is always here to assist you.</p>
                {/* Contacts with icons */}
                <div className="contacts">
                    <div className="contact">
                        <i className="fas fa-phone-alt"></i>
                        <p>Phone: +1 234 567 890</p>
                    </div>
                    <div className="contact">
                        <i className="fas fa-envelope"></i>
                        <p>Email: info@afyanet.com </p>
                    </div>
                    <div className="contact">
                        <i className="fas fa-map-marker-alt"></i>
                        <p>Address: 1234, Main Street, New York, USA</p>
                    </div>
                </div>
            </Col>
        </Row>
    </Container>
  )
}

export default Footer
