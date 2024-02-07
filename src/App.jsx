import React from 'react';
import './App.css'
import Navbar from './Components/Navbar/navbar';
import Hero from './Components/Navbar/Hero/Hero';
import Skills from './Components/Navbar/Skills/Skills';
import WorkExperience from './Components/Navbar/WorkExperience/WorkExperience';
import ContactMe from './Components/Navbar/ContactMe/ContactMe'
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <>
    <Navbar />
   <div className='container'>
   <Hero />
   <Skills />
   <WorkExperience />
   <ContactMe />
   <Footer />
   </div>
    </>
  )
}

export default App