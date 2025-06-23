import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import Hero from './Components/Hero';
import '../Home/HomeStyles.css';

const Home = () => {
    return (
        <>
            <h1>Galaxy</h1>
            <Navbar />
            <Hero />
        </>
    );
};

export default Home;
