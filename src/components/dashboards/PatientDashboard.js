import React,{ useContext } from 'react'
import { PatientContext } from '../../context/patient';

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
    <div>
      <p>Patient name: {patient.first_name}</p>
      <p>Patient age: {patient.age}</p>
    </div>
  )
}

export default PatientDashboard