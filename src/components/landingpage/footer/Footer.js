import React from 'react'
import {Row, Col} from 'react-bootstrap'
import '../../../css/Footer.css'
import customerservice from '../../../assets/images/footer/customerservice.webp'

const Footer = () => {
  return (
    <div fluid="md" id="contact" className="container-fluid footer">
        <Row>
            <Col xs={12} md={6}>
                <img src={customerservice} alt="customer service" />
            </Col>
            <Col className='content' xs={12} md={6}>
                <h1>Contact Us</h1>   
                <p>Our service is available 24/7 and our dedicated team is always here to assist you.</p>
                <Row className="contacts">
                    <div className="contact">
                        <i className="fa-solid fa-at"></i>
                        <span>info@afyanet.com </span>
                    </div>
                    <div className="contact">
                        <i className="fas fa-phone-alt"></i>
                        <span>254-712-000000</span>
                    </div>
                    <div className="contact">
                        <i className="fas fa-map-marker-alt"></i>
                        <span>Matibabu Plaza, Upperhill, Nairobi</span>
                    </div>
                </Row>
                
                <Row className="socials">
                    <h1>Our socials</h1>        
                    <div className="icons">
                        <a href="https://www.facebook.com/afyanetkenya" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-facebook-f"></i>
                        </a>
                        <a href="https://twitter.com/afyanetkenya" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a href="https://www.instagram.com/afyanetkenya/" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-instagram"></i>
                        </a>
                        <a href="https://wa.me/254712000000" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-whatsapp"></i>
                        </a>
                    </div> 
                </Row>
                {/* Copyright */}
                < Row className="copy">
                    <hr/>
                    <p>© {new Date().getFullYear()} All rights reserved.AfyaNet</p>
                </Row>
            </Col>
        </Row>
    </div>
  )
}

export default Footer
