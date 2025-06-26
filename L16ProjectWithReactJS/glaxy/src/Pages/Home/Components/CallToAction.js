// import React from 'react'
// import { useState } from 'react';
// import { Link } from 'react-router-dom';
// import Modal from './Modal';
// // import './App.css';

// const CallToAction = () => {
//     const [modal, setModal] = useState(false);

//     const handleClick = () => {
//         setModal(!modal);
//     }

//     return (
//         <>
//             <section className="call-to-action">
//                 <h2>Hurry up Book your Tickets  !</h2>
//                 <button className="btn btn-primary" onClick={handleClick}>
//                     Know More
//                 </button>
//             </section>

//             {modal && <Modal modal={modal} handleClick={handleClick} />}
//         </>
//     )
// }

// export default CallToAction








import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Modal from './Modal';
import PropTypes from 'prop-types';

const CallToAction = ({ ctaText = "Hurry up Book your Tickets!", buttonText = "Know More" }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleModal = () => {
        setIsModalOpen(prev => !prev);
    }

    return (
        <section className="call-to-action bg-gray-100 p-8 text-center rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">{ctaText}</h2>
            <button 
                className="btn btn-primary bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-md transition-colors duration-300"
                onClick={toggleModal}
                aria-expanded={isModalOpen}
                aria-haspopup="dialog"
            >
                {buttonText}
            </button>

            <Modal 
                isOpen={isModalOpen} 
                onClose={toggleModal}
            >
                <div className="p-4">
                    <h3 className="text-lg font-semibold mb-3">Ticket Information</h3>
                    <p className="mb-4">Here are more details about ticket booking options.</p>
                    <Link 
                        to="/booking" 
                        className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
                        onClick={toggleModal}
                    >
                        Go to Booking Page
                    </Link>
                </div>
            </Modal>
        </section>
    )
}

CallToAction.propTypes = {
    ctaText: PropTypes.string,
    buttonText: PropTypes.string
};

export default CallToAction;
