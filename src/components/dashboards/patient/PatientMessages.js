import React from 'react'
import PatientSidebar from './PatientSidebar'

const PatientMessages = () => {
  return (
    <div className="d-flex" id="wrapper">
      <PatientSidebar />
        <div id="page-content-wrapper">
          <div className="container-fluid">
            <h1 className="mt-4">Messages</h1>
          </div>
        </div>
      
    </div>
  )
}

export default PatientMessages