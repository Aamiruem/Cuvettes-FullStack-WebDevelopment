// import React from 'react'
// import { Link } from 'react-router-dom'

// const About = () => {
//     return (
//         <>
//             <h1>About Us</h1>
//             <Link to="/">Back to Home</Link>
//         </>
//     )
// }

// export default About





import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft, FaUsers, FaLightbulb, FaChartLine } from 'react-icons/fa';
import './About.css';

const About = () => {
    return (
        <div className="about-container">
            <div className="about-header">
                <Link to="/" className="back-button">
                    <FaArrowLeft /> Back to Home
                </Link>
                <h1>About Our Company</h1>
                <p className="subtitle">Discover our story, values, and mission</p>
            </div>

            <div className="about-content">
                <section className="about-section">
                    <div className="about-text">
                        <h2>Our Story</h2>
                        <p>
                            Founded in 2015, we began as a small team with big dreams. Today, we've grown into 
                            a industry leader serving thousands of clients worldwide. Our journey has been marked 
                            by innovation, dedication, and a commitment to excellence.
                        </p>
                    </div>
                    <div className="about-image">
                        <div className="image-placeholder"></div>
                    </div>
                </section>

                <section className="values-section">
                    <h2>Our Core Values</h2>
                    <div className="values-grid">
                        <div className="value-card">
                            <FaUsers className="value-icon" />
                            <h3>People First</h3>
                            <p>We prioritize our team and customers above all else, fostering meaningful relationships.</p>
                        </div>
                        <div className="value-card">
                            <FaLightbulb className="value-icon" />
                            <h3>Innovation</h3>
                            <p>Continuous improvement drives us to develop cutting-edge solutions.</p>
                        </div>
                        <div className="value-card">
                            <FaChartLine className="value-icon" />
                            <h3>Growth</h3>
                            <p>We're committed to personal, professional, and organizational growth.</p>
                        </div>
                    </div>
                </section>

                <section className="team-section">
                    <h2>Meet Our Leadership</h2>
                    <div className="team-grid">
                        <div className="team-card">
                            <div className="team-photo">
                                <img src="./Pages/Aamir.jpg" alt="Kamran Hussain" />
                            </div>
                            <h3>Kamran Hussain</h3>
                            <p>CEO & Founder</p>
                        </div>
                        <div className="team-card">
                            <div className="team-photo"></div>
                            <h3>Michael Chen</h3>
                            <p>CTO</p>
                        </div>
                        <div className="team-card">
                            <div className="team-photo"></div>
                            <h3>David Wilson</h3>
                            <p>Head of Operations</p>
                        </div>
                    </div>
                </section>
            </div>

            <div className="call-to-action">
                <h2>Ready to work with us?</h2>
                <Link to="/contact" className="cta-button">Get in Touch</Link>
            </div>
        </div>
    );
}

export default About;
