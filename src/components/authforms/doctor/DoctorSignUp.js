import React,{ useState, useContext } from "react";
import { Container,Row, Col, Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import BrandLogo from '../../logo/BrandLogo';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../../../css/DoctorSignUp.css'
import { DoctorContext } from "../../../context/doctor";

const DoctorSignUp = () => {
    const navigate = useNavigate();

    const { setDoctor } = useContext(DoctorContext);

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        phoneNumber: '',
        email: '',
        password: '',
        passwordConfirmation: ''
    })

    const [errors, setErrors] = useState([])

    const handleChange = (e) => {
        e.preventDefault();
        setFormData({...formData,
            [e.target.name]: e.target.value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const doctor = {
            first_name: formData.firstName,
            last_name: formData.lastName,
            phone_number: formData.phoneNumber,
            password: formData.password,
            password_confirmation: formData.passwordConfirmation
        };
        fetch("http://localhost:3000/doctor_signup",{
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(doctor)
        })
        .then (r => {
            if (r.ok) {
                r.json().then(data => {
                    setDoctor(data)
                    setTimeout(() => {
                        notify()
                    },1000);
                    setTimeout(() => {
                        navigate("/doctor/authenticate")
                    },2000);
                })
            } else {
                r.json().then(data => {
                    console.log('data',data)
                    setErrors(data.errors)
                })
            }
        })
    }

    const notify = () => toast.success("You are successfully signed up!",{
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
        <div className="doctor-signup">
        <BrandLogo />
        < ToastContainer
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
                    <h2 className="text-center">Provide convenient, accessible care.</h2>
                </Col>
                <Col lg="8">
                    <h2 className="text-center">Sign Up As A Doctor</h2>
                </Col>
            </Row>
            <Row className="justify-content-center">
                <Col lg="8">
                    <Form className="form" onSubmit={handleSubmit}>
                        <Row className="justify-content-center">
                            <Col lg="6">
                                <Form.Group className="mb-3" controlId="formBasicFirstName">
                                    <Form.Control name="firstName" type="text" placeholder='Enter First Name*' required autoFocus autoComplete='on'
                                    onChange={handleChange}
                                    value={formData.firstName}
                                     />
                                </Form.Group>
                            </Col>
                            <Col lg="6">
                                <Form.Group className="mb-3" controlId="formBasicLastName">
                                    <Form.Control name="lastName" type="text" placeholder="Enter Last Name*" required autoComplete='on'
                                    onChange={handleChange}
                                    value={formData.lastName}
                                     />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row className="justify-content-center">
                            <Col lg="6">
                                <Form.Group className="mb-3" controlId="formBasicPhoneNumber">
                                    <Form.Control name="phoneNumber" type="text" placeholder="Enter Phone Number*" required autoComplete='on' value={formData.phoneNumber} onChange={handleChange} />
                                </Form.Group>
                            </Col>
                            <Col lg="6">
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Control name="email" type="email" placeholder="Enter Your Email*" required  autoComplete='on' value={formData.email} onChange={handleChange} />
                                    
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row className="justify-content-center">
                            <Col lg="6">
                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Control name="password" type="password" placeholder="Enter Password*" required autoComplete='on'  value={formData.password} onChange={handleChange} />
                                </Form.Group>
                            </Col>
                            <Col lg="6">
                                <Form.Group className="mb-3" controlId="formBasicPasswordConfirmation">
                                    <Form.Control name="passwordConfirmation" type="password" placeholder="Confirm Password*" required autoComplete='on'  value={formData.confirmPassword} onChange={handleChange} />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row className="justify-content-center">
                                {
                                    errors.map((error, index) => (
                                    <Col md={5} sm={12} gap={6}  className="alert alert-danger" role="alert" key={index}>
                                        <p style={{fontSize: "12px"}}>{error}</p>
                                        </Col>
                                    ))
                                }
                           
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
                    <Button type='submit' variant='link' href="/doctor/login">Login</Button></p>
                </Col>
            </Row>
            <Row>
                <Col lg="12">
                    <p className="text-center mt-0">
                    <Button variant='link' href="/patient/signup">SignUp As A Patient</Button></p>
                </Col>
            </Row>
            <Row>
                <Col lg="12">
                    <hr />
                    <p className="text-center mt-0">
                    By Signing up you agree to our terms  &amp; conditions and Our Privacy policy
                    </p>
                </Col>

            </Row>
        </Container>
        </div>
    )
}
export default DoctorSignUp;