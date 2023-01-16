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
                    <Card className="a-patient-card">
                  <Col md={3}>
                  <Card.Img className='avatar-patient' src={patient && patient.profile_picture ? patient && patient.profile_picture : "https://www.w3schools.com/howto/img_avatar.png"} />
                  </Col>
                  <Card.Body>
                    <Card.Title className=" a-patient-name"> {patient && patient.first_name} {patient && patient.last_name}</Card.Title>
                    <Card.Subtitle className="mb-2 a-patient-location ">
                    {patient && patient.location}</Card.Subtitle>

                    <Card.Subtitle className="a-patient-age">
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

                  <Row className="medi-records">
                      <Col>
                      <Card className="health-data">
                       <Card.Body>
                        <Card.Title className="health-title">
                          Health Data
                        </Card.Title>
                        <Row className=" mt-5 sidecontent">
                          <Col md={10}>
                         <Table striped bordered hover className="healthdata-table">
                         <thead>
                      <tr className="appointment-subtitles">
                       <th>Blood Pressure</th>
                        <th >Weight</th>
                        <th >Temperature</th>

                       </tr>
                    </thead>
                    {patient && patient.medical_record && patient.medical_record.length > 0 && patient.medical_record.map((medical_record) =>{
                      
                       return(
                        <tbody key={medical_record.id}>
                        <tr>
                          <td>{medical_record.blood_pressure}</td>
                          <td>{medical_record.weight}</td>
                          <td>{medical_record.temperature}</td>

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

                      {/* medication */}
                      <Col className="medication">
                         <Card className="medication-card">
                          <Card.Body>
                            <Card.Title className="medication-title">
                              Medications
                            </Card.Title>
                           
                            <ul class="list-group list-group-flush">
                              { patient && patient.medical_record && patient.medical_record.length > 0 && patient.medical_record.map((medical_record, index)=>{
                                return (
                        <li key={index} class="list-group-item"
>                          {medical_record.medications}
                        </li>
                                )
                              })}

                            </ul>
                            </Card.Body>
                          </Card>
                      </Col>

                      {/* allergies */}
                      <Col className="allergies">
                         <Card className="allergies-card">
                          <Card.Body>
                            <Card.Title className="allergies-title">
                              Allergies
                            </Card.Title>
                           
                            <ul className="list-group list-group-flush allergies-ul">
                              { patient && patient.medical_record && patient.medical_record.length > 0 && patient.medical_record.map((medical_record, index)=>{
                                return (
                        <li key={index} class="list-group-item"
>                          {medical_record.allergies}
                        </li>
                                )
                              })}

                            </ul>
                            </Card.Body>
                          </Card>
                      </Col>

                    </Row>      
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