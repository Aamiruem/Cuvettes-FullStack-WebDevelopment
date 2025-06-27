// import React from 'react'
// import { Link } from 'react-router-dom'
// import './Footer.css'
// // import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';
// import facebook from '../../assets/facebook.png'
// import instagram from '../../assets/instagram.png'
// import twitter from '../../assets/twitter.png'
// import youtube from '../../assets/youtube.png'

// const social = [facebook, instagram, twitter, youtube];

// const Footer = () => {

//     return (
//         <footer>
//             <h1>GLX TRVL</h1>
//             <div className="links">
//                 <Link to="/">Home</Link>
//                 <Link to="/training">Training</Link>
//                 <Link to="/pricing">Pricing</Link>
//                 <Link to="/contact">Contact</Link>

//             </div>

//             <div className="social">

//                 {social.map((item, idx) => (
//                     <img key={idx} src={item} alt='' />
//                 ))}
//             </div>
//         </footer>
//     );
// }


// export default Footer










import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const social = [
    { icon: require('../../assets/facebook.png'), alt: 'Facebook', url: '#' },
    { icon: require('../../assets/instagram.png'), alt: 'Instagram', url: '#' },
    { icon: require('../../assets/twitter.png'), alt: 'Twitter', url: '#' },
    { icon: require('../../assets/youtube.png'), alt: 'YouTube', url: '#' }
];

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-brand">
                    <h1 className="footer-logo">GLX TRVL</h1>
                    <p className="footer-slogan">Your journey begins with us</p>
                </div>

                <div className="footer-links">
                    <h3 className="footer-links-title">Quick Links</h3>
                    <Link to="/" className="footer-link">Home</Link>
                    <Link to="/training" className="footer-link">Training</Link>
                    <Link to="/pricing" className="footer-link">Pricing</Link>
                    <Link to="/contact" className="footer-link">Contact</Link>
                </div>

                <div className="footer-social">
                    <h3 className="footer-social-title">Follow Us</h3>
                    <div className="social-icons">
                        {social.map((item, idx) => (
                            <a key={idx} href={item.url} target="_blank" rel="noopener noreferrer">
                                <img src={item.icon} alt={item.alt} className="social-icon" />
                            </a>
                        ))}
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} GLX TRVL. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
