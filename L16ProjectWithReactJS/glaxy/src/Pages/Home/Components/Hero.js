import React from 'react';
import { Link } from 'react-router-dom';
import video from '../../../assets/space.mp4';

const Hero = () => {
  return (
    <div className="hero">
      <video src={video} autoPlay muted loop />

      <div className="content">
        <h1>Travel Galaxies</h1>
        <p>Welcome to the galaxy</p>

        <div className="buttons">
          <Link to="/training">Try Now!</Link>
          <Link to="/contact">Launch!</Link>
          <Link to="/pricing">Check!</Link>
        </div>

        <button className="btn">Explore</button>
      </div>
    </div>
  );
};

export default Hero;
