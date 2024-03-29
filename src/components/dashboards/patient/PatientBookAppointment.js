import React, { useContext, useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { PatientContext } from '../../../context/patient'
import { Container, Row, Form, Col,Button } from 'react-bootstrap'
import '../../../css/PatientBookAppointment.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const PatientBookAppointment = () => {

    const navigate = useNavigate()

    const { id } = useParams()

    const modes =['Online', 'In-Person']

    const [doctors, setDoctors] = useState([])

    useEffect(() => {
        fetch(`https://afyanet-127t.onrender.com/doctors`)
        .then(res => res.json())
        .then(data => setDoctors(data))
    },[])


    const doctor = doctors && doctors.find(doctor => doctor.id === parseInt(id))
   

    const { patient } = useContext(PatientContext)

   

    const [formData, setFormData] = useState({
        date: '',
        description: '',
        time:"",
        mode: ''
    })

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const [errors, setErrors] = useState([])

    const doctorAvailableTime = new Date(doctor && doctor.specific_days_times_available).toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: 'numeric',
        hour12: true,
    })

    // formData.time cannot be earlier than doctorAvailableTime
    const validateTime = (e) => {
        const time = e.target.value
        const timeArray = time.split(':')
        const hour = parseInt(timeArray[0])
        const minute = parseInt(timeArray[1])
        const doctorTimeArray = doctorAvailableTime.split(':')
        const doctorHour = parseInt(doctorTimeArray[0])
        const doctorMinute = parseInt(doctorTimeArray[1])
        if (hour < doctorHour || (hour === doctorHour && minute < doctorMinute)) {
            toast.error('Please select a time that is later than the doctor\'s available time',{
                position: 'top-center',
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: 'colored'
            })
            setFormData({
                ...formData,
                time: ''
            })
        }
    }

    // date cannot be earlier than today
    const validateDate = (e) => {
        const date = e.target.value
        const dateArray = date.split('-')
        const year = parseInt(dateArray[0])
        const month = parseInt(dateArray[1])
        const day = parseInt(dateArray[2])
        const today = new Date()
        const todayYear = today.getFullYear()
        const todayMonth = today.getMonth() + 1
        const todayDay = today.getDate()
        if (year < todayYear || (year === todayYear && month < todayMonth) || (year === todayYear && month === todayMonth && day < todayDay)) {
            toast.error('Please select a date that is later than today',{
                position: 'top-center',
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: 'colored'
            })
            setFormData({
                ...formData,
                date: ''
            })
        }
    }





    
    const handleSubmit = (e) => {
        const appointment = {
            date: formData.date,
            time: formData.time,
            description: formData.description,
            mode: formData.mode,
            doctor_id: doctor && doctor.id,
            patient_id: patient && patient.id
        }
        e.preventDefault()
        fetch(`https://afyanet-127t.onrender.com/appointments`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(appointment)
        })
        .then(res => {
            if (res.ok){
                res.json().then(data => {
                    console.log(data)
                    setTimeout(() => {
                        notify()
                    }, 500)
                })
                setTimeout(() => {
                    navigate('/patient/appointments')
                    window.location.reload()
                }, 3000)
            } else {
                res.json().then(data => {
                    setErrors(data.errors)
                })
            }
        })

    }

    const notify = () => toast.success('Appointment booked successfully!',{
        position: 'top-center',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'colored',
        style: { backgroundColor: '#9263CB'}
    });

   


   
  return (
    <div>
    <Container className="book-appointment mt-5" fluid>
        <ToastContainer
            limit={2}
            position="top-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme='colored'
         />
        <Row className='justify-content-center'>
            <Col md={12}>
                < div className='doc-details'>
                <img src={doctor ? doctor.profile_picture ? doctor.profile_picture : "https://www.w3schools.com/howto/img_avatar.png" : null} alt="avatar" className="avatar-bookappointment" />
                <div className='doc-info'>
                <h3>You are booking an appointment with Dr. {doctor && doctor.first_name} {doctor &&doctor.last_name}</h3>
                <p className="location"><i className="fa-solid fa-location-dot"></i>{doctor && doctor.location }</p>
                <p className="days"><i className="fa-solid fa-calendar-days"></i>{doctor ? doctor.days_available_weekly : null}</p>
                <p className="time-range">
                    <i className="far fa-clock"></i>
                    {doctorAvailableTime}
                </p>
                </div>
                </div>
            </Col>
        </Row>
        <Col md={6} className="justify-content-center">
                {
                  errors && errors.map((error, index) => (
                    <Col md={5} sm={12} gap={6}  className=" justify-content-center alert alert-danger" role="alert" key={index}>
                        <p style={{fontSize: "12px"}}>{error}</p>
                     </Col>
                ))
                }
                           
        </Col>
        <Row className="justify-content-center">
            <Col lg="8">
                <Form onSubmit={handleSubmit}>
                    <Row className="mt-5 justify-content-center">
                        <Col md={6}>
                            <Form.Group controlId="formBasicDate">
                                <Form.Label>Date</Form.Label>
                                <Form.Control type="date" placeholder="Enter date" name="date" value={formData.date} onChange={(e) => {
                                    handleChange(e)
                                    validateDate(e)
                                }} />
                            </Form.Group>    
                        </Col>
                        <Col md={3}>
                            <Form.Group controlId="formBasicTime">
                                <Form.Label>Time</Form.Label>
                                <Form.Control  type="time" placeholder="Enter time" name="time" value={formData.time} onChange={(e) => {
                                    handleChange(e)
                                    validateTime(e)
                                }} />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row className="mt-5 justify-content-center">
                        <Col md={6}>
                            <Form.Group controlId="formBasicDescription">
                                <Form.Label>Description</Form.Label>
                                <Form.Control as="textarea" rows={3} placeholder="Enter description" name="description" value={formData.description} onChange={handleChange} />
                            </Form.Group>
                        </Col>
                        <Col md={3}>
                            <Form.Group controlId="formBasicMode">
                                <Form.Label>Mode</Form.Label>
                                <Form.Control as="select" name="mode" value={formData.mode} onChange={handleChange}>
                                    <option value="">Select mode</option>
                                    <option value={modes[0]}>{modes[0]}</option>
                                    <option value={modes[1]}>{modes[1]}</option>
                                </Form.Control>
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Col>
                    </Row>
                </Form>
            </Col>
        </Row>
    </Container>
    </div>
  )
}

export default PatientBookAppointment