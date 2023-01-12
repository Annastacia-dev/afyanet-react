import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { PatientContext } from '../../../context/patient'
import { useContext } from 'react'
import {Container, Row, Col, Card, Button} from 'react-bootstrap'
import '../../../css/PatientViewSpecialists.css'


const PatientViewSpecialists = () => {

  const navigate = useNavigate()

  const { id } = useParams()

  const { patient, specialists } = useContext(PatientContext)

  const specialist = specialists && specialists.find(specialist => specialist && specialist.id === parseInt(id))

  const doctors = specialist && specialist.doctors

  console.log('patient', patient)

  

  return (
    <Container className="specialists mt-5" fluid>
      <Row>
        <Col md={12}>
          <h2 className='text-center'>{specialist && specialist.name}s</h2>
        </Col>
       {
          doctors && doctors.length > 0 ? doctors.map(doctor => {
            return (
              <Col key={doctor.id} className="specialist mt-3" md={4}>
                <Card className="card shadow">
                  <Col md={3}>
                  <Card.Img className='avatar' src={doctor.profile_picture ? doctor.profile_picture : "https://www.w3schools.com/howto/img_avatar.png"} />
                  </Col>
                  <Card.Body>
                    <Card.Title>Dr. {doctor.first_name} {doctor.last_name}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{doctor.location}</Card.Subtitle>
                    <Button onClick={() => navigate(`/patient/bookappointment/${doctor.id}`)} variant="primary">Book Appointment</Button>
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