import React from 'react';
import { Link } from 'react-router-dom';
import './NavbarStyle.css';
import {useLogout}  from '../../Hooks/useLogout';

const Navbar = () => {
    const { logout } = useLogout();

    const handleLogout = () => {
        logout();
    };


    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <Link to="/">
                    <h1>Workout Body</h1></Link>
            </div>

            <div className="logout">
                <button onClick={handleLogout}>Logout</button>
            </div>
                <div />

            <div className="menu">
                <Link to="/signup" className="nav-link">Sign Up</Link>
                <Link to="/login" className="nav-link">Login</Link>
            </div>
        </nav>
    );
};

export default Navbar;
