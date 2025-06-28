import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const social = [
    { icon: require('../../assets/facebook.png'), alt: 'Facebook', url: '#' },
    { icon: require('../../assets/instagram.png'), alt: 'Instagram', url: '#' },
    { icon: require('../../assets/twitter.png'), alt: 'Twitter', url: '#' },
    { icon: require('../../assets/youtube.png'), alt: 'YouTube', url: '#' },
    // { icon: require('../../assets/linkedin.png'), alt: 'LinkedIn', url: '#' }
];

const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Training', path: '/training' },
    { name: 'Contact', path: '/contact' },
    { name: 'About Us', path: '/about' }
];

const contactInfo = [
    { icon: '✉️', text: 'info@glxtrvl.com' },
    { icon: '📞', text: '+1 (555) 123-4567' },
    { icon: '🏢', text: '123 Travel St, Adventure City' }
];

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-top">
                <div className="footer-container">
                    <div className="footer-brand">
                        <h1 className="footer-logo">GLX TRVL</h1>
                        <p className="footer-slogan">Your journey begins with us</p>
                        <p className="footer-description">
                            We provide the best travel experiences around the globe. 
                            Let us take you to your dream destinations.
                        </p>
                    </div>

                    <div className="footer-links">
                        <h3 className="footer-title">Quick Links</h3>
                        <ul className="footer-links-list">
                            {quickLinks.map((link, idx) => (
                                <li key={idx}>
                                    <Link to={link.path} className="footer-link">{link.name}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="footer-contact">
                        <h3 className="footer-title">Contact Us</h3>
                        <ul className="contact-info">
                            {contactInfo.map((item, idx) => (
                                <li key={idx} className="contact-item">
                                    <span className="contact-icon">{item.icon}</span>
                                    <span>{item.text}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="footer-newsletter">
                        <h3 className="footer-title">Newsletter</h3>
                        <p>Subscribe for travel tips and exclusive offers</p>
                        <form className="newsletter-form">
                            <input type="email" placeholder="Your email" required />
                            <button type="submit">Subscribe</button>
                        </form>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <div className="footer-container">
                    <div className="footer-social">
                        <div className="social-icons">
                            {social.map((item, idx) => (
                                <a 
                                    key={idx} 
                                    href={item.url} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    aria-label={item.alt}
                                >
                                    <img src={item.icon} alt={item.alt} className="social-icon" />
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className="footer-legal">
                        <p>&copy; {new Date().getFullYear()} GLX TRVL. All rights reserved.</p>
                        <div className="legal-links">
                            <Link to="/privacy">Privacy Policy</Link>
                            <Link to="/terms">Terms of Service</Link>
                            <Link to="/cookies">Cookies</Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
