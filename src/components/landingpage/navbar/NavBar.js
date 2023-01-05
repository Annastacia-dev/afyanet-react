import React from "react";
import { Container,Navbar, Nav, Button } from 'react-bootstrap';
import logo from "../../../assets/images/logo/afyanet.png";
import "./NavBar.css"


function NavBar () {

    return(
        <>
        <Navbar bg="white" expand="lg" className="home navbar navbar-expand-lg navbar-light fixed-top py-3">
            <Container className="container px-4 px-lg-5">
                <Navbar.Brand  className='brand' href="#home">
                    <img src={logo} alt = "logo" className="logo"/>
                    <span className="navbar-brand">AfyaNet</span>
                </Navbar.Brand>
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
                    {/* align center */}
                    <Nav className="navbar-nav ms-auto my-2 my-lg-2 me-lg-4">
                    <ul className="navbar-nav ms-auto my-2 my-lg-0">
                        <li><Nav.Link href="#about">About Us</Nav.Link></li>
                        <li><Nav.Link href="#services">Services</Nav.Link></li>
                        <li><Nav.Link href="#ourpartners">Our Partners</Nav.Link></li>
                        <li><Nav.Link href="#contact">Contact Us</Nav.Link></li>
                    </ul>
                    </Nav>
                </Navbar.Collapse>
                <Navbar.Toggle aria-controls="basic-navbar-nav" className="navbar-toggler navbar-toggler-left" />
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                    <Nav className="navbar-nav ms-auto my-2 my-lg-0">
                     <Button variant="outline-success">Log In</Button>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        </>
       
    )
}
export default NavBar;