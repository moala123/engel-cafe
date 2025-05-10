import React, { useState } from 'react';
import './Menu.css';

const menuCategories = [
  { id: 'hot', name: 'Hot Drinks' },
  { id: 'cold', name: 'Cold Drinks' },
  { id: 'desserts', name: 'Desserts' }
];

const menuItems = {
  hot: [
    { name: 'Espresso', price: '$3.50', image: '/images/gallery/espresso.png' },
    { name: 'Cappuccino', price: '$4.50', image: 'images/gallery/capotchino.png' },
    { name: 'Latte', price: '$4.00', image: 'images/gallery/late.png' }
  ],
  cold: [
    { name: 'Iced Americano', price: '$4.00', image: 'images/gallery/amerecano.png'},
    { name: 'Frappuccino', price: '$5.50', image: '/images/gallery/frappuccino.png'},
    { name: 'Cold Brew', price: '$4.50', image: 'images/gallery/Cold Brew.png'}
  ],
  desserts: [
    { name: 'Cheesecake', price: '$6.00', image: '/images/gallery/cheesecake.png' },
    { name: 'Chocolate Cake', price: '$5.50', image: 'images/gallery/Chocolate Cake.png' },
    { name: 'Croissant', price: '$3.50', image: '/images/gallery/croissant.png' }
  ]
};



const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('hot');

  return (
    <section className="menu section" id="menu">
      <div className="container">
        <div className="section-title" data-aos="fade-up">
          <h2>Our Menu</h2>
          <p>Discover Our Delicious Offerings</p>
        </div>

        <div className="menu-categories" data-aos="fade-up">
          {menuCategories.map(category => (
            <button
              key={category.id}
              className={`menu-category ${activeCategory === category.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.name}
            </button>
          ))}
        </div>

        <div className="menu-grid" data-aos="fade-up">
          {menuItems[activeCategory].map((item, index) => (
            <div className="menu-item" key={index} data-aos="fade-up" data-aos-delay={index * 100}>
              <div className="menu-item-image">
                <img src={item.image} alt={item.name} />
              </div>
              <div className="menu-item-info">
                <h3>{item.name}</h3>
                <p className="price">{item.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;