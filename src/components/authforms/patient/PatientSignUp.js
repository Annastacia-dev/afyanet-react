import React from 'react'
import { Container,Row, Col, Form, Button, Navbar } from 'react-bootstrap';
import BrandLogo from '../../logo/BrandLogo';

const PatientSignUp = () => {
  return (
    <div className="patient-signup">
        <Navbar expand="lg" className="home navbar navbar-expand-lg fixed-top py-3">
            <Container className="container px-4 px-lg-5">
                <BrandLogo />
            </Container>
        </Navbar>
        <Container className="container px-4 px-lg-5">
            <Row className="justify-content-center">
                <Col lg="8">
                    <h2 className="text-center mt-0">Get the care you deserve, SignUp As A Patient</h2>
                </Col>
            </Row>
            <Row className="justify-content-center">
                <Col lg="8">
                    <Form className="form">
                        <Row className="justify-content-center">
                            <Col lg="6">
                                <Form.Group className="mb-3" controlId="formBasicFirstName">
                                    <Form.Label>First Name</Form.Label>
                                    <Form.Control name="firstName" type="text" placeholder="Enter First Name*" required />
                                </Form.Group>
                            </Col>
                            <Col lg="6">
                                <Form.Group className="mb-3" controlId="formBasicLastName">
                                    <Form.Label>Last Name</Form.Label>
                                    <Form.Control name="lastName" type="text" placeholder="Enter Last Name*" required />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row className="justify-content-center">
                            <Col lg="6">
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control name="email" type="email" placeholder="Enter Your Email*" required />
                                </Form.Group>
                            </Col>
                            <Col lg="6">
                                <Form.Group className="mb-3" controlId="formBasicPhone">
                                    <Form.Label>Phone Number</Form.Label>
                                    <Form.Control name="phone" type="text" placeholder="Enter Phone Number*" required />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row className="justify-content-center">
                            <Col lg="6">
                                <Form.Group className="mb-3" controlId="formBasicLocation">
                                    <Form.Label>Location</Form.Label>
                                    <Form.Control name="location" type="text" placeholder="Enter Your Location*" required />
                                </Form.Group>
                            </Col>
                            <Col lg="6">
                                <Form.Group className="mb-3" controlId="formBasicDateOfBirth">
                                    <Form.Label>Date Of Birth</Form.Label>
                                    <Form.Control name="dateOfBirth" type="date" placeholder="Enter Your Date Of Birth*" required />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row className="justify-content-center">
                            <Col lg="6">
                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control name="password" type="password" placeholder="Enter Password*" required />
                                </Form.Group>
                            </Col>
                            <Col lg="6">
                                <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
                                    <Form.Label>Confirm Password</Form.Label>
                                    <Form.Control name="confirmPassword" type="password" placeholder="Confirm Password*" required />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row className="justify-content-center">
                            <Col lg="6">
                                <Button variant="primary" type="submit"> Submit </Button>
                            </Col>
                        </Row>
                    </Form>
                </Col>
            </Row>
            <Row>
                <Col lg="12">
                    <p className="text-center mt-0">Already have an account? 
                    <Button variant='link' href="/patient-login">Login</Button></p>
                </Col>
            </Row>
            <Row>
                <Col lg="12">
                    <p className="text-center mt-0">
                    <Button variant='link' href="/patient-login">SignUp As A Healthcare Provider</Button></p>
                </Col>
            </Row>
            <Row>
                <Col lg="12">
                    <p className="text-center mt-0">
                    <hr />
                    By Signing up you agree to our terms  & conditions and Our Privacy policy
                    </p>
                </Col>

            </Row>
        </Container>
    

    </div>
  )
}

export default PatientSignUp
