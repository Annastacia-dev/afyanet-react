import React from 'react'

const PatientDashboard = ({ patient }) => {
  return (
    <div>
        PatientDashboard
        <h1>{patient.first_name}</h1>
    </div>
  )
}

export default PatientDashboard