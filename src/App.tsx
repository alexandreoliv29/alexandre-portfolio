import React from 'react';
import './App.css';
import Navbar from './components/navbar';
import Header from './components/header'
import AboutMe from './components/aboutme'
import Skills from './components/skills'
import Projects from './components/Projects';

function App() {
  return (
    <>
      <div className='all'>
        <Navbar />
        <Header />
        <AboutMe />
        <Skills />
        <Projects />
      </div>
    </>
  );
}

export default App;
