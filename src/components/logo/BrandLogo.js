import React from 'react'
import { Link } from 'react-router-dom';
import { Navbar, Container } from 'react-bootstrap';
import logo from "../../assets/images/logo/afyanet.png";
import './BrandLogo.css'

const BrandLogo = () => {
  return (
      <Navbar
      style={{
        backgroundColor: "#eee7f6",
        height: "60px",
        boxShadow:'none'
      }}
      expand="lg" className="home navbar navbar-expand-lg fixed-top py-3">
            <Container className="container px-4 px-lg-5">
              <Link to="/">
              <Navbar.Brand className='brandlogo' style={{display: "flex",alignItems: "center",justifyContent: "center"}} href="#home">
                  <img src={logo} alt = "logo" className="logo" style={{width: "40px"}}/>
                  <span className="navbar-brand" style={{color:"#592c7b",fontSize: "20px",fontWeight: "500",marginLeft: "10px"}}>AfyaNet</span>
              </Navbar.Brand>
              </Link>
            </Container>
      </Navbar>
    
  )
}

export default BrandLogo