import React,{ useContext } from 'react'
import { PatientContext } from '../../../context/patient';
import PatientSidebar from './PatientSidebar';

const PatientDashboard = () => {

  const { patient, error, loading } = useContext(PatientContext);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  console.log('patient', patient)

  return (
     <div className="d-flex" id="wrapper">
      <PatientSidebar />
        <div id="page-content-wrapper">
          <div className="container-fluid">
            <h1 className="mt-4">Dashboard</h1>
          </div>
        </div>
      
    </div>
  )
}

export default PatientDashboard