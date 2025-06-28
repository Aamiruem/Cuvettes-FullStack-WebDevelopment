import React from 'react'
import "./Header.css"

import Navbar from '../Navbar/Navbar'

const Header = ({ heading }) => {
    return (
        <section className="header" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80')",  backgroundSize: "cover", backgroundPosition: "fixed"}}>
            <h1>{heading}</h1>

            <p> Get the best deals on your favorite products
            </p>
        </section>
    )
}

export default Header
