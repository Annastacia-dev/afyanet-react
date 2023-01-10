import React,{ useContext } from 'react'
import { DoctorContext } from '../../../context/doctor';
import DoctorSideBar from './DoctorSideBar';

const DoctorDashboard = () => {

  const { doctor, error, loading } = useContext(DoctorContext);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  console.log('doctor', doctor)

  return (
     <div className="d-flex" id="wrapper">
      <DoctorSideBar />
        <div id="page-content-wrapper">
          <div className="container-fluid">
            <h1 className="mt-4">Doctor Dashboard</h1>
          </div>
        </div>
      
    </div>
  )
}

export default DoctorDashboard