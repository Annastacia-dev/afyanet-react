import React,{ useContext } from 'react'
import PatientSidebar from './PatientSidebar'
import { Row, Col, Card} from 'react-bootstrap';
import { PatientContext } from '../../../context/patient';
import '../../../css/PatientProfile.css'
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loading from '../../display/Loading'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import EditProfile from './EditProfile';
import AddProfilePicture from './AddProfilePicture';

const PatientProfile = () => {

  const navigate = useNavigate();

  const { patient, error, loading } = useContext(PatientContext);

  if (loading) {
    return <div><Loading /></div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

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
      navigate('/patient/login');
    }
    , 2000);
  }





  return (
    <div className="patient-profile d-flex" id="wrapper">
      <PatientSidebar />
        <div id="page-content-wrapper">
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
            <h3 className="mt-4">Profile</h3>
            </Row>
            <Row className="sidecontent">
              <Col md={6} className="mb-4">
                <Card className="card">
                  <Card.Img className='profile-avatar' variant="top" src={patient && patient.profile_picture ? patient.profile_picture : "https://www.w3schools.com/howto/img_avatar.png"} />
                  <Popup trigger={<button className="btn btn-primary">Add Profile Picture</button>}
                    modal
                    nested
                  >
                    <AddProfilePicture />
                  </Popup>
                  <Card.Body>
                    <Card.Title className="card-title">{patient && patient.first_name} {patient && patient.last_name}</Card.Title>
                    <Card.Text>
                      <p><strong>Email:</strong> {patient && patient.email}</p>
                      <p><strong>Age:</strong> {patient && patient.age}</p>
                      <p><strong>Phone:</strong> {patient && patient.phone_number}</p>
                      <p><strong>Location:</strong> {patient && patient.location}</p>
                      <p><strong>DOB:</strong> {patient && (patient.date_of_birth).slice(0,10)}</p>
                    </Card.Text>
                  </Card.Body>
                </Card>
                <Popup trigger={<button className="btn btn-primary">Edit Profile</button>} 
                modal
                nested
                >
                  <EditProfile />
                </Popup>
              </Col>
              <Col md={6} className="mb-4">
                <button
                  onClick={handleLogout}
                 className="btn btn-danger">Log Out</button>
              </Col>
            </Row>
          </div>
        </div>
      
    </div>
  )
}

export default PatientProfile