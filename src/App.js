import './App.css';
import React ,{useState,useEffect}from 'react';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './components/landingpage/LandingPage';
import PatientSignUp from './components/authforms/patient/PatientSignUp';
import PatientLogIn from './components/authforms/patient/PatientLogIn';
import PatientDashboard from './components/dashboards/patient/PatientDashboard';
import PatientAppointments from './components/dashboards/patient/PatientAppointments';
import PatientMedicalRecords from './components/dashboards/patient/PatientMedicalRecords';
import PatientMessages from './components/dashboards/patient/PatientMessages';
import PatientProfile from './components/dashboards/patient/PatientProfile';
import PatientDashboard from './components/dashboards/PatientDashboard';
import DoctorSideBar from './components/dashboards/doctor/DoctorSideBar';
import DoctorSignUp from './components/authforms/doctor/DoctorSignUp';
import DoctorLogIn from './components/authforms/doctor/DoctorLogIn';
import DoctorAuthenticate from './components/authforms/doctor/DoctorAuthenticate';
import SideBar from './components/dashboards/doctor/SideBar';


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
        <Route path="/doctor/authenticate" element={<DoctorAuthenticate setDoctor={setDoctor} />} />
        <Route path="/patient/signup" element={<PatientSignUp/>} />
        <Route path="/patient/login" element={<PatientLogIn/>} />
        <Route path="/patient/dashboard" element={<PatientDashboard />} />
<<<<<<< HEAD
        <Route path="/patient/appointments" element={<PatientAppointments />} />
        <Route path="/patient/medicalrecords" element={<PatientMedicalRecords />} />
        <Route path="/patient/messages" element={<PatientMessages />} />
        <Route path="/patient/profile" element={<PatientProfile />} />
=======
        <Route path="/doctor/sidebar" element={<DoctorSideBar />} />

>>>>>>> dc7d35753c171483db38250704888a3df1d616a7
      </Routes>
    </div>
  );
}

export default App;