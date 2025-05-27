import React, { useState } from 'react';
import {useSelector} from "react-redux";
import { useDispatch } from "react-redux";

const User = () => {
    const data = useSelector(state => state.user.user);
    console.log("User data from Redux store:", data);
    const dispatch = useDispatch();
    
    const [user, setUser] = useState({
        name: '',
        email: '',
        phone: '',
        username: '',
        password: '',
        confirmPassword: '',
        age: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted:", user);
    };

    return (
        <div className='user'>
            <h1>User</h1>

            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Enter your name"
                    name="name"
                    value={user.name}
                    onChange={handleChange}
                />
                <br /><br />

                <input
                    type="text"
                    placeholder="Enter your username"
                    name="username"
                    value={user.username}
                    onChange={handleChange}
                />
                <br /><br />

                <input
                    type="email"
                    placeholder="Enter your email"
                    name="email"
                    value={user.email}
                    onChange={handleChange}
                />
                <br /><br />

                <input
                    type="password"
                    placeholder="Enter your password"
                    name="password"
                    value={user.password}
                    onChange={handleChange}
                />
                <br /><br />

                <input
                    type="password"
                    placeholder="Confirm your password"
                    name="confirmPassword"
                    value={user.confirmPassword}
                    onChange={handleChange}
                />
                <br /><br />

                <input
                    type="tel"
                    placeholder="Enter your phone number"
                    name="phone"
                    value={user.phone}
                    onChange={handleChange}
                />
                <br /><br />

                <input
                    type="number"
                    placeholder="Enter your age"
                    name="age"
                    value={user.age}
                    onChange={handleChange}
                />
                <br /><br />

                <button onClick={handleSubmit} className='btn' type="submit">Submit</button>
            </form>
        </div>
    );
};

export default User;
