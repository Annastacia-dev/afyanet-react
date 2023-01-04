import React from "react";
import { Container,Row, Col} from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import image from "../../../assets/images/landing-page/doctor.jpg"
import "./HomePage.css"

function HomePage() {
    const navigate = useNavigate();
    return (
        <>
        <div className="home">
            <Container>
                <Row>
                    <Col md={6} className="home-content">
                        <h3 className="home-title">
                        Connecting patients and healthcare providers for better healthcare.
                        </h3>
                        <p className="home-text">
                        Welcome to Afyanet, a platform for connecting patients with healthcare providers.
                        Find and connect with the right healthcare provider, so you can get the care you need when you need it.
                        </p>
                        <button onClick={() => navigate('/patient-signup')}  className="btn btn-primary" type="submit">Get Started</button>
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