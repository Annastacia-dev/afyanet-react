import React, { useContext } from 'react'
import PatientSidebar from './PatientSidebar'
import { PatientContext } from '../../../context/patient'
import {Row, Col, Table} from 'react-bootstrap'
import '../../../css/PatientAppointments.css'


const PatientAppointments = () => {

  const { patient } = useContext(PatientContext)

  console.log(patient)


  return (
    <div className="patient-appointments-page d-flex" id="wrapper">
      <PatientSidebar />
        <div id="page-content-wrapper">
          <div className="container-fluid px-5 sidecontentcontainer">
            {/* Upcoming Appointments */}
            <Row className="mt-5 upcoming-appointments  sidecontent">
              <Col md={12} className="mb-4">
                <h3>Upcoming Appointments</h3>
                    {patient && patient.appointments && patient.appointments.length > 0 ? patient.appointments.map(appointment => {

                      const appointmentDate = new Date(appointment.date)
                      const currentDate = new Date()
                      const currentTime = new Date().toLocaleTimeString('en-US', {
                        hour: 'numeric',
                        minute: 'numeric',
                        hour12: true,
                      })
                      const appointmentTime = new Date(appointment.time).toLocaleTimeString('en-US', {
                        hour: 'numeric',
                        minute: 'numeric',
                        hour12: true,
                      })
                   
                      if (appointmentDate > currentDate || (appointmentDate === currentDate && appointmentTime > currentTime)) {
                        return (
                          <Table>
                            <thead>
                             <tr>
                              <th>Doctor</th>
                              <th>Date</th>
                              <th>Time</th>
                              <th>Location</th>
                              <th>Mode</th>
                              </tr>
                            </thead>
                            <tbody>
                            <tr key={appointment.id}>
                              <td>
                                <img src={appointment.doctor.profile_picture? appointment.doctor.profile_picture : "https://www.w3schools.com/howto/img_avatar.png" } alt="doctor" className="avatar-appointment img-fluid" />
                               <span>{appointment.doctor.first_name} {appointment.doctor.last_name}</span> 
                              </td>
                              <td><p>{appointmentDate.toDateString()}</p></td>
                              <td><p>{appointmentTime}</p></td>
                              <td><p>{appointment.doctor.location}</p></td>
                              <td><p>{appointment.mode}</p></td>
                            </tr>
                          </tbody>
                          </Table>
                        )
                      }
                    }) : <h3 colSpan="4">No upcoming appointments</h3>
                    }
              </Col>
            </Row>
            {/* Past Appointments */}
            <Row className="mt-5 past-appointments sidecontent">
              <Col md={12} className="mb-4">
                <h3>Past Appointments</h3>
                    {patient && patient.appointments && patient.appointments.length > 0 ? patient.appointments.map(appointment => {

                      const appointmentDate = new Date(appointment.date)
                      const currentDate = new Date()
                      const currentTime = new Date().toLocaleTimeString('en-US', {
                        hour: 'numeric',
                        minute: 'numeric',
                        hour12: true,
                      })
                      const appointmentTime = new Date(appointment.time).toLocaleTimeString('en-US', {
                        hour: 'numeric',
                        minute: 'numeric',
                        hour12: true,
                      })

                      // return the first 30 characters of the diagnosis
                      const diagnosis = appointment.diagnosis && appointment.diagnosis.substring(0, 15)

                      if (appointmentDate < currentDate) {
                        return (
                          <Table >
                            <thead>
                              <tr>
                                <th>Doctor</th>
                                <th>Date</th>
                                <th>Time</th>
                                <th>Location</th>
                                <th>Mode</th>
                                <th>Diagnosis</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr key={appointment.id}>
                                <td>
                                  <img src={appointment.doctor.profile_picture? appointment.doctor.profile_picture : "https://www.w3schools.com/howto/img_avatar.png" } alt="doctor" className="avatar-appointment img-fluid" />
                                  {appointment.doctor.first_name} {appointment.doctor.last_name}
                                </td>
                                <td><p>{appointmentDate.toDateString()}</p></td>
                                <td><p>{appointmentTime}</p></td>
                                <td><p>{appointment.doctor.location}</p></td>
                                <td><p>{appointment.mode}</p></td>
                                <td><p>{diagnosis}...</p></td>
                              </tr>
                            </tbody>
                          </Table>
                        )
                      }
                    }) : <h3 colSpan="4">No past appointments</h3>
                    }
              </Col>
            </Row>  
          </div>
        </div>
      
    </div>
  )
}

export default PatientAppointments