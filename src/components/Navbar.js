import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { FaMoon, FaSun } from 'react-icons/fa';
import './Navbar.css';

const Navbar = ({ theme, toggleTheme }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <Link to="home" smooth={true} className="navbar-logo">
          Engel Cafe
        </Link>

        <div className="nav-right">
          <button className="theme-toggle" onClick={toggleTheme}>
            {theme === 'light' ? <FaMoon /> : <FaSun />}
          </button>

          <div className="menu-icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <span></span>
            <span></span>
            <span></span>
          </div>

          <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
            <li><Link to="home" smooth={true} onClick={() => setIsMenuOpen(false)}>Home</Link></li>
            <li><Link to="about" smooth={true} onClick={() => setIsMenuOpen(false)}>About</Link></li>
            <li><Link to="menu" smooth={true} onClick={() => setIsMenuOpen(false)}>Menu</Link></li>
            <li><Link to="gallery" smooth={true} onClick={() => setIsMenuOpen(false)}>Gallery</Link></li>
            <li><Link to="contact" smooth={true} onClick={() => setIsMenuOpen(false)}>Contact</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;