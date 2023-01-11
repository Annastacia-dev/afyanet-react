import React from 'react'
import logo from '../../../assets/images/logo/afyanetwhitelogo.png'
import '../../../css/PatientSidebar.css'


const PatientSidebar = () => {

  // remove active class from all list items and add active class to the clicked list item
  const list = document.querySelectorAll('.list-group-item');
  list.forEach(item => {
    item.addEventListener('click', () => {
      list.forEach(item => {
        item.classList.remove('active');
      })
      this.classList.add('active');
    })
  })


  return (
    <div className='patient-sidebar border-right' id='sidebar-wrapper'>
      <div className="sidebar-heading">
          <img src={logo} alt = "logo" className="logo" style={{width: "30px",marginTop:"50px"}}/>
          <p className="navbar-brand" style={{color:"#fff",fontSize: "20px",fontWeight: "500",marginLeft: "10px",marginBottom:"40px"}}>AfyaNet</p>
      </div>
      <div className="list list-group list-group-flush">
        <a href="/patient/dashboard" className="list-group-item list-group-item-action p-4">
          <i className="fas fa-home"></i>
          <span>Homepage</span>
        </a>
        <a href="/patient/appointments" className="list-group-item list-group-item-action p-4">
          <i className="fa-solid fa-calendar-check"></i>
          <span>Appointments</span>  
        </a>
        <a href="/patient/medicalrecords" className="list-group-item list-group-item-action p-4">
         <i className="fa-solid fa-record-vinyl"></i>
          <span>Medical Records</span>
        </a>
        <a href="/patient/messages" className="list-group-item list-group-item-action p-4">
          <i className="fa-solid fa-message"></i>
          <span>Messages</span>
        </a>
        <a href="/patient/profile" className="list-group-item list-group-item-action p-4">
          <i className="fas fa-user"></i>
          <span>Profile</span>
        </a>
      </div>

    </div>
  )
}

export default PatientSidebar
