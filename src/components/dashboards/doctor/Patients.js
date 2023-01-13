import React,  { useContext } from "react";
import DoctorSideBar from './DoctorSideBar';
import {Container,Row,Col,Card} from 'react-bootstrap';
import "../../../css/DoctorPatients.css";
import {  DoctorContext } from '../../../context/doctor';




function Patients(){

 
  const { doctor } = useContext(DoctorContext);
  console.log(doctor)

    return(
     <>
           <DoctorSideBar />

      <div className="d-flex" id="wrapper">
      <DoctorSideBar />
        <div id="page-content-wrapper">
          <div className="container-fluid sidebarcontentcontainer">
           <Card className="first-patient">
           
          <Card.Title >{doctor && doctor.first_name} {doctor &&doctor.last_name}
</Card.Title>
             <Card.Text >
             <i class="fa-solid fa-location-dot"></i>
             {doctor &&doctor.location}
              </Card.Text>
             <Card.Text >
             <i class="fa-solid fa-cake-candles"></i>
             {doctor &&doctor.appointments}
              </Card.Text>


           </Card>
      
        </div>
        </div>
        </div>


        </>
    )
}

export default Patients;