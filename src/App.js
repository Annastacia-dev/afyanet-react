import './App.css';
import React,{ useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './components/landingpage/LandingPage';
import PatientSignUp from './components/authforms/patient/PatientSignUp';
import PatientLogIn from './components/authforms/patient/PatientLogIn';
import PatientDashboard from './components/dashboards/PatientDashboard';


function App() {

  // Patient

  const [patient, setPatient] = useState([]);

  // get Patient
  async function getPatient() {
    const response = await fetch('http://localhost:3000/patient_profile')
    const data = await response.json();
    setPatient(data)
  }

  useEffect (() => {
    getPatient()
  },[])






  return (
   
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/patient/signup" element={<PatientSignUp setPatient={setPatient} />} />
        <Route path="/patient/login" element={<PatientLogIn setPatient={setPatient} />} />
        <Route path="/patient/dashboard" element={<PatientDashboard patient={patient} />} />
      </Routes>
    </div>
  );
}

export default App;
