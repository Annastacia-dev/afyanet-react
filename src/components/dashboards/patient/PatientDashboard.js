import React,{ useContext, useEffect, useState } from 'react'
import { Row, Col, Card  } from 'react-bootstrap';
import { PatientContext } from '../../../context/patient';
import PatientSidebar from './PatientSidebar';
import { Link } from 'react-router-dom';
import '../../../css/PatientHomepage.css'

const PatientDashboard = () => {

  const { patient, error, loading } = useContext(PatientContext);

  const [specialists, setSpecialists] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/specialties')
      .then((res) => res.json())
      .then((data) => {
        setSpecialists(data);
      });
  }, []);

  console.log('specialists', specialists);



  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  console.log('patient', patient)

  return (
     <div className="patient-homepage d-flex" id="wrapper">
      <PatientSidebar />
        <div id="page-content-wrapper">
          <div className="container-fluid px-5 py-5 sidecontentcontainer">
            <Row className="sidecontent justify-content-center">
            <Col md={6} className="mb-4">
                <h1>Welcome, {patient ? patient.first_name : "Patient"}</h1>
              </Col>
            </Row>
            <Row className="mt-5 top-card sidecontent">
              <Col md={3} className="mb-4">
                <Card className="card">
                  <Card.Body>
                    <Card.Title className="card-title">Today's Appointment</Card.Title>
                    <Card.Text className="card-title">Dr. John Doe - 12:00PM</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={3} className="mb-4">
                <Card className="card">
                  <Card.Body>
                    <Card.Title className="card-title">
                      {new Date().toDateString().split(' ').slice(0, 4).join(' ')}
                    </Card.Title>
                    <Card.Title className="card-title">
                      {
                        new Date().toLocaleTimeString('en-US', {
                          hour: 'numeric',
                          minute: 'numeric',
                          hour12: true,
                        })
                      }
                    </Card.Title>
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
                  <Col key={specialist.id} md={3} className="specialist mb-4">
                    <Link to={`/patient/specialists/${specialist.id}`}>
                      <Card className="card h-100">
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
  )
}

export default PatientDashboard