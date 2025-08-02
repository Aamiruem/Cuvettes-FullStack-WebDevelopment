import React from 'react';
import { Link } from 'react-router-dom';
import './NavbarStyle.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <Link to="/">
                    <h1>Workout Body</h1></Link>
            </div>

            <div className="menu">
                <Link to="/signup" className="nav-link">Sign Up</Link>
                <Link to="/login" className="nav-link">Login</Link>
            </div>
        </nav>
    );
};

export default Navbar;
