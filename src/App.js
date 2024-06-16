import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import About from './components/About'; // Assuming you have an About component
import Skills from './components/Skills'; // Assuming you have a Skills component
import Projects from './components/Projects'; // Assuming you have a Projects component
import Contact from './components/Contact'; // Assuming you have a Contact component
import Footer from './components/Footer'; // Assuming you have a Footer component

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
