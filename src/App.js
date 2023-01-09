import './App.css';
import React,{ useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './components/landingpage/LandingPage';
import PatientSignUp from './components/authforms/patient/PatientSignUp';
import PatientLogIn from './components/authforms/patient/PatientLogIn';
import PatientDashboard from './components/dashboards/PatientDashboard';
import DoctorSignUp from './components/authforms/doctor/DoctorSignUp';
import DoctorLogIn from './components/authforms/doctor/DoctorLogIn';


function App() {

  // Patient

  const [patient, setPatient] = useState([]);

  // Doctor
  const [doctor, setDoctor] = useState([]);

  // get Patient
  async function getPatient() {
    const response = await fetch('http://localhost:3000/patient_profile')
    const data = await response.json();
    setPatient(data)
  }

  useEffect (() => {
    getPatient()
  },[])

   // get Doctor
   async function getDoctor() {
    const response = await fetch('http://localhost:3000/doctor_profile')
    const data = await response.json();
    setDoctor(data)
  }

  useEffect (() => {
    getDoctor()
  },[])





  return (
   
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/patient/signup" element={<PatientSignUp setPatient={setPatient} />} />
        <Route path="/patient/login" element={<PatientLogIn setPatient={setPatient} />} />
        <Route path="/patient/dashboard" element={<PatientDashboard patient={patient} />} />
        <Route path="/doctor/signup" element={<DoctorSignUp setDoctor={setDoctor} />} />
        <Route path="/doctor/login" element={<DoctorLogIn setDoctor={doctor} />} />
      </Routes>
    </div>
  );
}

export default App;
