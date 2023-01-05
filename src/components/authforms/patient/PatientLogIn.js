import React from 'react'
import { Container,Row, Col, Form, Button } from 'react-bootstrap';
import BrandLogo from '../../logo/BrandLogo';
import '../../../css/PatientLogIn.css'

const PatientLogIn = () => {
  return (
    <div className='patient-login'>
        <BrandLogo />
        <Container className="container px-4 px-lg-5">
            <Row className="justify-content-center">
                <Col lg="8">
                    <h2 className="text-center">Hi! Welcome Back!</h2>
                </Col>
            </Row>
            <Row className="justify-content-center">
                <Col lg="8">
                    <Form className="form">
                        <Row className="justify-content-center">
                            <Col lg="6">
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Control name="email" type="email" placeholder="Enter Your Email*" required  autoComplete='on' />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row className="justify-content-center">
                            <Col lg="6">
                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Control name="password" type="password" placeholder="Enter Password*" required autoComplete='on' />
                                </Form.Group>
                            </Col>
                         </Row>

                        <Row className='justify-content-center'>
                            <Col lg='3'>
                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Remember Me" />    
                            </Form.Group>
                            </Col>
                            <Col lg='3'>
                                <a href="/patient/forgot-password">Forgot Password?</a>
                            </Col>
                        </Row>
                        
                        <Row className="justify-content-center">
                            <Col lg="6">
                                <Button className="btn btn-primary btn-xl" type="submit">Log In</Button>
                            </Col>
                        </Row>
                    </Form>
                </Col>
            </Row>
            <Row className="justify-content-center">
                <Col lg="8">
                    <p className="text-center">Don't have an account? <a href="/patient/signup">Sign Up</a></p>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default PatientLogIn