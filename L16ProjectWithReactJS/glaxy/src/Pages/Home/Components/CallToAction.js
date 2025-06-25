import React from 'react'
import { Link } from 'react-router-dom';

const CallToAction = () => {
    return (
        <div>
            <section className="call-to-actions">
                <h2 className="text-center mb-4">Hurry up Book your Tickets  !</h2>
                <Link to="/pricing"> Know More</Link>
            </section>
        </div>
    )
}

export default CallToAction
