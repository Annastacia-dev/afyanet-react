import React, { useState, useContext } from 'react'
import { Container,Row, Col, Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import BrandLogo from '../../logo/BrandLogo';
import '../../../css/PatientLogIn.css'
import { PatientContext } from '../../../context/patient';

const PatientLogIn = () => {

    const navigate = useNavigate();

    const { setPatient } = useContext(PatientContext);

    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [rememberMe,setRememberMe] = useState(false);
    const [errors,setErrors] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const patient = {
            email,
            password,
            remember_me: rememberMe
        };
        fetch('http://localhost:3000/patient_login', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(patient)
    })
    .then (r => {
        if (r.ok) {
            r.json().then(data => {
                setPatient(data)
                setTimeout(() => {
                    notify()
                }, 1000);
                setTimeout(() => {
                    navigate('/patient/dashboard')
                } , 2000);
            })
        } else {
            r.json().then(data => {
                setErrors(data.errors)
            })
        } 
    } )
}

const notify = () => toast.success("You are logged in successfully!",{
    position: "top-center",
    autoClose: 1000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'colored'
});






  return (
    <div className='patient-login'>
        <BrandLogo />
        <ToastContainer
            position="top-center"
            autoClose={1000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme='colored'
         />
        <Container className="container px-4 px-lg-5">
            <Row className="justify-content-center">
                <Col lg="8">
                    <h2 className="text-center">Hi! Welcome Back!</h2>
                </Col>
            </Row>
            <Row className="justify-content-center">
                <Col lg="8">
                    <Form className="form" onSubmit={handleSubmit}>
                        <Row className="justify-content-center">
                            <Col lg="6">
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Control name="email" type="email" placeholder="Enter Your Email*" required  autoComplete='on'
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                     />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row className="justify-content-center">
                            <Col lg="6">
                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Control name="password" type="password" placeholder="Enter Password*" required autoComplete='on'
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    />
                                </Form.Group>
                            </Col>
                         </Row>
                         <Row className="justify-content-center">
                                {
                                    errors && errors.map((error, index) => (
                                    <Col md={5} sm={12} gap={6}  className="alert alert-danger" role="alert" key={index}>
                                        <p style={{fontSize: "12px"}}>{error}</p>
                                        </Col>
                                    ))
                                }
                        </Row>
                        <Row style={{marginTop: "10px"}} className='justify-content-center'>
                            <Col lg='3'>
                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Remember Me"
                                value={rememberMe}
                                onChange={(e) => setRememberMe(e.currentTarget.checked)}
                                 />    
                            </Form.Group>
                            </Col>
                            <Col lg='3'>
                                <a variant='link' href="/patient/forgot-password">Forgot Password?</a>
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
                    <p className="text-center">Don't have an account? <a variant='link' href="/patient/signup">Sign Up</a></p>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default PatientLogIn