import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { FaTimes, FaBars } from 'react-icons/fa';

const Navbar = () => {
    const [click, setClick] = useState(false);

    const handleClick = () => {
        setClick(!click);
    };

    return (
        <nav className="navbar">
            <div className="logo">
                {/* <h1>Galaxy</h1> */}
            </div>

            <div className={click ? 'menu active' : 'menu'}>
                <Link to="/" onClick={() => setClick(false)}>Home</Link>
                <Link to="/pricing" onClick={() => setClick(false)}>Pricing</Link>
                <Link to="/training" onClick={() => setClick(false)}>Training</Link>
                <Link to="/contact" onClick={() => setClick(false)}>Contact</Link>
            </div>

            <div className="hamburger" onClick={handleClick}>
                {click ? (
                    <FaTimes style={{ color: 'white' }} size={25} />
                ) : (
                    <FaBars style={{ color: 'white' }} size={25} />
                )}
            </div>
        </nav>
    );
};

export default Navbar;
