import React from "react";
import "./HomePage.css"

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
            <img id="doctor" src="https://img.freepik.com/free-photo/woman-doctor-wearing-lab-coat-with-stethoscope-isolated_1303-29791.jpg?w=2000" alt= "doc1"></img>
            {/* <img  id ="doctor" src="./assets/images/landing-page/doctor.jpg" alt="doc"></img> */}
        
        </div>

    )
}

export default HomePage;