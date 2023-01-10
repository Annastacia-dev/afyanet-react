import React,{ useContext } from 'react'
import { DoctorContext } from '../../../context/doctor';
import DoctorSideBar from './DoctorSideBar';
import "../../../css/DoctorDashboard.css"

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
  const props = {
    title:'Good Morning,',
    name:'Dr.Ashley',
    text:'Have a nice day ahead!',
   
  }

  return (
     <div className="d-flex" id="wrapper">
      <DoctorSideBar />
        <div id="page-content-wrapper">
          <div className="container-fluid">

            {/* good morning section */}
            <div className='card-container'>
            <div className='card'>
                <div className='front'>
                    <div className='header'>
                        <div className='title'>{props.title} 
                        
                        <div className='name'>{props.name}</div>
                       
                        </div>
                    </div>
                   
                    <div className='content'>
                        {props.text}
                    </div>
                </div>
                <div className='back'>
                    <div className='logo'>
                      {/* <h1>Good Morning, Dr.Ashley</h1> */}
                      {/* <p>Have a nice day at work today!</p> */}
                    </div>
                </div>
            </div>
        </div>
            {/* <h1 className="mt-4">Doctor Dashboard</h1> */}
          </div>
        </div>
      
    </div>
  )
}

export default DoctorDashboard