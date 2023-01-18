import React, { useState, useEffect, useContext} from "react";
import "../../../css/DoctorDashboard.css"
import {Row,Col,Card, Table ,ListGroup} from 'react-bootstrap';
import { PatientContext } from '../../../context/patient';
import { useParams } from 'react-router-dom'
import "../../../css/PatientDetails.css";
import DoctorSideBar from './DoctorSideBar';
import "../../../css/DoctorDashboard.css"


function PatientDetails(){

    const { id } = useParams()

    const { specialists } = useContext(PatientContext)

    const [patients, setPatients] = useState([])

    useEffect(() => {
        fetch(`https://afyanet-127t.onrender.com/patients`)
        .then(res => res.json())
        .then(data => setPatients(data))
    },[])

   const patient = patients && patients.find(patient => patient && patient.id === parseInt(id))
 console.log(patient)

//  sort appointments by date, most recent first

    const sortedAppointments = patient && patient.appointments.sort((a, b) => {
        const dateA = new Date(a.date)
        const dateB = new Date(b.date)
        return dateB - dateA
    })

    // show only appointments whose date is in the past
    const pastAppointments = sortedAppointments && sortedAppointments.filter(appointment => {
        const date = new Date(appointment.date)
        return date < new Date()
    })

  

 
  
  

    return(
        <>
  <div className="patient-homepage doctor-dashboard d-flex" id="wrapper">
      <DoctorSideBar />
       <div id="page-content-wrapper patient-details">
        <div className="container-fluid px-5 py-5 sidecontentcontainer">
          {/* two columns, one with a card with patient details and table with patient appointment histor, second column with patient medical record and health data */}
          <Row className=" sidecontent patient-details-row">
            <Col md={4} className="patient-details-col">
              <Card className="patient-details-card">
                <Card.Header className="patient-details-card-header">
                  <h5>Patient Details</h5>
                </Card.Header>
                <Card.Body className="patient-details-card-body">
                  <Card.Img variant="top" className="patient-details-card-img" src={
                    patient && patient.profile_picture ? patient.profile_picture : "https://www.w3schools.com/howto/img_avatar.png"
                  } />
                  <Card.Title className="patient-details-card-title">
                    <h5>{patient && patient.first_name} {patient && patient.last_name}</h5>
                  </Card.Title>
                  <Card.Text className="patient-details-card-text">
                    <ListGroup variant="flush">
                      <ListGroup.Item className="patient-details-list-item">
                        <span className="patient-details-list-item-span">
                          <i className="fas fa-calendar"></i>
                          {patient && patient.age} yrs old
                        </span>
                      </ListGroup.Item>
                      <ListGroup.Item className="patient-details-list-item">
                        <span className="patient-details-list-item-span">
                          <i className="fas fa-location"></i>
                          {patient && patient.location}
                        </span>
                      </ListGroup.Item>
                      </ListGroup>
                  </Card.Text>
                  </Card.Body>
                  </Card>
                  </Col>

                  {/* Allergies */}

                  <Col md={4} className="patient-details-col">
              <Card className="patient-details-card">
                <Card.Header className="patient-details-card-header">
                  <h5>Allergies</h5>
                </Card.Header>
                <Card.Body className="patient-details-card-body">
                  <Card.Text className="patient-details-card-text">
                    <ListGroup variant="flush">
                      {
                        // convert string to list
                        patient && patient.medical_record.allergies && patient.medical_record.allergies.split(",").map((allergy, index) => (
                          <ListGroup.Item className="patient-details-list-item" key={index}>
                            <span className="patient-details-list-item-span">
                              <i className="fas fa-caret-right"></i>
                              {allergy}
                            </span>
                          </ListGroup.Item>
                        ))
                      }
                      </ListGroup>
                  </Card.Text>
                  </Card.Body>
                  </Card>
                  </Col>

                  {/* Medications */}


                  <Col md={4} className="patient-details-col">
              <Card className="patient-details-card medications">
                <Card.Header className="patient-details-card-header">
                  <h5>Medications</h5>
                </Card.Header>
                <Card.Body className="patient-details-card-body">
                  <Card.Text className="patient-details-card-text">
                    <ListGroup variant="flush">
                      {
                        // convert string to list
                        patient && patient.medical_record.medications && patient.medical_record.medications.split(",").map((allergy, index) => (
                          <ListGroup.Item className="patient-details-list-item" key={index}>
                            <span className="patient-details-list-item-span">
                              <i className="fas fa-caret-right"></i>
                              {allergy}
                            </span>
                          </ListGroup.Item>
                        ))
                      }
                      </ListGroup>
                  </Card.Text>
                  </Card.Body>
                  </Card>
                  </Col>
                  </Row>


                  {/* Appointment History table */}
                  <Row className=" sidecontent patient-details-row">
            <Col md={12} className="patient-details-col">
              <Table responsive="sm" className="patient-details-table">
                <thead>
                  <tr>
                    <th>Doctor</th>
                    <th>Specialty</th>
                     <th>Date</th>
                    <th>Diagnosis</th>
                    <th>Treatment</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    pastAppointments && pastAppointments.map((appointment, index) => {

                      // find the doctor's specialty
                      const specialty = specialists && specialists.find(specialty => specialty.id === appointment.doctor.specialty_id)

                      return(
                        
                        <tr key={index}>
                        <td>Dr.{appointment.doctor.first_name} {appointment.doctor.last_name}</td>
                        <td>{specialty.name}</td>
                        <td>{appointment.date}</td>
                        <td>{
                          appointment.diagnosis && appointment.diagnosis.length > 0 ? appointment.diagnosis.substring(0, 30) : "N/A"
                          }</td>
                        <td>{
                          appointment.treatment && appointment.treatment.length > 0 ? appointment.treatment.substring(0, 30) : "N/A"
                          }</td>
                      </tr>
                      )
                    
                  })

                  }
                </tbody>
              </Table>
            </Col>
          </Row>



        
        </div>


      </div> 




      </div>

        </>
    )
};

export default PatientDetails;