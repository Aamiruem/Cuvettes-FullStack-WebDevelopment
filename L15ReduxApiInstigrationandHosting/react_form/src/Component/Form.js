import React, { useState } from 'react';
import './Form.css';

const Form = () => {
    const [user, setUser] = useState({
        name: '',
        email: '',
        phone: '',
        password: ''
    });

    const handleChange = (e) => {
        // console.log(e.target.name, e.target.value);
        const { name, value } = e.target;
        setUser({
            ...user,
            [name]: value
        });
        // console.log(user);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('User Data:', user);
        // Add code here to send data to server if needed

    };

    return (
        <div>
            <h1>User Data</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={user.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={user.email}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div>
                    <label htmlFor="phone">Phone:</label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={user.phone}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={user.password}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button  type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Form;
