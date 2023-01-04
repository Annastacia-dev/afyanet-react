import React from "react";
import { Container,Row, Col, Button } from 'react-bootstrap';
import image from "../../../assets/images/landing-page/doctor.jpg"
import "./HomePage.css"

function HomePage() {

    return (
        <>
        <div className="home">
            <Container>
                <Row>
                    <Col md={6} className="home-content">
                        <h3 className="home-title">
                        Connecting patients and providers for better healthcare.
                        </h3>
                        <p className="home-text">
                        Welcome to Afyanet, a platform for connecting patients with healthcare providers.Find and connect with the right healthcare provider, so you can get the care you need when you need it.
                        </p>
                        <Button variant="outline-success">Get Started</Button>
                    </Col>
                    <Col md={6} className="home-image">
                        <img src={image} alt = "doctor" className="doctor" style={{width: "100%"}}/>
                    </Col>
                </Row>
            </Container>
        </div>
        </>

    )
}

export default HomePage;