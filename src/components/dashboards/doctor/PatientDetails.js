import React, { useState, useEffect} from "react";
import "../../../css/DoctorDashboard.css"
import {Row,Col,Card, Table ,Container} from 'react-bootstrap';
import "../../../css/DoctorPatients.css";
import { useParams } from 'react-router-dom'
// import "../../../css/DoctorPatients.css";

function PatientDetails(){

    const { id } = useParams()

    const [patients, setPatients] = useState([])

    useEffect(() => {
        fetch(`https://afyanet-127t.onrender.com/patients`)
        .then(res => res.json())
        .then(data => setPatients(data))
    },[])

   const patient = patients && patients.find(patient => patient && patient.id === parseInt(id))
 console.log(patient)


    return(
        <>
      <Card className="patientdetails-card">
       <Container>
        <Row>
      <Col  className="patient mt-3" md={4} key={patient && patient.id}>
                    <Card className="patient-card">
                  <Col md={3}>
                  <Card.Img className='avatar-patient' src={patient && patient.profile_picture ? patient && patient.profile_picture : "https://www.w3schools.com/howto/img_avatar.png"} />
                  </Col>
                  <Card.Body>
                    <Card.Title className=" patient-name"> {patient && patient.first_name} {patient && patient.last_name}</Card.Title>
                    <Card.Subtitle className="mb-2 patient-location ">
                    {patient && patient.location}</Card.Subtitle>

                    <Card.Subtitle className="patient-age">
                    {patient && patient.age} Yrs Old
                    </Card.Subtitle>
                  </Card.Body>
                </Card>

                  </Col>
                 
                  </Row>

                  </Container>

                  <Col>
                  <Card className="appointment-card">
                    <Card.Body>
                        
                    <Card.Title className="appointment-name">Appointment History</Card.Title>
                    <Row className=" mt-5 sidecontent">
                    <Col md={12}>
                        <Table striped bordered hover className="appointment-history">
                        <thead>
                      <tr className="appointment-subtitles">
                       <th>Date</th>
                        <th className="diagnosis">Diagnosis</th>
                       </tr>
                    </thead>
                      { patient && patient.appointments && patient.appointments.length > 0 && patient.appointments.map((appointment) => {

                        return(
                            <tbody className="appointment-body"key={appointment.id}>
                            <tr>
                              <td>{appointment.date}</td>
                              <td>{appointment.diagnosis}</td>
                                 </tr>
                          </tbody>
                        )
                      })}
                        </Table>
                    </Col>

                    </Row>
                    </Card.Body>
                  </Card>
                  
                  </Col>

                  </Card>          
      <Container>
                  {/* <Row>
               {patient && patient.appointments && patient.appointments.length > 0 && patient.appointments.map((appointment) =>
               {
                return(
                  <Col  className="patient mt-3" md={4}>
                    <Card className="appointment-card">
                 
                <Card.Body>
                    <Card.Title className="patient-name"> {appointment.date} </Card.Title>
               </Card.Body>
                </Card>

                  </Col>

                )
               }
              )}
            </Row> */}
            </Container>



       

        </>
    )
};

export default PatientDetails;