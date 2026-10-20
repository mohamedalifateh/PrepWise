import React from 'react'
import './LandingPage.css'
import CardCTA from '../../components/CardCTA/CardCTA'
import Testimonial from '../../components/Testimonial/Testimonial'
import Footer from '../../components/Footer/Footer'

const LandingPage = () => {
  return (
    <>
    <div className='home'>
        <CardCTA />
        <Testimonial/>
        
    </div>
    <div className='footer-section'>
        <Footer/>
    </div>

    </>
  )
}

export default LandingPage