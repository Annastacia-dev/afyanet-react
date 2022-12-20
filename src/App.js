import './App.css';
import OurPartners from './components/OurPartners';
import NavBar from './components/navbar/NavBar';
import HomePage from './components/homepage/HomePage';


function App() {
  return (
   
    <div className="App">
      <NavBar/>
      <HomePage/>
      <OurPartners />
    </div>
  );
}

export default App;
