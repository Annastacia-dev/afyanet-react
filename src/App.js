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
import PatientBookAppointment from './components/dashboards/patient/PatientBookAppointment';
import DoctorSignUp from './components/authforms/doctor/DoctorSignUp';
import DoctorAuthenticate from './components/authforms/doctor/DoctorAuthenticate';
import DoctorLogIn from './components/authforms/doctor/DoctorLogIn';
import DoctorDashboard from './components/dashboards/doctor/DoctorDashboard';
import Patients from './components/dashboards/doctor/Patients';
import DoctorMessages from './components/dashboards/doctor/DoctorMessages';
import DoctorsProfile from './components/dashboards/doctor/DoctorsProfile';
import DoctorStatistics from './components/dashboards/doctor/DoctorStatistics';
import PatientDetails from './components/dashboards/doctor/PatientDetails';
import Profile from './components/dashboards/doctor/DoctorProfile';





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
        <Route path="/doctor/patients" element={<Patients />} />
        <Route path="/doctor/statistics" element={<DoctorStatistics />} />
        <Route path="/doctor/messages" element={<DoctorMessages />} />
        <Route path="/doctors/profile" element={<DoctorsProfile/>} />
        <Route path="/patient/bookappointment/:id" element={<PatientBookAppointment />} />
        <Route path="/doctor/patientdetails/:id" element={<PatientDetails />} />
        <Route path="/doctor/profile" element={<Profile/>} />
      </Routes>
    </div>
  );
}

export default App;