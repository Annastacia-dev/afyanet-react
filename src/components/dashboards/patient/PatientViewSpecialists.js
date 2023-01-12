import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { PatientContext } from '../../../context/patient'
import { useContext } from 'react'
import {Container, Row, Col, Card, Button} from 'react-bootstrap'


const PatientViewSpecialists = () => {

  const navigate = useNavigate()

  const { id } = useParams()

  const { patient, specialists } = useContext(PatientContext)

  const specialist = specialists.find(specialist => specialist.id === parseInt(id))





  return (
    <Container className="mt-5" fluid>
      <Row>
        <Col md={6}>
          <h1>{specialist.name}s</h1>
        </Col>
        </Row>
      <Row>
        {
          specialist.doctors.length > 0 ? specialist.doctors.map(doctor => {
            return (
              <Col key={doctor.id} md={4} className="mb-4">
                <Card className="card">
                  <Card.Body>
                    <Card.Title className="card-title">{doctor.first_name}</Card.Title>
                    <Button 
                    onClick={() => navigate(`/patient/bookappointment/${doctor.id}`)}
                    variant="primary">Book Appointment</Button>
                  </Card.Body>
                </Card>
              </Col>
            )
          }
          ) : <h1>No doctors found</h1>
        }
      </Row>
      


    </Container>
  )
}

export default PatientViewSpecialists