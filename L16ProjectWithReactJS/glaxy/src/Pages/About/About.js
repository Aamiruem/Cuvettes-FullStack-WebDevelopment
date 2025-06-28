import React from 'react';
import { Link } from 'react-router-dom';
import './About.css';
import 

// Team member data
const teamMembers = [
    {
        id: 1,
        name: 'Aamir Hussain Azad',
        role: 'Founder & CEO',
        bio: 'Travel enthusiast with 15+ years of industry experience',
        image: require('../../assets/team1.jpg')
    },
    {
        id: 2,
        name: 'Kamran Hussain Azad',
        role: 'Travel Expert',
        bio: 'Specializes in Asian destinations and adventure travel',
        image: require('../../assets/team2.jpg')
    },
    {
        id: 3,
        name: 'Emma Rodriguez',
        role: 'Customer Experience',
        bio: 'Dedicated to making your journey seamless and memorable',
        image: require('../../assets/team3.jpg')
    }
];

// Stats data
const stats = [
    { number: '10,000+', label: 'Happy Travelers' },
    { number: '500+', label: 'Destinations' },
    { number: '15', label: 'Years Experience' },
    { number: '24/7', label: 'Support' }
];

const About = () => {
    return (
        <div className="about-page">
            {/* Hero Section */}
            <section className="about-hero">
                <div className="hero-content">
                    <h1>Our Story</h1>
                    <p>Discover the passion behind GLX TRVL and our commitment to exceptional travel experiences</p>
                </div>
            </section>

            {/* Mission Section */}
            <section className="mission-section">
                <div className="container">
                    <div className="mission-content">
                        <h2>Our Mission</h2>
                        <p>
                            At GLX TRVL, we believe travel has the power to change lives. Our mission is to create
                            unforgettable journeys that inspire, connect, and transform our clients. We combine
                            local expertise with global knowledge to craft personalized travel experiences that
                            go beyond the ordinary.
                        </p>
                    </div>
                    <div className="mission-image">
                        <img src={require('../../assets/mission-image.jpg')} alt="Travel experience" />
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="stats-section">
                <div className="container">
                    {stats.map((stat, index) => (
                        <div key={index} className="stat-item">
                            <h3>{stat.number}</h3>
                            <p>{stat.label}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Team Section */}
            <section className="team-section">
                <div className="container">
                    <h2>Meet Our Team</h2>
                    <p className="team-subtitle">The passionate people behind your perfect journey</p>
                    <div className="team-grid">
                        {teamMembers.map(member => (
                            <div key={member.id} className="team-card">
                                <img src={member.image} alt={member.name} />
                                <h3>{member.name}</h3>
                                <p className="role">{member.role}</p>
                                <p className="bio">{member.bio}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="about-cta">
                <div className="container">
                    <h2>Ready for Your Next Adventure?</h2>
                    <p>Let us help you plan the trip of a lifetime</p>
                    <div className="cta-buttons">
                        <Link to="/contact" className="cta-button primary">Contact Us</Link>
                        <Link to="/pricing" className="cta-button secondary">View Packages</Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
