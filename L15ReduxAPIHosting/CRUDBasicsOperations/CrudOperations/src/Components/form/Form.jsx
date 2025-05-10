import React, { useState } from 'react';

const Form = () => {
    const [user, setUser] = useState({
        name: '',
        email: '',
        phone: ''
    });

    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(user);
        // Add your form submission logic here
    };

    return (
        <div className="form">
            <h1>Create Record</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Name"
                    name="name"
                    value={user.name}
                    onChange={handleChange}
                />
                <br /><br />
                <input
                    type="email"
                    placeholder="Email"
                    name="email"
                    value={user.email}
                    onChange={handleChange}
                />
                <br /><br />
                <input
                    type="text"
                    placeholder="Phone Number"
                    name="phone"
                    value={user.phone}
                    onChange={handleChange}
                />
                <br /><br />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Form;
