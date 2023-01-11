import './App.css';
import React from 'react';
// import  {useState, useEffect} from 'react';
import './index.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import SocialMedia from './components/SocialMedia';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';



function App() {
  return (
    <div className='select-none'>
      <NavBar /> 
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <SocialMedia />
    </div>
  );
}

export default App;
