import React from 'react';
import Navbar from './components/Navbar';
import HomeSection from './components/HomeSection';
import AboutSection from './components/AboutSection';
import ExperienceSection from './components/ExperienceSection';
import ProjectsSection from './components/ProjectsSection';
import Certificates from './components/Certificates';
import ContactSection from './components/ContactSection';
import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <HomeSection />
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <Certificates />
      <ContactSection />
    </>
  );
}

export default App;
