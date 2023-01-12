import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { PatientContext } from '../../../context/patient'
import { Container, Row, Form, Col, Card, Button } from 'react-bootstrap'

const PatientBookAppointment = () => {

    const { id } = useParams()

    const modes =['Online', 'In-Person']

    const [doctors, setDoctors] = useState([])

    useEffect(() => {
        fetch(`http://localhost:3000/doctors`)
        .then(res => res.json())
        .then(data => setDoctors(data))
    },[])


    const doctor = doctors.find(doctor => doctor.id === parseInt(id))

    const { patient } = useContext(PatientContext)


        

    

   
   

  return (
    <div>
    <Container className="mt-5" fluid>
        <Row>
            <Col md={6}>
                <h2>You are booking an appointment with Dr. {doctor && doctor.first_name} {doctor &&doctor.last_name}</h2>
            </Col>
        </Row>
        <Row className="justify-content-center">
            <Col lg="8">
                <Form>
                    <Row className="mt-5 justify-content-center">
                        <Col md={6}>
                            <Form.Group controlId="formBasicDate">
                                <Form.Label>Date</Form.Label>
                                <Form.Control type="date" placeholder="Enter date" />
                            </Form.Group>    
                        </Col>
                        <Col md={3}>
                            <Form.Group controlId="formBasicStartTime">
                                <Form.Label>Start Time</Form.Label>
                                <Form.Control type="time" placeholder="Enter start time" />
                            </Form.Group>
                        </Col>
                        <Col md={3}>
                            <Form.Group controlId="formBasicEndTime">
                                <Form.Label>End Time</Form.Label>
                                <Form.Control type="time" placeholder="Enter end time" />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row className="justify-content-center">
                        <Col md={6}>
                            <Form.Group controlId="formBasicDescription">
                                <Form.Label>Description</Form.Label>
                                <Form.Control as="textarea" rows={3} />
                            </Form.Group>
                        </Col>
                        <Col md={6}>
                            <Form.Group controlId="formBasicMode">
                                <Form.Label>Mode</Form.Label>
                                <Form.Control as="select">
                                    {modes.map(mode => {
                                        return (
                                            <option key={mode}>{mode}</option>
                                        )
                                    })}
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