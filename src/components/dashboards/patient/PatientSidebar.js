import React from 'react'
import logo from '../../../assets/images/logo/afyanet.png'


const PatientSidebar = () => {
  return (
    <div classNmae='bg-light border-right bg-white shadow-md rounded-lg p-4' id='sidebar-wrapper'>
      <div className="sidebar-heading">
          <img src={logo} alt = "logo" className="logo" style={{width: "40px"}}/>
          <p className="navbar-brand" style={{color:"#592c7b",fontSize: "20px",fontWeight: "500",marginLeft: "10px"}}>AfyaNet</p>
      </div>
      <div className="list-group list-group-flush">
        <a href="/patient/dashboard" className="list-group-item list-group-item-action bg-light">
          <i className="fas fa-home"></i>
          Homepage
        </a>
        <a href="/patient/profile" className="list-group-item list-group-item-action bg-light">
          <i className="fa-solid fa-calendar-check"></i>
          Appointments 
        </a>
        <a href="/patient/profile" className="list-group-item list-group-item-action bg-light">
         <i className="fa-solid fa-record-vinyl"></i>
          Medical Records 
        </a>
        <a href="/patient/profile" className="list-group-item list-group-item-action bg-light">
          <i className="fa-solid fa-message"></i>
          Messages
        </a>
        <a href="/patient/profile" className="list-group-item list-group-item-action bg-light">
          <i className="fas fa-user"></i>
          Profile
        </a>
      </div>
      
      
    </div>
  )
}

export default PatientSidebar
