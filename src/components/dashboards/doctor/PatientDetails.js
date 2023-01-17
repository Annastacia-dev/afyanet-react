import React, { useState, useEffect} from "react";
import "../../../css/DoctorDashboard.css"
import {Row,Col,Card, Table ,ListGroup} from 'react-bootstrap';
// import "../../../css/DoctorPatients.css";
import { useParams } from 'react-router-dom'
import "../../../css/PatientDetails.css";
import DoctorSideBar from './DoctorSideBar';
import DoctorNavBar from './DoctorNavBar';
import "../../../css/DoctorDashboard.css"


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
    <div className='patient-navbar'>
        <DoctorNavBar />
       </div>
  <div className="patient-homepage doctor-dashboard d-flex" id="wrapper">
  <DoctorSideBar />

       <div id="page-content-wrapper patient-details">
        <div className="container-fluid px-5 py-5 sidecontentcontainer">
         <Row className="sidecontent justify-content-left row no-gutters">
           <Col md={6} className="mb-4">
            <Card className="patient-detail card">
            <Col md={6}>
                  <Card.Img className='avatar-patient' src={patient && patient.profile_picture ? patient && patient.profile_picture : "https://www.w3schools.com/howto/img_avatar.png"} />
                  </Col>
                <Card.Body>
                
                  <Card.Title className="patient-detail card-title">
                {patient && patient.first_name} {patient && patient.last_name}
                </Card.Title>
                <Card.Subtitle mb={2} className="card-subtitle1">
                {patient && patient.location}
                  </Card.Subtitle>
                  <Card.Subtitle mb={2} className="card-subtitle2">
                {patient && patient.age}
                  </Card.Subtitle>
                  </Card.Body>
            </Card>

           </Col>
         </Row>
         <Row className=" appointment-history-table mt-7 sidecontent">
           <Col md={6}>
            
            {/* <div className="appointment-history"><h3>Appointment History </h3></div> */}
            <h3 className="title-1">Appointment History</h3>
            <Table table table-bordered table-striped>
            <thead>
                      <tr>
                        <th>Date</th>
                        <th>Diagnosis</th>
                        <th>Doctor</th>

                      </tr>
                    </thead>
                    { patient && patient.appointments && patient.appointments.length > 0 && patient.appointments.map((appointment) => {

             return(
            <tbody className="appointment-body"key={appointment.id}>
           <tr>
           <td>{appointment.date}</td>
           <td>{appointment.diagnosis}</td>
           <td>Dr. {appointment.doctor.first_name}
           {appointment.doctor.last_name}</td>

           </tr>
         </tbody>
                )
           })}
            </Table>
           
           </Col>
          
           <Col md={5} className="table-right">
           <h3 className="title">Health Data </h3>
      
          <Table >
            <thead>
              <tr>
              <th>Blood Pressure</th>
              <th >Weight</th>
              <th >Temperature</th>
              </tr>
            </thead>
            <tbody key={patient && patient.medical_record.id}>
                        <tr>
                          <td>{patient && patient.medical_record.blood_pressure} mm Hg</td>
                          <td>{patient && patient.medical_record.weight} kg</td>
                          <td>{patient && patient.medical_record.temperature} degrees celsius</td>

                             </tr>
                      </tbody>
          </Table>
          
        </Col>

        <div className="d-flex justify-content-center align-items-end">
  
  
        <Col md={6} className="mb-4">
            <Card className="patient-medz card">
            
                <Card.Body>
                
                  <Card.Title className="patient-medz card-title">
                </Card.Title><h3>Medications</h3>
                <Card.Text>
                {/* <ul class="list-group list-group-flush"> */}
                             
                             <ListGroup key={patient && patient.medical_record.id} class="list-group-item"
     >                          {patient && patient.medical_record.medications}
                             </ListGroup>
                                     
                                 {/* </ul> */}
                  </Card.Text>
                  </Card.Body>
            </Card>

           </Col>
  

</div>         

<div className="d-flex justify-content-center align-items-end">
  
  
        <Col md={6} className="mb-4">
            <Card className="patient-allergy card">
            
                <Card.Body>
                
                  <Card.Title className="patient-allergy card-title">
                </Card.Title><h3>Allergies</h3>
                <Card.Text>
                {/* <ul class="list-group list-group-flush"> */}
                             
                             <ListGroup key={patient && patient.medical_record.id} class="list-group-item"
     >                          {patient && patient.medical_record.allergies}
                             </ListGroup>
                                     
                                 {/* </ul> */}
                  </Card.Text>
                  </Card.Body>
            </Card>

           </Col>
  

</div>         
</Row>
        </div>


      </div> 




      </div>



















      {/* <Card className="patientdetails-card">
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
                    
                        <tbody key={patient && patient.medical_record.id}>
                        <tr>
                          <td>{patient && patient.medical_record.blood_pressure}</td>
                          <td>{patient && patient.medical_record.weight}</td>
                          <td>{patient && patient.medical_record.temperature}</td>

                             </tr>
                      </tbody>
                   
                  
                         </Table>
                          </Col>
                        </Row>

                       </Card.Body>
                      </Card>
                      </Col>

                      <Col className="medication">
                         <Card className="medication-card">
                          <Card.Body>
                            <Card.Title className="medication-title">
                              Medications
                            </Card.Title>
                           
                            <ul class="list-group list-group-flush">
                             
                        <li key={patient && patient.medical_record.id} class="list-group-item"
>                          {patient && patient.medical_record.medications}
                        </li>
                                
                            </ul>
                            </Card.Body>
                          </Card>
                      </Col>

                      <Col className="allergies">
                         <Card className="allergies-card">
                          <Card.Body>
                            <Card.Title className="allergies-title">
                              Allergies
                            </Card.Title>
                           
                            <ul className="list-group list-group-flush allergies-ul">
                             
                        <li key={patient && patient.medical_record.id} class="list-group-item"
>                          {patient && patient.medical_record.allergies}
                        </li>
                               

                            </ul>
                            </Card.Body>
                          </Card>
                      </Col>

                    </Row>      
                  </Card>    */}

                 
      


       

        </>
    )
};

export default PatientDetails;