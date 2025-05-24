// import React from 'react'
// import { Link } from 'react-router-dom'

// const Contact = () => {
//     return (
//         <>
//             <h1>Contact Us</h1>
//             <Link to="/contact">Back to Home</Link>
//         </>
//     )
// }

// export default Contact








import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft, FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaPaperPlane } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });

    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you would typically send the data to your backend
        console.log('Form submitted:', formData);
        setSubmitted(true);
        setFormData({
            name: '',
            email: '',
            phone: '',
            subject: '',
            message: ''
        });
        setTimeout(() => setSubmitted(false), 5000);
    };

    return (
        <div className="contact-container">
            <div className="contact-header">
                <Link to="/" className="back-button">
                    <FaArrowLeft /> Back to Home
                </Link>
                <h1>Contact Us</h1>
                <p className="subtitle">We'd love to hear from you</p>
            </div>

            <div className="contact-content">
                <div className="contact-info">
                    <div className="info-card">
                        <FaPhone className="info-icon" />
                        <h3>Phone</h3>
                        <p>+1 (123) 456-7890</p>
                        <p>+1 (987) 654-3210</p>
                    </div>

                    <div className="info-card">
                        <FaEnvelope className="info-icon" />
                        <h3>Email</h3>
                        <p>info@yourcompany.com</p>
                        <p>support@yourcompany.com</p>
                    </div>

                    <div className="info-card">
                        <FaMapMarkerAlt className="info-icon" />
                        <h3>Address</h3>
                        <p>123 Business Avenue</p>
                        <p>New York, NY 10001</p>
                    </div>

                    <div className="info-card">
                        <FaClock className="info-icon" />
                        <h3>Business Hours</h3>
                        <p>Monday - Friday: 9am - 6pm</p>
                        <p>Saturday: 10am - 4pm</p>
                        <p>Sunday: Closed</p>
                    </div>
                </div>

                <div className="contact-form-container">
                    <h2>Send Us a Message</h2>
                    {submitted ? (
                        <div className="success-message">
                            <h3>Thank you for contacting us!</h3>
                            <p>We'll get back to you within 24 hours.</p>
                        </div>
                    ) : (
                        <form className="contact-form" onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="name">Full Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="email">Email Address</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="phone">Phone Number</label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="subject">Subject</label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="message">Your Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="5"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                ></textarea>
                            </div>

                            <button type="submit" className="submit-button">
                                <FaPaperPlane /> Send Message
                            </button>
                        </form>
                    )}
                </div>
            </div>

            <div className="contact-map">
                <iframe
                    title="Company Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.215573291865!2d-73.9878449241648!3d40.74844097138992!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1681234567890!5m2!1sen!2sus"
                    width="100%"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
        </div>
    );
};

export default Contact;
