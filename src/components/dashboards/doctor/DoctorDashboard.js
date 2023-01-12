import React,{ useContext } from 'react'
import { DoctorContext } from '../../../context/doctor';
import DoctorSideBar from './DoctorSideBar';
import DoctorNavBar from './DoctorNavBar';
import "../../../css/DoctorDashboard.css"
import {Row, Col,Card,Table } from 'react-bootstrap';



const DoctorDashboard = () => {

  const { doctor, error, loading } = useContext(DoctorContext);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  console.log('doctor', doctor)

  const greeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) {
      return 'Good Morning';
    } else if (hour < 18) {
      return 'Good Afternoon';
    } else {
      return 'Good Evening';
    }
  };

  const greetingWishes = () => {
    const hour = new Date().getHours();
    if (hour < 12) {
      return 'Have a nice day ahead!';
    } else if (hour < 18) {
      return 'Have a good afternoon!';
    } else {
      return 'Have a good evening!';
    }
  };


  


  return (
    <>
    <div className='patient-navbar'>
      <DoctorNavBar />
    </div>
     <div className="patient-homepage doctor-dashboard d-flex" id="wrapper">
      <DoctorSideBar />
        <div id="page-content-wrapper">
          <div className="doctor-container container-fluid px-5 py-5 sidebarcontentcontainer">
              <Row className='dispaly-cards mt-5 top-card sidecontent'>
                  <Col md={6}>
                    <Card className="greeting card" >
                      <Card.Title >{greeting()},<span> Dr. {doctor ? doctor.first_name : "Doctor"}</span></Card.Title>
                        <Card.Text >{greetingWishes()}</Card.Text>
                    </Card>
                  </Col>

                  <Col  md={6}>
                    <Card className="time card" >
                          <Card.Title>{new Date().toDateString().split(' ').slice(0, 4).join(' ')}</Card.Title>
                            <Card.Text>{
                              new Date().toLocaleTimeString('en-US', {
                                hour: 'numeric',
                                minute: 'numeric',
                                hour12: true,
                              })}
                            </Card.Text>
                    </Card>
                  </Col>
              </Row>
              <Col md={6} className='phone-time'>
                    <Card className="card" >
                          <Card.Title>{new Date().toDateString().split(' ').slice(0, 4).join(' ')}</Card.Title>
                            <Card.Text>{
                              new Date().toLocaleTimeString('en-US', {
                                hour: 'numeric',
                                minute: 'numeric',
                                hour12: true,
                              })}
                            </Card.Text>
                    </Card>
                  </Col>
              <Row className="mt-5 sidecontent">
                <Col md={10}>
                   <h2 className='appointment'>Today's Appointments</h2>
                </Col>
              </Row>

              <Row className=" appointments-table mt-5 sidecontent">
                <Col md={10}>
                  <Table striped bordered hover>
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Location</th>
                        <th>Date</th>
                        <th>Time</th>
                        <th>Status</th>
                      </tr>
                    </thead>
                    {
                      // appointments who have the same date as today's date

                      doctor.appointments ? doctor.appointments.map(appointment => {

                        console.log('app', appointment.date)

                        const date = new Date(appointment.date).toDateString().split(' ').slice(0, 4).join(' ')
                        const today = new Date().toDateString().split(' ').slice(0, 4).join(' ')

                        const appointmentTime = new Date(appointment.time).toLocaleTimeString('en-US', {
                          hour: 'numeric',
                          minute: 'numeric',
                          hour12: true,
                        })

                        // status checks appointment time and date and compares it to the current time and date
                        const checkStatus = () => {
                          
                          const currentTime = new Date().toLocaleTimeString('en-US', {
                            hour: 'numeric',
                            minute: 'numeric',
                            hour12: true,
                          })

                          const currentDate = new Date().toDateString().split(' ').slice(0, 4).join(' ')

                          if (date === currentDate && appointment.time < currentTime) {
                            return <i style={{color:"green", fontSize:"25px"}} className="fa-solid fa-check"></i>
                          } else if (date === currentDate && appointment.time > currentTime) {
                            return <i style={{color:"#9263CB", fontSize:"25px"}} className="fa-solid fa-spinner"></i>
                          } else if (date === currentDate && appointment.time === currentTime) {
                            return <i style={{color:"#e36e2c", fontSize:"25px"}}  className="fa-solid fa-ellipsis"></i>
                          } else if (date < currentDate) {
                            return 'Missed'
                          } else {
                            return 'Upcoming'
                          }
                        }

                        if (date === today) {
                          return (
                            <tbody key={appointment.id}>
                              <tr>
                                <td>{appointment.patient.first_name} {appointment.patient.last_name}</td>
                                <td>{appointment.patient.location}</td>
                                <td>{date}</td>
                                <td>{appointmentTime}</td>
                                <td>{checkStatus()}</td>
                              </tr>
                            </tbody>
                          )
                        }   
                      }) : (
                        <div>
                          <h1>You have no appointments today!</h1>
                        </div>
                      )
                      
                    }
                  </Table>
                </Col>
              </Row>




          </div>
        </div>
      </div>
      </>
  )
}

export default DoctorDashboard