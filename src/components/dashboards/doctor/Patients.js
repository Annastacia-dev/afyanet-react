import React,  { useContext } from "react";
import DoctorSideBar from './DoctorSideBar';

import "../../../css/DoctorDashboard.css"
import {Row,Col,Card, Button, Container} from 'react-bootstrap';
import "../../../css/DoctorPatients.css";
import {  DoctorContext } from '../../../context/doctor';
import { useNavigate } from 'react-router-dom'
import Loading from "../../display/Loading";



function Patients(){

  const navigate = useNavigate()

  const { doctor, error, loading } = useContext(DoctorContext)

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  // doctor has patients through appointments
  const patients = doctor && doctor.appointments && doctor.appointments.length > 0 && doctor.appointments.map((appointment) => appointment.patient)

  // get unique patients
  const uniquePatients = patients && patients.filter((patient, index) => {
    return patients.findIndex((p) => p.id === patient.id) === index
  })

  console.log('uniquePatients', uniquePatients)




  
 
    return(
     <>
     <div className="patient-homepage doctor-dashboard doctor-patients d-flex" id="wrapper">
       <DoctorSideBar />
          <Container className="sidecontentcontainer px-5 patients mt-5" fluid>
            <Row className="sidecontent">
              <h3>Patients History</h3>
               {uniquePatients.length > 0 ? uniquePatients.map((patient) =>{

                 const currentYear = new Date().getFullYear();
                const birthYear = new Date(patient.date_of_birth).getFullYear();
                const age = currentYear - birthYear;

                return(
                  <Col  className="patient mt-3" md={4}>
                    <Card className="patient-card">
                  <Col md={3}>
                  <Card.Img className='avatar-patient' src={patient.profile_picture ? patient.profile_picture : "https://www.w3schools.com/howto/img_avatar.png"} />
                  </Col>
                  <Card.Body>
                    <Card.Title className="patient-name"> {patient.first_name} {patient.last_name}</Card.Title>
                    <Card.Text className="mb-2 text">
                    <i class="fa-solid fa-location-dot"/>
                    {patient.location}</Card.Text>
                    <Card.Text className="mb-2 text age">
                    <i class="fa-solid fa-calendar"/>
                    {age} years old
                    </Card.Text>
                  </Card.Body>
                  <Button className="btn btn-primary"  onClick={() => navigate(`/doctor/patientdetails/${patient.id}`)} variant="primary">View Details</Button>
                </Card>

                  </Col>

                ) 
               }
              ) : <h1
              style={{ textAlign: "center", width: "100%", marginTop:"100px" }}
              >No patients yet</h1>
              
              }
            </Row>

          </Container>
          </div>
          </>
    )
}

export default Patients;
