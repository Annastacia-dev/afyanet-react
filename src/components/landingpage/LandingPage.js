import React from 'react'
import HomePage from './homepage/HomePage'
import NavBar from './navbar/NavBar'
import About from './about/About'
import Partners from './partners/OurPartners'
import Footer from './footer/Footer'
import Services from './ourservices/Services'

function LandingPage() {
  return (
    <div>
        <NavBar />
        <HomePage />
        <About />
        <Services/>
        <Partners />
        <Footer />
    </div>
  )
}

export default LandingPage

