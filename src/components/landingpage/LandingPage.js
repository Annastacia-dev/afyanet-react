import React from 'react'
import HomePage from './homepage/HomePage'
import NavBar from './navbar/NavBar'
import About from './about/About'
import Partners from './partners/OurPartners'
import Footer from './footer/Footer'

function LandingPage() {
  return (
    <div>
        <NavBar />
        <HomePage />
        <About />
        <Partners />
        <Footer />
    </div>
  )
}

export default LandingPage

