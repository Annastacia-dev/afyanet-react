import React from 'react'
import PatientSidebar from './PatientSidebar'

const PatientMedicalRecords = () => {
  return (
    <div className="d-flex" id="wrapper">
      <PatientSidebar />
        <div id="page-content-wrapper">
          <div className="container-fluid">
            <h1 className="mt-4">Medical Records</h1>
          </div>
        </div>
      
    </div>
  )
}

export default PatientMedicalRecords