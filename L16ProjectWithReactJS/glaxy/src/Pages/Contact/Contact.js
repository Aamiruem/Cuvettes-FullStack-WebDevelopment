import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Header from '../../Components/Header/Header'
import Form from './Component/Form'
import Footer from '../../Components/Footer/Footer'

import './ContactStyle.css'

const Contact = ({heading}) => {
    return (
        <>
        <h1>{heading}</h1>
        <Navbar />
            <Header heading="Contact Page" />
            <Form />
        <Footer/> 
        </>
    )
}

export default Contact
