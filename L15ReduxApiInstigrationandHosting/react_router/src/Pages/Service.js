// import React from 'react'
// import { Link } from 'react-router-dom'

// const Service = () => {
//     return (
//         <>
//             <h1>Our Services</h1>
//             <Link to="/">Back to Home</Link>
//         </>
//     )
// }

// export default Service








import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css'; // Assuming you'll create a corresponding CSS file

const Service = () => {
    const services = [
        {
            id: 1,
            title: 'Web Development',
            description: 'Custom website development tailored to your business needs.',
            icon: '💻'
        },
        {
            id: 2,
            title: 'Mobile App Development',
            description: 'Build native or cross-platform mobile applications for iOS and Android.',
            icon: '📱'
        },
        {
            id: 3,
            title: 'UI/UX Design',
            description: 'Beautiful and intuitive interfaces that enhance user experience.',
            icon: '🎨'
        },
        {
            id: 4,
            title: 'Data Science',
            description: 'Boost your online presence with our strategic marketing solutions.',
            icon: '📈'
        }
    ];

    return (
        <div className="service-page">
            <header className="service-header">
                <h1>Our Services</h1>
                <p className="service-subtitle">We provide comprehensive solutions to help your business grow</p>
            </header>
            
            <div className="services-grid">
                {services.map(service => (
                    <div key={service.id} className="service-card">
                        <div className="service-icon">{service.icon}</div>
                        <h3>{service.title}</h3>
                        <p>{service.description}</p>
                        <Link to={`/services/${service.id}`} className="learn-more-btn">
                            Learn More →
                        </Link>
                    </div>
                ))}
            </div>
            
            <div className="service-cta">
                <h2>Ready to get started?</h2>
                <p>Contact us today to discuss how we can help with your project</p>
                <Link to="/contact" className="cta-button">Get in Touch</Link>
            </div>
            
            <div className="navigation-links">
                <Link to="/" className="home-link">← Back to Home</Link>
                <Link to="/about" className="about-link">Learn About Us →</Link>
            </div>
        </div>
    );
};

export default Service;
