import React from "react";
import { Container,Navbar, Nav  } from 'react-bootstrap';
import logo from "../../../assets/images/logo/afyanetwhitelogo.png";
import  "../../../css/DoctorNavBar.css";

function DoctorNavBar () {


    return(
        <>
        <Navbar  expand="lg" className="patient-navbar home navbar navbar-expand-lg navbar-light fixed-top py-3">
            <Container className="container px-4 px-lg-5">
                <Navbar.Brand  className='brand' href="#home">
                    <img src={logo} alt = "logo" className="logo"/>
                    <span style={{color:"#fff"}} className="navbar-brand">AfyaNet</span>
                </Navbar.Brand>
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
                    <Nav className="navbar-nav ms-auto my-2 my-lg-2 me-lg-4">
                    <ul className="navbar-nav ms-auto my-2 my-lg-0">
                        <li><Nav.Link href="/patient/dashboard">Dashboard</Nav.Link></li>
                        <li><Nav.Link href="/patient/appointments">Appointments</Nav.Link></li>
                        <li><Nav.Link href="/patient/medicalrecords">Medical Records</Nav.Link></li>
                        <li><Nav.Link href="/patient/messages">Messages</Nav.Link></li>
                        <li><Nav.Link href="/patient/profile">Profile</Nav.Link></li>
                    </ul>
                    </Nav>
                </Navbar.Collapse>
                <Navbar.Toggle aria-controls="basic-navbar-nav" className="navbar-toggler navbar-toggler-left" />
            </Container>
        </Navbar>
        </>
       
    )
}
export default DoctorNavBar;