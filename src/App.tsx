import React from 'react';
import './App.css';
import Navbar from './components/navbar';
import Header from './components/header'
import AboutMe from './components/aboutme'
import Skills from './components/skills'

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <AboutMe />
      <Skills />
    </>
  );
}

export default App;
