import React, { useState } from 'react';
import './Form.css';

const Form = () => {
    const [user, setUser] = useState({
        name: '',
        email: '',
        phone: '',
        password: ''
    });

    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(false);

    const validateForm = () => {
        const newErrors = {};
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const phoneRegex = /^[0-9]{10,15}$/;

        if (!user.name.trim()) newErrors.name = 'Name is required';
        if (!emailRegex.test(user.email)) newErrors.email = 'Invalid email address';
        if (!phoneRegex.test(user.phone)) newErrors.phone = 'Invalid phone number';
        if (user.password.length < 6) newErrors.password = 'Password must be at least 6 characters';

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser(prev => ({
            ...prev,
            [name]: value
        }));
        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ''
            }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (!validateForm()) return;
        
        setIsSubmitting(true);
        
        try {
            // Use the correct API endpoint - replace with your actual endpoint
            const response = await fetch('http://localhost:3001/api/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(user)
            });
            
            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || 'Submission failed');
            }
            
            setSubmitSuccess(true);
            setUser({ name: '', email: '', phone: '', password: '' });
            setTimeout(() => setSubmitSuccess(false), 3000);
        } catch (error) {
            console.error('Error:', error);
            setErrors(prev => ({
                ...prev,
                submit: error.message || 'Failed to submit form. Please try again.'
            }));
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="form-container">
            <h1>User Registration</h1>
            {submitSuccess && (
                <div className="success-message">
                    Form submitted successfully!
                </div>
            )}
            {errors.submit && (
                <div className="error-message">
                    {errors.submit}
                </div>
            )}
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={user.name}
                        onChange={handleChange}
                        className={errors.name ? 'error' : ''}
                        autoComplete="name"
                    />
                    {errors.name && <span className="error-text">{errors.name}</span>}
                </div>
                
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={user.email}
                        onChange={handleChange}
                        className={errors.email ? 'error' : ''}
                        autoComplete="email"
                    />
                    {errors.email && <span className="error-text">{errors.email}</span>}
                </div>

                <div className="form-group">
                    <label htmlFor="phone">Phone:</label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={user.phone}
                        onChange={handleChange}
                        className={errors.phone ? 'error' : ''}
                        autoComplete="tel"
                    />
                    {errors.phone && <span className="error-text">{errors.phone}</span>}
                </div> 
                
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={user.password}
                        onChange={handleChange}
                        className={errors.password ? 'error' : ''}
                        autoComplete="current-password"
                    />
                    {errors.password && <span className="error-text">{errors.password}</span>}
                </div>
                
                <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="submit-button"
                >
                    {isSubmitting ? 'Submitting...' : 'Submit'}
                </button>
            </form>
        </div>
    );
};

export default Form;
