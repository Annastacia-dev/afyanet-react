import React,{ useContext } from 'react'
import { DoctorContext } from '../../../context/doctor';
import DoctorSideBar from './DoctorSideBar';
import "../../../css/DoctorDashboard.css"
import { Card } from 'react-bootstrap';
import {Container,Row,Col} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";


const DoctorDashboard = () => {

  const { doctor, error, loading } = useContext(DoctorContext);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  console.log('doctor', doctor)

  // good morning section data
  


  return (
     <div className="d-flex" id="wrapper">
      <DoctorSideBar />
        <div id="page-content-wrapper">
          <div className="container-fluid sidebarcontentcontainer">
            <Container>
              <Row>
              <Col  md={6}>
              <Card className="bg-light text-black first-card" >
        {/* <Card.Img src="..." alt="Card image" /> */}
         <Card.ImgOverlay>
          <Card.Title style={{ fontSize:"20px" }}>Good Morning, Dr.Ashley</Card.Title>
          <Card.Text style={{ fontSize:"15px" }}>
            Have a nice day ahead!
          </Card.Text>
          </Card.ImgOverlay>
          </Card>
               </Col>

               <Col  md={6}>
               <Card className="bg-light text-black time-card" >
        {/* <Card.Img src="..." alt="Card image" /> */}
          <Card.ImgOverlay>
          <Card.Title style={{ fontSize:"13px" }}>WEDNESDAY,11TH JANUARY,2023</Card.Title>
          <Card.Text style={{ fontSize:"75px" }}>
            10:45
          </Card.Text>
          </Card.ImgOverlay>
          </Card>
          </Col>
              </Row>
            </Container>

 
            <h1 className='appointment'>Today's Appointments</h1>
           {/* <h1 className='appointment'>Today's Appointments</h1> */}
<Container>

<Card className="bg-light text-black appointment-card">

         <Container>
          <Row className="appointments-title">
          <Col>Name</Col>
          <Col>Location</Col>
          <Col>Date</Col>
          <Col>Time</Col>
          <Col>Status</Col>
         </Row>


     <Card className='first-appointment'>
          <Row>
             <Col><i className="fa-solid fa-user profile1"></i>
</Col> 
          <Col>Josphine</Col>
          <Col>Karen</Col>
          <Col>11/01/2023</Col>
          <Col>10:30-11:00 </Col>
          <Col>
          <i className="fa-solid fa-check first-icon"></i>
          </Col>
          </Row>
          
    </Card>
    
     <Card className='second-appointment'>
     {/* <img src="bolt" style="border-radius:50%;"/> */}
          <Row>
          <Col> <i className="fa-solid fa-user profile2"></i>
</Col>
          <Col>Sylvia</Col>
          <Col>Nairobi</Col>
          <Col>11/01/2023</Col>
          <Col>11:30-12:00 </Col>
          <Col>
          <i className="fa-solid fa-ellipsis second-icon" ></i>
          </Col>
          </Row>
    </Card>

  

  
     <Card className='first-appointment'>
          <Row>
          <Col> <i className="fa-solid fa-user profile3"></i>
</Col>
          <Col>Kenny</Col>
          <Col>Kiambu</Col>
          <Col>11/01/2023</Col>
          <Col>14:00-15:00 </Col>
          <Col> 
          <i className="fa-solid fa-spinner third-icon"></i>

          </Col>
          </Row>
    </Card>
    
         
</Container>
</Card>
</Container>
                <div className='back'>
                    <div className='logo'>
                      {/* <h1>Good Morning, Dr.Ashley</h1> */}
                      {/* <p>Have a nice day at work today!</p> */}
                    </div>
                </div>
            </div>
        </div>
            {/* <h1 className="mt-4">Doctor Dashboard</h1> */}
            
            {/* Time section */}
          </div>
    //     </div>
      
    // </div>
  )
}

export default DoctorDashboard