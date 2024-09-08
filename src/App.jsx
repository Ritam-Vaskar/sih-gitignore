import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HeroSection from './sections/Hero/Hero'
import Hero2 from './sections/Hero2/Hero2'
import Review from './sections/Review/Review'
import Testimonial from './sections/Testimonials/Testimonials'
import Recomendation from './sections/Recomendation/Recomendation'

function App() {

  return (
    <>
      <HeroSection />
      <Hero2 />
      <Recomendation/>
      <Review/>
      <Testimonial/>
      
    </>
  )
}

export default App
