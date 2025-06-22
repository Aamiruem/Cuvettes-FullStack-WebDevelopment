import React from 'react'
import { Link } from "react-router-dom";
import "./Navbar.css";
const Navbar = () => {
    return (
        <nav>
            <div className="logo">
                <h1>Galaxy</h1>
            </div>

            <div className="menu">
                <Link to="/">Home</Link>
                <Link to="/pricing">Pricing</Link>
                <Link to="/training">Training</Link>
                <Link to="/contact">Contact</Link>
            </div>
        </nav>
    )
}

export default Navbar
