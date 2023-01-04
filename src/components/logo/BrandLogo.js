import React from 'react'
import { Navbar } from 'react-bootstrap';
import logo from "../../assets/images/logo/afyanet.png";

const BrandLogo = () => {
  return (
    <div>
        <Navbar.Brand href="#home">
                    <img src={logo} alt = "logo" className="logo" style={{width: "50px"}}/>
                    <span className="navbar-brand">AfyaNet</span>
        </Navbar.Brand>
    </div>
  )
}

export default BrandLogo