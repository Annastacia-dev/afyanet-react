import React,{ useState, useContext} from "react";
import { Container,Row, Col, Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import BrandLogo from '../../logo/BrandLogo';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../../../css/DoctorAuthenticate.css'
import { DoctorContext } from "../../../context/doctor";

const DoctorAuthenticate = () => {
    const navigate = useNavigate();

    const { doctor, setDoctor } = useContext(DoctorContext);
   

const [formData, setFormData] = useState({
    licenseNumber: 0,
    specialityId: "",
    location: "",
    daysAvailable: "",
    contractLength: 0,
    timeAvailable: ""
})
const [errors, setErrors] = useState([])

const handleChange = (e) => {
    e.preventDefault();
    setFormData({...formData,
        [e.target.name]: e.target.value });
}
    const handleSubmit = (e) => {
        e.preventDefault();
        const doctorData = {
            license_number: formData.licenseNumber,
            speciality_id: formData.specialityId,
            location: formData.location,
            days_available_weekly: formData.daysAvailable,
            contract_length: formData.contractLength,
            specific_days_times_available: formData.timeAvailable,
            password: doctor.password_digest,
            password_confirmation: doctor.password_digest
        };
        fetch("http://localhost:3000/doctor_profile", {
            method: 'PATCH',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(doctorData)
        })
        .then (r => {
            if (r.ok) {
                r.json().then(data => {
                    setDoctor(data)
                    setTimeout(() => {
                        notify()
                    },1000);
                setTimeout(() => {
                    navigate("/doctor/dashboard")
                },2000);
                })
            } else {
                r.json().then(data => {
                    setErrors(data.errors)
                })
            }
        })  
}
const notify = () => toast.success("You are successfully authenticated!",{
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
    <div className="doctor-authenticate">
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
                    <h2 className="text-center">Provide Authentication Details.</h2>
                </Col>
            </Row>
            <Row className="justify-content-center">
                <Col lg="8">
                    <Form className="form" onSubmit={handleSubmit}>
                        <Row className="justify-content-center">
                            <Col lg="6">
                                <Form.Group className="mb-3" controlId="formBasicLicenseNumber">
                                    <Form.Control name="licenseNumber" type="text" placeholder='Enter Your License No.*' required autoFocus autoComplete='on'
                                    onChange={handleChange}
                                    value={formData.firstName}
                                     />
                                </Form.Group>
                            </Col>
                            <Col lg="6">
                                <Form.Group className="mb-3" controlId="formBasicLastName">
                                    <Form.Control name="lastName" type="text" placeholder="Enter Your Speciality*" required autoComplete='on'
                                    onChange={handleChange}
                                    value={formData.lastName}
                                     />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row className="justify-content-center">
                            <Col lg="6">
                                <Form.Group className="mb-3" controlId="formBasicPhoneNumber">
                                    <Form.Control name="location" type="text" placeholder="Enter Your Location*" required autoComplete='on' value={formData.location} onChange={handleChange} />
                                </Form.Group>
                            </Col>
                            <Col lg="6">
                                <Form.Group className="mb-3" controlId="formBasicDaysAvailable">
                                    <Form.Control name="daysAvailable" type="text" placeholder="Days Available*" required  autoComplete='on' value={formData.daysAvailable} onChange={handleChange} />
                                    
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row className="justify-content-center">
                            <Col lg="6">
                                <Form.Group className="mb-3" controlId="formBasicContractLength">
                                    <Form.Control name="contractLength" type="text" placeholder="ContractLength*" required autoComplete='on'  value={formData.contractLength} onChange={handleChange} />
                                </Form.Group>
                            </Col>
                            <Col lg="6">
                                <Form.Group className="mb-3" controlId="formBasicTimeAvailable">
                                    <Form.Control name="timeAvailable" type="text" placeholder="Time Available*" required autoComplete='on'  value={formData.timeAvailable} onChange={handleChange} />
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
                                <button className="btn btn-primary" type="submit"> Authenticate </button>
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
export default DoctorAuthenticate;