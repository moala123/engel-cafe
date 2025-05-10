import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Menu from './components/Menu';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import './styles/App.css';
import Gallery from './components/Gallery';

function App() {
  const [currentTheme, setCurrentTheme] = useState('light');

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true
    });
  }, []);

  const toggleTheme = () => {
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    setCurrentTheme(newTheme);
    document.body.setAttribute('data-theme', newTheme);
  };

  return (
    <div className="App" data-theme={currentTheme}>
      <Navbar theme={currentTheme} toggleTheme={toggleTheme} />
      <Hero />
      <About />
      <Menu />
      <Gallery/>
      <Contact />
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;