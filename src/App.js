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
import PatientViewSpecialists from './components/dashboards/patient/PatientViewSpecialists';
import DoctorSignUp from './components/authforms/doctor/DoctorSignUp';
import DoctorAuthenticate from './components/authforms/doctor/DoctorAuthenticate';
import DoctorLogIn from './components/authforms/doctor/DoctorLogIn';
import DoctorDashboard from './components/dashboards/doctor/DoctorDashboard';



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
        <Route path="/patient/specialists/:id" element={<PatientViewSpecialists />} />
        <Route path="/doctor/signup" element={<DoctorSignUp  />} />
        <Route path="/doctor/login" element={<DoctorLogIn  />} />
        <Route path="/doctor/authenticate" element={<DoctorAuthenticate  />} />
        <Route path="/doctor/dashboard" element={<DoctorDashboard />} />
      </Routes>
    </div>
  );
}

export default App;