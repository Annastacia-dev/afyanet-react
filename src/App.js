import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './components/landingpage/LandingPage';
import PatientSignUp from './components/authforms/patient/PatientSignUp';
import PatientLogIn from './components/authforms/patient/PatientLogIn';
import PatientDashboard from './components/dashboards/patient/PatientDashboard';
import PatientAppointments from './components/dashboards/patient/PatientAppointments';
import PatientMedicalRecords from './components/dashboards/patient/PatientMedicalRecords';
import PatientMessages from './components/dashboards/patient/PatientMessages';
import PatientProfile from './components/dashboards/patient/PatientProfile';

function App() {

  return (
   
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/patient/signup" element={<PatientSignUp/>} />
        <Route path="/patient/login" element={<PatientLogIn/>} />
        <Route path="/patient/dashboard" element={<PatientDashboard />} />
        <Route path="/patient/appointments" element={<PatientAppointments />} />
        <Route path="/patient/medicalrecords" element={<PatientMedicalRecords />} />
        <Route path="/patient/messages" element={<PatientMessages />} />
        <Route path="/patient/profile" element={<PatientProfile />} />
      </Routes>
    </div>
  );
}

export default App;
