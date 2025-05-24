// import React from 'react';
// import './Pages.css';
// import { Link } from 'react-router-dom';

// const Home = () => {
//     return (
//         <>
//             <div className="page">
//                 <h1>Welcome to Our Website</h1>
//                 <p>This is the home page content. Replace with your actual content.</p>
//             </div>
//             <h2>Navigation Links</h2>
//             <Link to="/">Home</Link>
//             <br />
//             <br />
//             <Link to="/about">About Us</Link>
//             <br />
//             <br />
//             <Link to="/services">Our Services</Link>
//             <br />
//             <br />
//             <Link to="/contact">Contact Us</Link>

            
//         </>
//     );
// }

// export default Home;






import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import { FaHome, FaInfoCircle, FaConciergeBell, FaEnvelope } from 'react-icons/fa';

const Home = () => {
    return (
        <div className="home-container">
            <div className="hero-section">
                <h1>Welcome to Our Platform</h1>
                <p className="hero-text">Discover amazing features and services tailored just for you</p>
                <button className="cta-button">Get Started</button>
            </div>

            <div className="content-section">
                <h2>Why Choose Us?</h2>
                <div className="features-grid">
                    <div className="feature-card">
                        <div className="feature-icon">🚀</div>
                        <h3>Fast Service</h3>
                        <p>Experience lightning-fast response times and efficient solutions.</p>
                    </div>
                    <div className="feature-card">
                        <div className="feature-icon">🛡️</div>
                        <h3>Reliable</h3>
                        <p>Trusted by thousands of users with proven track record.</p>
                    </div>
                    <div className="feature-card">
                        <div className="feature-icon">💡</div>
                        <h3>Innovative</h3>
                        <p>Cutting-edge technology for all your needs.</p>
                    </div>
                </div>
            </div>

            <div className="quick-nav-section">
                <h2>Quick Navigation</h2>
                <div className="nav-cards">
                    <Link to="/" className="nav-card">
                        <FaHome className="nav-icon" />
                        <span>Home</span>
                    </Link>
                    <Link to="/about" className="nav-card">
                        <FaInfoCircle className="nav-icon" />
                        <span>About Us</span>
                    </Link>
                    <Link to="/services" className="nav-card">
                        <FaConciergeBell className="nav-icon" />
                        <span>Our Services</span>
                    </Link>
                    <Link to="/contact" className="nav-card">
                        <FaEnvelope className="nav-icon" />
                        <span>Contact Us</span>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Home;
