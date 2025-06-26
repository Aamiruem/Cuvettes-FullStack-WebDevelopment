import React from 'react';
import '../Home/Services.css';
import Navbar from '../../Components/Navbar/Navbar';
import Hero from './Components/Hero';
import '../Home/HomeStyles.css';
import About from './Components/About';
import Services from './Components/Services';
import Modal from './Components/Modal';
import CallToAction from './Components/CallToAction';
import Faq from './Faq';
// import Footer from './Components/Footer'; 

const Home = () => {
    return (
        <>
            <h1>Galaxy</h1>
            <Navbar />
            <Hero />
            <About />
            <Services />
            <Modal />
            <CallToAction />
            <Faq />
            {/* <Footer /> */}
        </>
    );
};

export default Home;
