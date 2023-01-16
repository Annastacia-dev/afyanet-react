import React, { useContext } from "react";
import DoctorSideBar from './DoctorSideBar';
import { Row, Col, Card } from 'react-bootstrap';
import { BsFillPersonFill } from "react-icons/bs";
import { BsCalendarCheckFill } from "react-icons/bs";
import { TiMessages } from "react-icons/ti";
import { AiOutlineFileSearch } from "react-icons/ai";
import { GoGraph } from "react-icons/go";
import { IoPieChartSharp } from "react-icons/io5";
import '../../../css/DoctorStatistics.css';
import { DoctorContext } from '../../../context/doctor';



function Statistics() {

  const style = { color: "var(--light-purple)" }

 const { doctor } = useContext(DoctorContext);

 console.log(doctor)
  

  return (

    <>

      <div className="d-flex" id="wrapper">
        <DoctorSideBar />
        <div id="statistics-page-content-wrapper" >
          <div className="container-fluid sidebarcontentcontainer">
            <h1 className="mt-4">Weekly Reports</h1>
            <Row>
              <Col>
                <Card className="doctor-statistic-card" style={{ width: '15rem' }}>
                  <BsFillPersonFill size={125} style={style} />
                  <Card.Body>
                    <Card.Title>Total Patients</Card.Title>
                    <Card.Text>
                      {
                        // A doctor has patients through appointments
                        doctor && doctor.appointments && doctor.appointments.length > 0 ? (
                          doctor.appointments.map(appointment => appointment.patient).length
                        ) : (
                          0
                        )
                      }
                      
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card className="doctor-statistic-card" style={{ width: '15rem' }}>
                  <BsCalendarCheckFill size={100} style={style} />
                  <Card.Body>
                    <Card.Title>Total Appointments</Card.Title>
                    <Card.Text>{
                        doctor && doctor.appointments && doctor.appointments.length > 0 ? (
                          doctor.appointments.length
                        ) : (
                          0
                        )
                      }</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card className="doctor-statistic-card" style={{ width: '15rem' }}>
                  <TiMessages size={100} style={style} />
                  <Card.Body>
                    <Card.Title>Total Messages</Card.Title>
                    <Card.Text>
                      15
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card className="doctor-statistic-card" style={{ width: '15rem' }}>
                  <AiOutlineFileSearch size={100} style={style} />
                  <Card.Body>
                    <Card.Title>Searches you appeared on</Card.Title>
                    <Card.Text>
                      25
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
            <h1 className="mt-4">Average Patients Per Day</h1>
            <div>
              <Row>
                <Col>
                  <GoGraph size={250} style={style} />
                </Col>
                <Col>
                  <IoPieChartSharp size={250} style={style} />
                </Col>
              </Row>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default Statistics;
