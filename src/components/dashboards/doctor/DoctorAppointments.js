import React, { useContext } from 'react'
import DoctorSidebar from './DoctorSideBar'
import { DoctorContext } from '../../../context/doctor'
import {Row, Col, Table} from 'react-bootstrap'
import '../../../css/DoctorAppointments.css'
import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'
import UpdateDiagnosis from './UpdateDiagnosis'



const DoctorAppointments = () => {

  const { doctor } = useContext(DoctorContext)

  console.log(doctor)

  const currentDate = new Date()
  const currentTime = new Date().toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
  })




  // upcoming appointments - if appointment date is greater than current date or it's the current date and the appointment time is greater than current time, sort by most recent appointment first
  const upcomingAppointments = doctor && doctor.appointments && doctor.appointments.length > 0 ? doctor.appointments.filter(appointment => {
    const appointmentDate = new Date(appointment.date)
    const appointmentTime = new Date(appointment.time).toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: 'numeric',
      hour12: true,
    })
    return appointmentDate > currentDate || (appointmentDate.toDateString() === currentDate.toDateString() && appointmentTime > currentTime)
  }).sort((a, b) => {
    const aDate = new Date(a.date)
    const bDate = new Date(b.date)
    const aTime = new Date(a.time).toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: 'numeric',
      hour12: true,
    })
    const bTime = new Date(b.time).toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: 'numeric',
      hour12: true,
    })
    return aDate - bDate || aTime - bTime
  }) : []

  console.log('upcoming', upcomingAppointments)

  // past appointments - if appointment date is less than current date or it's the current date and the appointment time is less than current time, sort by most recent appointment first
  const pastAppointments = doctor && doctor.appointments && doctor.appointments.length > 0 ? doctor.appointments.filter(appointment => {
    const appointmentDate = new Date(appointment.date)
    const appointmentTime = new Date(appointment.time).toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: 'numeric',
      hour12: true,
    })
    return appointmentDate < currentDate || (appointmentDate.toDateString() === currentDate.toDateString() && appointmentTime < currentTime)
  }).sort((a, b) => {
    const aDate = new Date(a.date)
    const bDate = new Date(b.date)
    const aTime = new Date(a.time).toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: 'numeric',
      hour12: true,
    })
    const bTime = new Date(b.time).toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: 'numeric',
      hour12: true,
    })
    return bDate - aDate || bTime - aTime
  }) : []

  console.log('past', pastAppointments)




  return (
    <>
    <div className="Doctor-appointments-page d-flex" id="wrapper">
      <DoctorSidebar />
        <div className='desktop' id="page-content-wrapper">
          <div className="container-fluid px-5 sidecontentcontainer">
            {/* Upcoming Appointments */}
            <Row className="mt-5 upcoming-appointments  sidecontent">
              <Col md={12} className="mb-4">
                <h3>Upcoming Appointments</h3>
                <Table>
                            <thead>
                             <tr>
                              <th>Patient</th>
                              <th>Date</th>
                              <th>Time</th>
                              <th>Location</th>
                              <th>Mode</th>
                              </tr>
                            </thead>
                  {
                    upcomingAppointments.length > 0 ? upcomingAppointments.map(appointment => {
                      const appointmentDate = new Date(appointment.date)
                      const appointmentTime = new Date(appointment.time).toLocaleTimeString('en-US', {
                        hour: 'numeric',
                        minute: 'numeric',
                        hour12: true,
                      })
                      return (
                        <tbody>
                        <tr key={appointment.id}>
                          <td>
                            <img src={appointment.patient.profile_picture? appointment.patient.profile_picture : "https://www.w3schools.com/howto/img_avatar.png" } alt="doctor" className="avatar-appointment img-fluid" />
                           <span>{appointment.patient.first_name} {appointment.patient.last_name}</span> 
                          </td>
                          <td><p>{appointmentDate.toDateString()}</p></td>
                          <td><p>{appointmentTime}</p></td>
                          <td><p>{appointment.patient.location}</p></td>
                          <td><p>{appointment.mode}</p></td>
                        </tr>
                      </tbody>
                      )
                    }
                    ) : <tbody><tr><td colSpan="5">No upcoming appointments</td></tr></tbody>
                  }
                 </Table>
              </Col>
            </Row>
            {/* Past Appointments */}
            <Row className="mt-5 past-appointments sidecontent">
              <Col md={12} className="mb-4">
                <h3>Past Appointments</h3>
                <Table >
                            <thead>
                              <tr>
                                <th>Patient</th>
                                <th>Date</th>
                                <th>Time</th>
                                <th>Location</th>
                                <th>Mode</th>
                                <th>Description</th>
                                <th>Diagnosis</th>
                              </tr>
                            </thead>
                            {
                              pastAppointments.length > 0 ? pastAppointments.map(appointment => {
                                const appointmentDate = new Date(appointment.date)
                                const appointmentTime = new Date(appointment.time).toLocaleTimeString('en-US', {
                                  hour: 'numeric',
                                  minute: 'numeric',
                                  hour12: true,
                                })
                                const diagnosis = appointment.diagnosis && appointment.diagnosis.length > 0 ? appointment.diagnosis.substring(0, 12) : (
                                    < Popup trigger={<button className="btn btn-primary">Add Diagnosis</button>} 
                                    modal
                                    nested
                                    >
                                        <UpdateDiagnosis appointment={appointment} />
                                    </Popup>

                                )
                                
                                return (
                                  <tbody>
                                    <tr key={appointment.id}>
                                      <td>
                                        <img src={appointment.patient.profile_picture? appointment.patient.profile_picture : "https://www.w3schools.com/howto/img_avatar.png" } alt="doctor" className="avatar-appointment img-fluid" />
                                        <span>{appointment.patient.first_name} {appointment.patient.last_name}</span>
                                      </td>
                                      <td><p>{appointmentDate.toDateString()}</p></td>
                                      <td><p>{appointmentTime}</p></td>
                                      <td><p>{appointment.patient.location}</p></td>
                                      <td><p>{appointment.mode}</p></td>
                                        <td><p>{appointment.description}</p></td>
                                      <td>{diagnosis}</td>
                                    </tr>
                                  </tbody>
                                )
                              }
                              ) : <tbody><tr><td colSpan="6">No past appointments</td></tr></tbody>
                            }
                   
                </Table>
              </Col>
            </Row>  
          </div>
        </div>
      
    </div>
    
    {/* Mobile Phone */}
          <div className="mobile-phone container-fluid px-5 sidecontentcontainer">
            {/* Upcoming Appointments */}
            <Row className=" mt-5 upcoming-appointments  sidecontent">
                <h5>Upcoming Appointments</h5>
                {
                  upcomingAppointments.length > 0 ? upcomingAppointments.map(appointment => {
                    const appointmentDate = new Date(appointment.date)
                    const appointmentTime = new Date(appointment.time).toLocaleTimeString('en-US', {
                      hour: 'numeric',
                      minute: 'numeric',
                      hour12: true,
                    })
                    return (
                      <div className="card mb-3" key={appointment.id}>
                        <div className="card-body">
                          <div className="row">
                            <div className="col-md-3">
                              <img src={appointment.patient.profile_picture? appointment.patient.profile_picture : "https://www.w3schools.com/howto/img_avatar.png" } alt="doctor" className="avatar-appointment img-fluid" />
                            </div>
                            <div className="col-md-9">
                              <h5 className="card-title">{appointment.patient.first_name} {appointment.patient.last_name}</h5>
                              <p className="card-text">{appointmentDate.toDateString()}</p>
                              <p className="card-text">{appointmentTime}</p>
                              <p className="card-text">{appointment.patient.location}</p>
                              <p className="card-text">{appointment.mode}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    )
                  }
                  ) : <div className="card mb-3">
                        <div className="card-body">
                          <div className="row">
                            <div className="col-md-12">
                              <h5 className="card-title">No upcoming appointments</h5>
                            </div>
                          </div>
                        </div>
                      </div>
                }

            </Row>

            {/* Past Appointments Mobile */}
              {/* Past Appointments */}
              <Row className="mt-5 past-appointments sidecontent">
              <Col md={12} className="mb-4">
                <h5>Past Appointments</h5>
                {
                  pastAppointments.length > 0 ? pastAppointments.map(appointment => {
                    const appointmentDate = new Date(appointment.date)
                    const appointmentTime = new Date(appointment.time).toLocaleTimeString('en-US', {
                      hour: 'numeric',
                      minute: 'numeric',
                      hour12: true,
                    })
                    const diagnosis = appointment.diagnosis && appointment.diagnosis.length > 0 ? appointment.diagnosis.substring(0, 12) : (
                        < Popup trigger={<button className="btn btn-primary">Add Diagnosis</button>} 
                        modal
                        nested
                        >
                            <UpdateDiagnosis appointment={appointment} />
                        </Popup>

                    )
                    return (
                      <div className="card mb-3" key={appointment.id}>
                        <div className="card-body">
                          <div className="row">
                            <div className="col-md-3">
                              <img src={appointment.doctor.profile_picture? appointment.doctor.profile_picture : "https://www.w3schools.com/howto/img_avatar.png" } alt="doctor" className="avatar-appointment img-fluid" />
                            </div>
                            <div className="col-md-9">
                              <h5 className="card-title">{appointment.patient.first_name} {appointment.doctor.last_name}</h5>
                              <p className="card-text">{appointmentDate.toDateString()}</p>
                              <p className="card-text">{appointmentTime}</p>
                              <p className="card-text">{appointment.patient.location}</p>
                              <p className="card-text">{appointment.mode}</p>
                                <p className="card-text">{appointment.description}</p>
                              <p className="card-text">{diagnosis}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    )
                  }
                  ) : <div className="card mb-3">
                        <div className="card-body">
                          <div className="row">
                            <div className="col-md-12">
                              <h5 className="card-title">No past appointments</h5>
                            </div>
                          </div>
                        </div>
                      </div>
                }
              </Col>
            </Row>  





            </div>
    </>
  )
}

export default DoctorAppointments
