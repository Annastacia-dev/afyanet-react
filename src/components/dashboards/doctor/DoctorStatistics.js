import React, { useContext,useState } from "react";
import DoctorSideBar from './DoctorSideBar';
import { Row, Col, Card } from 'react-bootstrap';
import { BsFillPersonFill } from "react-icons/bs";
import { BsCalendarCheckFill } from "react-icons/bs";
import '../../../css/DoctorStatistics.css';
import { DoctorContext } from '../../../context/doctor';
import { Data } from "./DoctorStatisticsData";
import BarChart from "./BarChart.js"



function Statistics() {

  const style = { color: "var(--light-purple)" }
  const style2 = { color: "var(--dark-purple)"}
  const { doctor } = useContext(DoctorContext);

  const [chartData,setChartData] = useState({
    labels: Data.map((data) => data.day),
    datasets: [
      {
        label : "Patients per Day",
        // data: Data.map((data) => data.patientsSeen),
        data: [8,9,12,4,7,15,12],
        backgroundColor :[
          "#9263CB",
          "#9263CB",
          "#9263CB",
          "#9263CB",
          "#9263CB"
        ],
        borderColor: "#dfd4ec",
        borderWidth: 2
      }
    ]
  });

  
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
            </Row>
            <h1 className="mt-4">Average Patients</h1>
            <Card className="doctor-statistic-card" style= {{width:"900px", height:"400px"}}>
            <div>
                <Col>
                  <BarChart chartData={chartData}/>
                </Col>
            </div>
            </Card>

          </div>
        </div>
      </div>
    </>
  )
}

export default Statistics;
