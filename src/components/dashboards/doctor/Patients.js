import React,  { useContext } from "react";
import DoctorSideBar from './DoctorSideBar';
import DoctorNavBar from './DoctorNavBar';
import "../../../css/DoctorDashboard.css"
import {Row,Col,Card, Button, Container} from 'react-bootstrap';
import "../../../css/DoctorPatients.css";
import {  DoctorContext } from '../../../context/doctor';
import { useParams, useNavigate } from 'react-router-dom'
import AgeCalculator from './AgeCalculator';


function Patients(){

  const navigate = useNavigate()
  const { id } = useParams()


  const { doctor } = useContext(DoctorContext);
  console.log(doctor)


// const appointment = doctor && doctor.appointments.map((appointment)=>{
//   return(
//   appointment
//   )
// })
  
// console.log(appointment)

    return(
     <>
        <div className='patient-navbar'>
        <DoctorNavBar />
       </div>
     <div className="patient-homepage doctor-dashboard d-flex" id="wrapper">
       <DoctorSideBar />
       
          <Container className="patients mt-5" fluid>
            <Row>
               {doctor && doctor.appointments && doctor.appointments.length > 0 && doctor.appointments.map((appointment) =>
               {
                return(
                  <Col  className="patient mt-3" md={4}>
                    <Card className="patient-card">
                  <Col md={3}>
                  <Card.Img className='avatar-patient' src={appointment.patient.profile_picture ? appointment.patient.profile_picture : "https://www.w3schools.com/howto/img_avatar.png"} />
                  </Col>
                  <Card.Body>
                    <Card.Title className="patient-name"> {appointment.patient.first_name} {appointment.patient.last_name}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">
                    <i class="fa-solid fa-location-dot"/>
                    {appointment.patient.location}</Card.Subtitle>

                    <Card.Subtitle className="mb-2 text-muted age">
                      <AgeCalculator/>
                    </Card.Subtitle>
                    <Button className="btn"  onClick={() => navigate(`/doctor/patientdetails/${appointment.patient.id}`)} variant="primary">View Details</Button>
                  </Card.Body>
                </Card>

                  </Col>

                )
               }
              )}
            </Row>

          </Container>
          </div>
          </>
    )
}

export default Patients;
