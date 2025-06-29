import React from 'react';

const About = ({ heading }) => {
    return (
        <section className="about p-4">
            <h2 className="text-center mb-4">{heading}</h2>

            <figure className="text-center">
                <img
                    src="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60"
                    className="img-thumbnail rounded-top"
                    alt="Team working together"
                />
            </figure>

            <div className="content mt-4">
                <h3>Who We Are</h3>
                <p>
                    We are a team of passionate individuals dedicated to providing the best services in the industry.
                    Our mission is to deliver quality and excellence in everything we do.
                </p>
            </div>
        </section>
    );
};

export default About;
