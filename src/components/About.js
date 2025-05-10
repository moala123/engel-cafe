import React from 'react';
import './About.css';

const About = () => {
  return (
    <section className="about section" id="about">
      <div className="container">
        <div className="section-title" data-aos="fade-up">
          <h2>About Us</h2>
          <p>Our Story</p>
        </div>
        
        <div className="about-content">
          <div className="about-image" data-aos="fade-right">
            <img src="images/gallery/Engel Cafe Interiorv.png" alt="Engel Cafe Interior" />
          </div>
          
          <div className="about-text" data-aos="fade-left">
            <h3>Welcome to Engel Cafe</h3>
            <p>Established in 2020, Engel Cafe has become a haven for coffee enthusiasts seeking the perfect blend of quality and ambiance. Our commitment to excellence is reflected in every cup we serve.</p>
            <p>What sets us apart is our dedication to sourcing the finest coffee beans, our skilled baristas, and our peaceful atmosphere that makes every visit memorable.</p>
            <ul className="features">
              <li>Premium Coffee Selection</li>
              <li>Peaceful Atmosphere</li>
              <li>Expert Baristas</li>
              <li>Artisanal Pastries</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;