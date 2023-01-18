import DoctorSideBar from './DoctorSideBar';
import { Row, Col, Card } from 'react-bootstrap';
import React, { useContext} from "react"
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import Popup from 'reactjs-popup';
import EditPersonalDetails from "./EditPersonalDetails";
import EditScheduleDetails from "./EditScheduleDetails";
import '../../../css/DoctorsProfile.css';
import { DoctorContext } from '../../../context/doctor';
import DoctorEditProfilePicture from './DoctorEditProfilePicture'


function DoctorsProfile(){
  
  const { doctor} = useContext(DoctorContext);

  console.log(doctor)

  const navigate = useNavigate();

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




return(

<div className="doctor-profile d-flex" id="wrapper">
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
            <button className="btn btn-danger"
                  onClick={handleLogout}>Log Out</button>
              </h3>
            </Row>
            <Row className="sidecontent">
                <Col md={6}>
                <Card className="card">
                  <Card.Img className='doctor-avatar' variant="top" src={ doctor && doctor.profile_picture ? doctor.profile_picture : 'https://www.w3schools.com/howto/img_avatar.png'} />
                  <Popup trigger={<button className='btn btn-primary'>Edit Profile Picture</button>}
                  modal
                  nested>
                    <DoctorEditProfilePicture />
                  </Popup>

                  <Card.Body>
                    <Card.Title className="card-title">Personal Details</Card.Title>
                     <Card.Text>
                      <p>Dr.{doctor && doctor.first_name} {doctor && doctor.last_name}</p>
                      <p><i className={doctor && doctor.specialty.image}></i> {doctor && doctor.specialty.name}</p>
                      <p>{doctor && doctor.email}</p>
                      <p>{doctor && doctor.phone_number}</p>
                      <p>{doctor && doctor.location}</p>
                    </Card.Text>
                    </Card.Body>
                    </Card>
                    <Popup trigger={<button className="btn btn-primary">Edit Personal Details</button>} 
                modal
                nested
                >
                  <EditPersonalDetails />
                </Popup>
                
                </Col>
                <Col md={6}>
                <Card className="card">
                  <Card.Body>
                    <Card.Title className="card-title">Schedule Details</Card.Title>
                     <Card.Text>
                      <p>Available for the next {doctor && doctor.contract_length}months</p>
                      <p>Available on {doctor && doctor.days_available_weekly}</p>
                      <p>Available from {
                        // convert doctor.specific_days_times_available to 12 hour clock
                        new Date(doctor && doctor.specific_days_times_available).toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })
                        }</p>
                    </Card.Text>
                    </Card.Body>
                </Card>
                <Popup trigger={<button className="btn btn-primary">Edit Schedule Details</button>} 
                modal
                nested
                >
                  <EditScheduleDetails />
                </Popup>
                </Col>
            </Row>
          </div>
        </div>
      
    </div>
)
};

export default DoctorsProfile