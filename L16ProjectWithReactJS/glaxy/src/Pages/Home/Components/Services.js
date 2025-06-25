import React, { useState } from 'react';
// import './Services.css';

const images = [
  'https://images.unsplash.com/photo-1504384308090-c894fdcc538d',
  'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0',
  'https://images.unsplash.com/photo-1504384308090-c894fdcc538d',
  'https://images.unsplash.com/photo-1570129477492-45c003edd2be',
  'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0',
  'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1608373990565-57efc7ce5231?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?auto=format&fit=crop&w=800&q=80'
];



const Services = () => {
  const [startIndex, setStartIndex] = useState(0);

  const handlePrev = () => {
    setStartIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setStartIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="services-container">
      <h2 className="services-title">Services</h2>
      <div className="carousel">
        <button className="nav left" onClick={handlePrev}>&#8249;</button>
        <div className="image-wrapper">
          {images.slice(startIndex, startIndex + 4).map((src, index) => (
            <img key={index} src={src} alt={`Slide ${index}`} className="carousel-image" />
          ))}
        </div>
        <button className="nav right" onClick={handleNext}>&#8250;</button>
      </div>
    </div>
  );
};

export default Services;
