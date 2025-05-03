import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import 'antd/dist/reset.css'; // Or 'antd/dist/antd.css' for older versions
import Tstable from './components/table';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <Header />
      <main>
        <Hero/>
        <About/>
        <Skills/>
        <Projects/>
        <Tstable/>
        <Contact/>
      </main>
      <Footer/>
    </div>
  );
}

export default App;