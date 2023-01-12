import React from "react";
import DoctorSideBar from './DoctorSideBar';
import {Container,Row,Col,Card} from 'react-bootstrap';
import "../../../css/DoctorPatients.css";
import { patients } from '../../../data/doctorPatients'
import { partners } from '../../../data/partners'



function Patients(){

    return(
     <>
      <div className="d-flex" id="wrapper">
      <DoctorSideBar />
        <div id="page-content-wrapper">
          <div className="container-fluid sidebarcontentcontainer">
           
           <div class="col-sm-3">
           <Container>
            <Row>
              <Col>
              <Card className="bg-light text-black first-patient" >
              <Card.Img variant="top" src="" />
              <i class="fa-solid fa-user"></i>

             <Card.ImgOverlay>
              {/* <Card.Title style={{ fontSize:"20px" }}>Good Morning, Dr.Ashley</Card.Title> */}
             <Card.Text style={{ fontSize:"15px" }}>
           Julian Wan
          </Card.Text>
          <Card.Text style={{ fontSize:"15px" }}>
          <i class="fa-solid fa-location-dot"></i>
          Karen
          </Card.Text>
          <Card.Text style={{ fontSize:"15px" }}>
          <i class="fa-solid fa-cake-candles"></i>
          35
          </Card.Text>


          </Card.ImgOverlay>
          </Card>
     </Col>
     </Row>

{/* sec-patient */}
     <Row>
              <Col>
              <Card className="bg-light text-black sec-patient" >
              <Card.Img variant="top" src="" />
              <i class="fa-solid fa-user"></i>

             <Card.ImgOverlay>
              {/* <Card.Title style={{ fontSize:"20px" }}>Good Morning, Dr.Ashley</Card.Title> */}
             <Card.Text style={{ fontSize:"15px" }}>
           Julian Wan
          </Card.Text>
          <Card.Text style={{ fontSize:"15px" }}>
          <i class="fa-solid fa-location-dot"></i>
          Karen
          </Card.Text>
          <Card.Text style={{ fontSize:"15px" }}>
          <i class="fa-solid fa-cake-candles"></i>
          35
          </Card.Text>


          </Card.ImgOverlay>
          </Card>
     </Col>
     </Row>

     <Row>
              <Col>
              <Card className="bg-light text-black first-patient" >
              <Card.Img variant="top" src="" />
              <i class="fa-solid fa-user"></i>

             <Card.ImgOverlay>
              {/* <Card.Title style={{ fontSize:"20px" }}>Good Morning, Dr.Ashley</Card.Title> */}
             <Card.Text style={{ fontSize:"15px" }}>
           Julian Wan
          </Card.Text>
          <Card.Text style={{ fontSize:"15px" }}>
          <i class="fa-solid fa-location-dot"></i>
          Karen
          </Card.Text>
          <Card.Text style={{ fontSize:"15px" }}>
          <i class="fa-solid fa-cake-candles"></i>
          35
          </Card.Text>


          </Card.ImgOverlay>
          </Card>
     </Col>
     </Row>

     <Row>
              <Col>
              <Card className="bg-light text-black sec-patient" >
              <Card.Img variant="top" src="" />
              <i class="fa-solid fa-user"></i>

             <Card.ImgOverlay>
              {/* <Card.Title style={{ fontSize:"20px" }}>Good Morning, Dr.Ashley</Card.Title> */}
             <Card.Text style={{ fontSize:"15px" }}>
           Julian Wan
          </Card.Text>
          <Card.Text style={{ fontSize:"15px" }}>
          <i class="fa-solid fa-location-dot"></i>
          Karen
          </Card.Text>
          <Card.Text style={{ fontSize:"15px" }}>
          <i class="fa-solid fa-cake-candles"></i>
          35
          </Card.Text>


          </Card.ImgOverlay>
          </Card>
     </Col>
     </Row>
 </Container>



 <Row>
              <Col>
              <Card className="bg-light text-black third-patient" >
              <Card.Img variant="top" src="" />
              <i class="fa-solid fa-user"></i>

             <Card.ImgOverlay>
              {/* <Card.Title style={{ fontSize:"20px" }}>Good Morning, Dr.Ashley</Card.Title> */}
             <Card.Text style={{ fontSize:"15px" }}>
           Julian Wan
          </Card.Text>
          <Card.Text style={{ fontSize:"15px" }}>
          <i class="fa-solid fa-location-dot"></i>
          Karen
          </Card.Text>
          <Card.Text style={{ fontSize:"15px" }}>
          <i class="fa-solid fa-cake-candles"></i>
          35
          </Card.Text>


          </Card.ImgOverlay>
          </Card>
     </Col>
     </Row><Row>
              <Col>
              <Card className="bg-light text-black fourth-patient" >
              <Card.Img variant="top" src="" />
              <i class="fa-solid fa-user"></i>

             <Card.ImgOverlay>
              {/* <Card.Title style={{ fontSize:"20px" }}>Good Morning, Dr.Ashley</Card.Title> */}
             <Card.Text style={{ fontSize:"15px" }}>
           Julian Wan
          </Card.Text>
          <Card.Text style={{ fontSize:"15px" }}>
          <i class="fa-solid fa-location-dot"></i>
          Karen
          </Card.Text>
          <Card.Text style={{ fontSize:"15px" }}>
          <i class="fa-solid fa-cake-candles"></i>
          35
          </Card.Text>


          </Card.ImgOverlay>
          </Card>
     </Col>
     </Row>
    
     {/*  */}

 </div>
        </div>
        </div>
        </div>
        </>
    )
}

export default Patients;