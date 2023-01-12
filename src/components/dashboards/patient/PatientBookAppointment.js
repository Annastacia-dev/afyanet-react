import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { PatientContext } from '../../../context/patient'
import { Container, Row, Form, Col,Button } from 'react-bootstrap'
import '../../../css/PatientBookAppointment.css'

const PatientBookAppointment = () => {

    const { id } = useParams()

    const modes =['Online', 'In-Person']

    const [doctors, setDoctors] = useState([])

    useEffect(() => {
        fetch(`http://localhost:3000/doctors`)
        .then(res => res.json())
        .then(data => setDoctors(data))
    },[])


    const doctor = doctors && doctors.find(doctor => doctor.id === parseInt(id))

    console.log (doctor)

    const { patient } = useContext(PatientContext)

    console.log(patient)

    // formData

    const [formData, setFormData] = useState({
        date: '',
        startTime: '',
        endTime: '',
        description: '',
        mode: ''
    })

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }


    const appointment2 = {
        date: formData.date,
        time: formData.startTime + ' - ' + formData.endTime,
        description: formData.description,
        mode: formData.mode,
        doctor_id: doctor && doctor.id,
        patient_id: patient && patient.id
    }

    const handleConsoleLog = (e) => {
        e.preventDefault()
        console.log(appointment2)
    }

    const handleSubmit = (e) => {
        const appointment = {
            date: formData.date,
            time: formData.startTime + ' - ' + formData.endTime,
            description: formData.description,
            mode: formData.mode,
            doctor_id: doctor && doctor.id,
            patient_id: patient && patient.id
        }
        e.preventDefault()
        fetch(`http://localhost:3000/appointments`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(appointment)
        })
        .then(res => res.json())
        .then(data => console.log(data))
    }

  return (
    <div>
    <Container className="book-appointment mt-5" fluid>
        <Row className='justify-content-center'>
            <Col md={12}>
                <img src={doctor ? doctor.profile_picture ? doctor.profile_picture : "https://www.w3schools.com/howto/img_avatar.png" : null} alt="avatar" className="avatar-bookappointment" />
                <h3>You are booking an appointment with Dr. {doctor && doctor.first_name} {doctor &&doctor.last_name}</h3>
                <p className="days">Available: {doctor ? doctor.days_available_weekly : null}</p>
                <p className="time-range">
                    <i className="far fa-clock"></i>
                    {doctor ? doctor.specific_days_times_available : null}
                </p>
            </Col>
        </Row>
        <Row className="justify-content-center">
            <Col lg="8">
                <Form onSubmit={handleConsoleLog}>
                    <Row className="mt-5 justify-content-center">
                        <Col md={6}>
                            <Form.Group controlId="formBasicDate">
                                <Form.Label>Date</Form.Label>
                                <Form.Control type="date" placeholder="Enter date" name="date" value={formData.date} onChange={handleChange} />
                            </Form.Group>    
                        </Col>
                        <Col md={3}>
                            <Form.Group controlId="formBasicStartTime">
                                <Form.Label>Start Time</Form.Label>
                                <Form.Control type="time" placeholder="Enter start time" name="startTime" value={formData.startTime} onChange={handleChange} />
                            </Form.Group>
                        </Col>
                        <Col md={3}>
                            <Form.Group controlId="formBasicEndTime">
                                <Form.Label>End Time</Form.Label>
                                <Form.Control type="time" placeholder="Enter end time" name="endTime" value={formData.endTime} onChange={handleChange} />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row className="justify-content-center">
                        <Col md={6}>
                            <Form.Group controlId="formBasicDescription">
                                <Form.Label>Description</Form.Label>
                                <Form.Control as="textarea" rows={3} placeholder="Enter description" name="description" value={formData.description} onChange={handleChange} />
                            </Form.Group>
                        </Col>
                        <Col md={6}>
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