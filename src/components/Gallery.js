import React from 'react';
import './Gallery.css';

function Gallery() {
  return (
    <section className="gallery" id="gallery">
      <div className="gallery-container">
        <h2 className="section-title">Our Gallery</h2>
        <div className="gallery-grid">
          {[
            {
              id: 1,
              src:  'images/gallery/cafe-interior.png',
              alt: 'Cafe Interior',
              category: 'Interior'
            },
            {
              id: 2,
              src: 'images/gallery/coffee-art.png',
              alt: 'Coffee Art',
              category: 'Coffee'
            },
            {
              id: 3,
              src: 'images/gallery/desserts.png',
              alt: 'Desserts',
              category: 'Food'
            },
            {
              id: 4,
              src: 'images/gallery/coffee-making.png',
              alt: 'Coffee Making',
              category: 'Process'
            },
            {
              id: 5,
              src: 'images/gallery/cafe-atmosphere.png',
              alt: 'Cafe Atmosphere',
              category: 'Atmosphere'
            },
            {
              id: 6,
              src: 'images/gallery/coffee-beans.png',
              alt: 'Coffee Beans',
              category: 'Ingredients'
            }
          ].map((image) => (
            <div key={image.id} className="gallery-item">
              <img src={image.src} alt={image.alt} />
              <div className="gallery-overlay">
                <h3>{image.alt}</h3>
                <p>{image.category}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Gallery;