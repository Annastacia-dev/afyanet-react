import React from "react";
import '../css/HomePage.css'
// import { doc } from '../data/homepage'
import doctor from '../assets/images/landing-page/doctor.jpg'

function HomePage() {

    return (
        <div className="homepage container">
            <div>
            <h3 class="text-start">Connecting patients and providers<br></br>
            for better healthcare.</h3>
            <p class="text-start">
                Welcome to Afyanet, a platform for connecting patients<br></br>
                with healthcare providers.Find and connect with the <br></br>
                right healthcare provider, so you can get the care you need<br></br> 
                when you need it.<br></br>
                <br></br>
                <button >Get Started</button>
            </p>
            </div>
            <img id="doctor" src={doctor.image} alt= "doc1"></img>
        
        </div>

    )
}

export default HomePage;