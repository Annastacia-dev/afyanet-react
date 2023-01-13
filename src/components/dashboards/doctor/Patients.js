import React from "react";
import DoctorSideBar from './DoctorSideBar';
import {Container,Row,Col,Card} from 'react-bootstrap';
import "../../../css/DoctorPatients.css";




function Patients(){

    return(
     <>
      <div className="d-flex" id="wrapper">
      <DoctorSideBar />
        <div id="page-content-wrapper">
          <div className="container-fluid sidebarcontentcontainer">
           
           <div class="col-sm-3">
           
         </div>
        </div>
        </div>
        </div>
        </>
    )
}

export default Patients;