import React from 'react'
import logo from '../../../assets/images/logo/afyanetwhitelogo.png'
import '../../../css/PatientSidebar.css'
import DoctorNavBar from './DoctorNavBar';



const DoctorSideBar = () => {

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
    <>
    <div className='doctor-top-navbar'>
      <DoctorNavBar />
    </div>
    <div className='patient-sidebar border-right'id='sidebar-wrapper'>
      <div className="sidebar-heading">
          <img src={logo} alt = "logo" className="logo" style={{width: "30px",marginTop:"50px"}}/>
          <p className="navbar-brand" style={{color:"#fff",fontSize: "20px",fontWeight: "500",marginLeft: "10px",marginBottom:"40px"}}>AfyaNet</p>
      </div>
      <div className="list list-group list-group-flush">
        <a href="/doctor/dashboard" className="list-group-item list-group-item-action p-4">
        <i className="fa-solid fa-bars"></i>
         <p>Dashboard</p>
        </a>
        <a href="/doctor/patients" className="list-group-item list-group-item-action p-4">
        <i className="fa-solid fa-hospital-user"></i>
          <p>Patients</p>  
        </a>
        <a href="/doctor/appointments" className="list-group-item list-group-item-action p-4">
        <i className="fa-solid fa-calendar"></i>
          <p>Appointments</p>
        </a>
        <a href="/doctor/statistics" className="list-group-item list-group-item-action p-4">
        <i className="fa-solid fa-table"></i>
          <p>Statistics</p>
        </a>
        <a href="/doctors/profile" className="list-group-item list-group-item-action p-4">
          <i className="fas fa-user"></i>
          <p>Profile</p>
        </a>
      </div>  

    </div>
    </>
  )
}

export default DoctorSideBar
