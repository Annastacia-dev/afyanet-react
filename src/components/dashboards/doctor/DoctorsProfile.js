import axios  from "axios";
import DoctorSideBar from './DoctorSideBar';
import { Row, Col, Card } from 'react-bootstrap';
import React, { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom";

import { ToastContainer, toast } from 'react-toastify';
import Popup from 'reactjs-popup';
import Profile from "./Profile";
import '../../../css/DoctorsProfile.css';


function DoctorsProfile(){
  let navigate = useNavigate();
  const {id} = useParams();
  const [doctor, setDoctor] = useState({
    first_name:"",
    last_name:"", 
    email:"", 
    phone_number:"",  
    location:"", 
    specialty:"", 
    contract_length:"", 
    days_available_weekly:"", 
    specific_days_times_available:""
  });


  const handleLogout = () => {
    localStorage.removeItem('token');
    toast.success('Logged out successfully',{
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'colored',
      transition: 'slide',
      style: { backgroundColor: '#9263CB'}
    });
    setTimeout(() => {
      navigate('/doctor/login');
    }
    , 2000);
  }


const {first_name, last_name, email, phone_number, location, specialty, contract_length, days_available_weekly, specific_days_times_available} = doctor;
const onInputchange = e =>{
  setDoctor ({...doctor, [e.target.name]: e.target.value});
};

useEffect(()=>{
  loadDocter();

},[]);


const onSubmit = async e => {
  e.preventDefault();
  await axios.patch(`https://afyanet-127t.onrender.com/doctors/${id}`, doctor);
  navigate.push("/profile");
};

const loadDocter = async () => {
  const result = await axios.patch(`https://afyanet-127t.onrender.com/doctors/${id}`,doctor);
  setDoctor(result.data);
};


return(

<div className="Doctor-profile d-flex" id="wrapper">
      <DoctorSideBar/>
        <div className="body" id="page-content-wrapper">
          <ToastContainer
            position="top-center"
            autoClose={1000}
            hideProgressBar={false}
            closeOnClick
            pauseOnHover
            draggable
            progress={undefined}
            theme='colored'
            transition='slide'
            style={{ backgroundColor: '#9263CB'}}
           />
          <div className="container-fluid px-5 sidecontentcontainer">
            <Row className="sidecontent justify-content-center">
            <h3 className="mt-4">Profile
            <button className="login-button btn btn-danger"
                  onClick={handleLogout}>Log Out</button>
              </h3>
            </Row>
            <Row className="sidecontent">
              <Col md={6} className="mb-4">
                <Card className="card">
                  <Card.Img className='profile-avatar' variant="top" src={doctor && doctor.profile_picture ? doctor.profile_picture : "https://www.w3schools.com/howto/img_avatar.png"} />
                  <Card.Body>
                    <Card.Title className="card-title">{doctor && doctor.first_name} {doctor && doctor.last_name}</Card.Title>
                    <Card.Text>
                      <p><strong>Email:</strong> {doctor && doctor.email}</p>
                      <p><strong>phone:</strong> {doctor && doctor.phone_number}</p>
                      <p><strong>location</strong> {doctor && doctor.location}</p>
                      <p><strong>specialty:</strong> {doctor && doctor.specialty}</p>
                      
                      <p><strong>contract_length:</strong> {doctor && doctor.contract_length}</p>
                      <p><strong>days_available_weekly:</strong> {doctor && doctor.days_available_weekly}</p>
                      <p><strong>specific_days_times_available</strong> {doctor && doctor.specific_days_times_available}</p>
                      
                    </Card.Text>
                  </Card.Body>
                </Card>
                <Popup trigger={<button className="btn btn-primary">Edit Personal Details</button>} 
                modal
                nested
                >
                  <Popup trigger={<button className="btn btn-primary">Edit Schedule Details</button>} 
                modal
                nested
                />
                  <Profile/>
                </Popup>
              </Col>
            </Row>
          </div>
        </div>
      
    </div>
)
};

export default DoctorsProfile