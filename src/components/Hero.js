import React from 'react';
import { Link } from 'react-scroll';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-content" data-aos="fade-up">
        <h1>Engel Cafe</h1>
        <p>A Taste from Heaven</p>
        <Link
          to="menu"
          smooth={true}
          duration={500}
          className="btn"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Order Now
        </Link>
      </div>
    </section>
  );
};

export default Hero;