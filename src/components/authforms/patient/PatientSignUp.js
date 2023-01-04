import React from 'react'
import { Container,Row, Col, Form, Button } from 'react-bootstrap';
import BrandLogo from '../../logo/BrandLogo';
import '../../../css/PatientSignUp.css'

const PatientSignUp = () => {

  return (
    <div className="patient-signup">
         <BrandLogo />
        <Container className="container px-4 px-lg-5">
            <Row className="justify-content-center">
                <Col lg="8">
                    <h2 className="text-center">Get the care you deserve</h2>
                </Col>
            </Row>
            <Row className="justify-content-center">
                <Col lg="8">
                    <Form className="form">
                        <Row className="justify-content-center">
                            <Col lg="6">
                                <Form.Group className="mb-3" controlId="formBasicFirstName">
                                    <Form.Control name="firstName" type="text" placeholder='Enter First Name*' required autoFocus autoComplete='on' />
                                </Form.Group>
                            </Col>
                            <Col lg="6">
                                <Form.Group className="mb-3" controlId="formBasicLastName">
                                    <Form.Control name="lastName" type="text" placeholder="Enter Last Name*" required autoComplete='on' />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row className="justify-content-center">
                            <Col lg="6">
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Control name="email" type="email" placeholder="Enter Your Email*" required  autoComplete='on' />
                                    
                                </Form.Group>
                            </Col>
                            <Col lg="6">
                                <Form.Group className="mb-3" controlId="formBasicPhone">
                                    <Form.Control name="phone" type="text" placeholder="Enter Phone Number*" required autoComplete='on' />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row className="justify-content-center">
                            <Col lg="6">
                                <Form.Group className="mb-3" controlId="formBasicLocation">
                                    <Form.Control name="location" type="text" placeholder="Enter Your Location*" required autoComplete='on' />
                                </Form.Group>
                            </Col>
                            <Col lg="6">
                                <Form.Group className="mb-3" controlId="formBasicDateOfBirth">
                                    <Form.Control name="dateOfBirth" type="date" placeholder="Enter Your Date Of Birth*" required autoComplete='on' />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row className="justify-content-center">
                            <Col lg="6">
                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Control name="password" type="password" placeholder="Enter Password*" required autoComplete='on' />
                                </Form.Group>
                            </Col>
                            <Col lg="6">
                                <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
                                    <Form.Control name="confirmPassword" type="password" placeholder="Confirm Password*" required autoComplete='on' />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row className="justify-content-center">
                            <Col lg="6">
                                <button className="btn btn-primary" type="submit"> Sign Up </button>
                            </Col>
                        </Row>
                    </Form>
                </Col>
            </Row>
            <Row>
                <Col lg="12">
                    <p className="text-center mt-0">Already have an account? 
                    <Button type='submit' variant='link' href="/patient-login">Login</Button></p>
                </Col>
            </Row>
            <Row>
                <Col lg="12">
                    <p className="text-center mt-0">
                    <Button variant='link' href="/doctor-signup">SignUp As A Healthcare Provider</Button></p>
                </Col>
            </Row>
            <Row>
                <Col lg="12">
                    <hr />
                    <p className="text-center mt-0">
                    By Signing up you agree to our terms  & conditions and Our Privacy policy
                    </p>
                </Col>

            </Row>
        </Container>
    

    </div>
  )
}

export default PatientSignUp
