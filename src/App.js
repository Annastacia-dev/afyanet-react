import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './components/landingpage/LandingPage';
import PatientSignUp from './components/authforms/patient/PatientSignUp';
import PatientLogIn from './components/authforms/patient/PatientLogIn';


function App() {
  return (
   
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/patient-signup" element={<PatientSignUp />} />
        <Route path="/patient-login" element={<PatientLogIn />} />
      </Routes>
    </div>
  );
}

export default App;
