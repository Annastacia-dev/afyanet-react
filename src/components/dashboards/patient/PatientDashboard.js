import React,{ useContext } from 'react'
import { Row, Col, Card  } from 'react-bootstrap';
import { PatientContext } from '../../../context/patient';
import PatientSidebar from './PatientSidebar';
import { Link } from 'react-router-dom';
import '../../../css/PatientDashboard.css'
import PatientNavBar from './PatientNavBar';
import '../../../css/PatientDashboard.css'
import Loading from '../../display/Loading';

const PatientDashboard = () => {

  const { patient, error, specialists, loading } = useContext(PatientContext);


  if (loading) {
    return <Loading />
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (

    <>
    <div className="patient-navbar">
      <PatientNavBar />
    </div>

     <div className="patient-homepage d-flex" id="wrapper">
      <PatientSidebar />
        <div id="page-content-wrapper">
          <div className="container-fluid px-5 py-5 sidecontentcontainer">
            <Row className="sidecontent justify-content-center">
            <Col md={6} className="mb-4">
                <h1>Welcome, <span>{patient ? patient.first_name : "Patient"}</span></h1>
              </Col>
            </Row>
            <Row className="mt-5 top-card sidecontent">
              <Col md={3} className="mb-4">
                <Card className="patient-appointment card">
                  <Card.Body>
                    <Card.Title className="card-title">{
                      // if appointment is more than 1, show appointments, else show appointment
                      patient && patient.appointments && patient.appointments.length > 1 ? "Today's Appointments" : "Today's Appointment"
                    }</Card.Title>
                    <Card.Text>{
                      // check if patient has an appointment today
                      patient && patient.appointments && patient.appointments.length > 0 ? patient.appointments.map(appointment => {
                        if (new Date(appointment.date).toDateString() === new Date().toDateString()) {

                          const appointmentTime = new Date(appointment.time).toLocaleTimeString('en-US', {
                            hour: 'numeric',
                            minute: 'numeric',
                            hour12: true,
                          })

                          const currentTime = new Date().toLocaleTimeString('en-US', {
                            hour: 'numeric',
                            minute: 'numeric',
                            hour12: true,
                          })

                          const checkStatus = () => {
                            if (appointmentTime > currentTime) {
                              return <i  className="fa-solid fa-spinner" style={{color:"#9263CB"}}></i>
                            } else if (appointmentTime < currentTime) {
                              return <i className="fa-solid fa-check" style={{color:"green"}}></i>
                            } else {
                              return <i className="fa-solid fa-ellipsis" style={{color:"#e36e2c"}}></i>
                            }
                          }
                          return (
                            <div key={appointment.id}>
                              <p>Dr. {appointment.doctor.first_name} {appointment.doctor.last_name} - <span  className='doctor-time'>{appointmentTime}</span>
                              <span className='status'>{checkStatus()}</span>
                              </p>
                              
                            </div>
                          )
                        }
                      }
                      ) : "No Appointment Today"
                    }</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={3} className="mb-4">
                <Card className="patient-time card">
                  <Card.Body>
                    <Card.Title className="card-title">
                      {new Date().toDateString().split(' ').slice(0, 4).join(' ')}
                    </Card.Title>
                    <Card.Text>
                      {
                        new Date().toLocaleTimeString('en-US', {
                          hour: 'numeric',
                          minute: 'numeric',
                          hour12: true,
                        })
                      }
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
            <Row className="mt-5 sidecontent">
              <Col md={5} className="mb-4">
                <h4>What specialist are you seeking ?</h4>
              </Col>
            </Row>
            <Row className="mt-5 sidecontent">
              {specialists.map((specialist) => (
                  <Col key={specialist.id} md={3} className="specialist-home mb-4">
                    <Link to={`/patient/specialists/${specialist.id}`}>
                      <Card>
                        <Card.Body>
                          <i className={specialist.image}></i>
                          <Card.Title className="card-title">{specialist.name}</Card.Title>
                        </Card.Body>
                      </Card>
                    </Link>
                  </Col>
              ))}
            </Row>
          </div>
        </div>
      
    </div>

    </>
  )
}

export default PatientDashboard