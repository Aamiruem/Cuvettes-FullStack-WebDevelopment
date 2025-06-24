import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import Hero from './Components/Hero';
import '../Home/HomeStyles.css';
import About from './Components/About';

const Home = () => {
    return (
        <>
            <h1>Galaxy</h1>
            <Navbar />
            <Hero />
            <About/>
        </>
    );
};

export default Home;
