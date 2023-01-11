import React,{ useState, useContext} from "react";
import { Container,Row, Col, Form, Button} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import BrandLogo from '../../logo/BrandLogo';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../../../css/DoctorAuthenticate.css'
import { DoctorContext } from '../../../context/doctor';

const DoctorAuthenticate = () => {

    const navigate = useNavigate();

    const { doctor, setDoctor } = useContext(DoctorContext);

    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

    const [startTime, setStartTime] = useState('')
    const [endTime, setEndTime] = useState('')
    const [timeErrors, setTimeErrors] = useState([])

    const [selectedDays, setSelectedDays] = useState([])

    const handleDaysChange = (e) => {
        e.preventDefault();
        const { name } = e.target;
        if (selectedDays.includes(name)) {
            setSelectedDays(selectedDays.filter(day => day !== name))
        } else {
            setSelectedDays([...selectedDays, name])
        }
    }

    function validatesTime(){

            if(startTime > endTime){
                setTimeErrors(['Start time must be before end time'])
            }else{
                setTimeErrors([])
            }

    }

console.log('doctor',doctor)


   

const [formData, setFormData] = useState({
    licenseNumber: 0,
    specialityId: "",
    location: "",
    contractLength: 1
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
            days_available_weekly: selectedDays.join(', '),
            contract_length: formData.contractLength,
            specific_days_times_available: startTime + " - " + endTime,
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
                    },500);
                setTimeout(() => {
                    navigate("/doctor/dashboard")
                },3000);
                })
            } else {
                r.json().then(data => {
                    setErrors(data.errors)
                })
            }
        })  
}

const handleSpecialtyChange = (e) => {
    e.preventDefault();
    if (e.target.value === 'General Practitioner') {
        setFormData({...formData,
            specialityId: "1"
        })
    } else if (e.target.value === 'Optician') {
        setFormData({...formData,
            specialityId: "2"
        })
    } else if (e.target.value === 'Dentist') {
        setFormData({...formData,
            specialityId: "3"
        })
    } else if (e.target.value === 'Nutritionist') {
        setFormData({...formData,
            specialityId: "4"
        })
    } else if (e.target.value === 'Psychiatrist') {
        setFormData({...formData,
            specialityId: "5"
        })
    } else if (e.target.value === 'Cardiologist') {
        setFormData({...formData,
            specialityId: "6"
        })
    } else if (e.target.value === 'Dermatologist') {
        setFormData({...formData,
            specialityId: "7"
        })
    } else if (e.target.value === 'Gastroenterologist') {
        setFormData({...formData,
            specialityId: "8"
        })
    } else if (e.target.value === 'Therapist') {
        setFormData({...formData,
            specialityId: "9"
        })
    } else if (e.target.value === 'Oncologist') {
        setFormData({...formData,
            specialityId: "10"
        })
    } else if (e.target.value === 'Paediatrician') {
        setFormData({...formData,
            specialityId: "11"
        })
    } else if (e.target.value === 'Gynaecologist') {
        setFormData({...formData,
            specialityId: "12"
        })
    } else if (e.target.value === 'Urologist') {
        setFormData({...formData,
            specialityId: "13"
        })
    } else if (e.target.value === 'Neurologist') {
        setFormData({...formData,
            specialityId: "14"
        })
    } else if (e.target.value === 'Immunologist') {
        setFormData({...formData,
            specialityId: "15"
        }) 
    }else if (e.target.value === 'Opthalmologist') {
        setFormData({...formData,
            specialityId: "16"
        })
    } else if (e.target.value === 'Endocrinologist') {
        setFormData({...formData,
            specialityId: "17"
        })
    } else if (e.target.value === 'Rheumatologist') {
        setFormData({...formData,
            specialityId: "18"
        })
    }
} 



const notify = () => toast.success("You are successfully authenticated!",{
    position: "top-center",
    autoClose: 1000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'colored',
    style: { backgroundColor: '#9263CB'}
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
                                <Form.Group className="mb-3" controlId="formBasicSpecialty">
                                    <Form.Select name="specialityId" aria-label = "Select Your Specialty" onChange={handleSpecialtyChange} required>
                                        <option value="">Select Your Specialty*</option>
                                        <option value="General Practitioner">General Practitioner</option>
                                        <option value="Optician">Optician</option>
                                        <option value="Dentist">Dentist</option>
                                        <option value="Nutritionist">Nutritionist</option>
                                        <option value="Psychiatrist">Psychiatrist</option>
                                        <option value="Cardiologist">Cardiologist</option>
                                        <option value="Dermatologist">Dermatologist</option>
                                        <option value="Gastroenterologist">Gastroenterologist</option>
                                        <option value="Therapist">Therapist</option>
                                        <option value="Oncologist">Oncologist</option>
                                        <option value="Paediatrician">Paediatrician</option>
                                        <option value="Ophthalmologist">Ophthalmologist</option>
                                        <option value="Gynaecologist">Gynaecologist</option>
                                        <option value="Urologist">Urologist</option>
                                        <option value="Neurologist">Neurologist</option>
                                        <option value="Immunologist">Immunologist</option>
                                        <option value="Endocrinologist">Endocrinologist</option>
                                        <option value="Rheumatologist">Rheumatologist</option>
                                    </Form.Select>
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
                                    <Form.Label>Days Available*</Form.Label>
                                    {
                                        days.map((day, index) => (
                                            <Form.Check
                                                key={index}
                                                label={day}
                                                name={day}
                                                type="checkbox"
                                                id={day}
                                                value={day}
                                                onChange={handleDaysChange}
                                                checked={selectedDays.includes(day)}
                                            />
                                        )
                                        )
                                            
                                    }
                                    
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row className="justify-content-center">
                            <Col lg="6">
                                < Form.Label>Contract Length*(months)</Form.Label>
                                <Form.Group className="mb-3" controlId="formBasicContractLength">
                                    <Form.Control name="contractLength" type="number" min='1' max='12' placeholder="ContractLength*" required autoComplete='on'  value={formData.contractLength} onChange={handleChange} />
                                </Form.Group>
                            </Col>
                            <Col lg="3">
                                <Form.Label>Start Time*</Form.Label>
                                <Form.Group className="mb-3" controlId="formBasicStartTime">
                                    <Form.Control name="timeAvailable" type="time" required autoComplete='on' value={startTime} 
                                    onChange={(e) => {
                                        setStartTime(e.target.value)
                                        validatesTime()
                                        }} />
                                </Form.Group>
                            </Col>
                            <Col lg="3">
                                <Form.Label>End Time*</Form.Label>
                                <Form.Group className="mb-3" controlId="formBasicEndTime">
                                    <Form.Control name="timeAvailable" type="time" placeholder="Time Available*" required autoComplete='on' value={endTime}
                                    onChange={(e) => {
                                        setEndTime(e.target.value)
                                        validatesTime()
                                        }} />
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
                                {
                                timeErrors && timeErrors.map((error, index) => (
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