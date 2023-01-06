import './App.css';
import React from 'react';
import OurPartners from './components/OurPartners';
import NavBar from './components/NavBar';
import HomePage from './components/HomePage';
import Footer from './components/Footer';


function App() {
  return (
   
    <div className="App">
      <NavBar/>
      <HomePage/>
      <OurPartners />
      <Footer />
    </div>
  );
}

export default App;
