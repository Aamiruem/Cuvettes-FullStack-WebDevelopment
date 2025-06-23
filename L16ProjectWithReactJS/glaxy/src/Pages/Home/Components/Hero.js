import React from 'react';
import video from '../../../assets/space.mp4';


const Hero = () => {
  return (
    <div>
      <h1>Hero</h1>
      <video src={video} autoPlay muted loop width="100%"  height="100%"/>
    </div>
  );
};

export default Hero;
