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
              <Row className='mt-5 top-card sidecontent'>
                  <Col md={6}>
                    <Card className="greeting card" >
                      <Card.Title >{greeting()}, Dr. {doctor ? doctor.first_name : "Doctor"}</Card.Title>
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
              <Row className="mt-5 sidecontent">
                <Col md={10}>
                   <h2 className='appointment'>Today's Appointments</h2>
                </Col>
              </Row>
          </div>
        </div>
      </div>
      </>
  )
}

export default DoctorDashboard