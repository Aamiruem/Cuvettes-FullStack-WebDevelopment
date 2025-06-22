import React from 'react'
import { Link } from "react-router-dom";
import "./Navbar.css";
import { FaTimes, FaBars } from 'react-icons/fa';

// import { FaHome } from 'react-icons/fa'; // for example

const Navbar = () => {

const [click, setClick] = React.useState(false);


const handleClick = () => {
    setClick(!click);
}

    return (
        <nav>
            <div className="logo">
                {/* <h1>Galaxy</h1> */}
            </div>

            <div className="menu">
                <Link to="/">Home</Link>
                <Link to="/pricing">Pricing</Link>
                <Link to="/training">Training</Link>
                <Link to="/contact">Contact</Link>
            </div>
            <div className="hamburger" onClick={handleClick}>
                {/* <FaHome /> */}
                {/* <FaTimes /> */}
                <FaBars style={{ color: "white" }} size={25} />
            </div>

        </nav>
    )
}

export default Navbar
