import './App.css';
import OurPartners from './components/OurPartners';
import NavBar from './components/navbar/NavBar';
import HomePage from './components/homepage/HomePage';
import Footer from './components/Footer';


function App() {
  return (
   
    <div className="App">
      {/* <NavBar/>
      <HomePage/> */}
      <OurPartners />
      <Footer />
    </div>
  );
}

export default App;
