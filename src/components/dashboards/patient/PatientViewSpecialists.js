import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { PatientContext } from '../../../context/patient'
import { useContext } from 'react'
import {Container, Row, Col, Card, Button} from 'react-bootstrap'


const PatientViewSpecialists = () => {

  const navigate = useNavigate()

  const { id } = useParams()

  const { patient, specialists } = useContext(PatientContext)

  const specialist = specialists && specialists.find(specialist => specialist && specialist.id === parseInt(id))

  const doctors = specialist && specialist.doctors


  return (
    <Container className="mt-5" fluid>
      <Row>
        <Col md={6}>
          <h1>{specialist && specialist.name}s</h1>
        </Col>
        </Row>
      <Row>
        {
           doctors ? doctors.length > 0 ? doctors.map(doctor => {
            return (
              <Col key={doctor.id} md={4} className="mt-5">
                <Card>
                  <Card.Body>
                    <Card.Title>{doctor.first_name} {doctor.last_name}</Card.Title>
                    <Card.Text>
                      {doctor.bio}
                    </Card.Text>
                    <Button onClick={() => navigate(`/patient/bookappointment/${doctor.id}`)}>Book Appointment</Button>
                  </Card.Body>
                </Card>
              </Col>
            )
          }) : <h1>No doctors found</h1> : <h1>Loading...</h1>
        }
      </Row>
      


    </Container>
  )
}

export default PatientViewSpecialists