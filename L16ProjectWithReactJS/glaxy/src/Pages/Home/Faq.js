import React from 'react'


const Faq = () => {

    const data = [
        {
            question: "What is the purpose of this FAQ section?",
            answer: "This section provides answers to common questions about our services and policies."
        },
        {
            question: "How can I contact customer support?",
            answer: "You can reach our customer support via email at [email address] or by phone at [phone number]."
        },
        {
            question: "What are your business hours?",
            answer: "Our customer support is available from 9 AM to 5 PM, Monday to Friday."
        },
        {
            question: "Do you offer refunds?",
            answer: "Yes, we offer refunds within 30 days of purchase, provided the product is in its original condition."
        },
        {
            question: "Where can I find your privacy policy?",
            answer: "Our privacy policy can be found at the bottom of our website or in the 'Privacy Policy' section."
        },
        {
            question: "Can I cancel my subscription?",
            answer: "Yes, you can cancel your subscription at any time by contacting our customer support."
        },
        {
            question: "What payment methods do you accept?",
            answer: "We accept a wide range of payment methods, including credit cards, debit cards, and PayPal."
        }
    ]



    return (
        <>
            <h1 className="heading">Frequently Asked Questions</h1>
            <section className="faq">
                <div className="faq-item">
                    <h3>Question 1</h3>
                    <p>Answer to question 1.</p>
                </div>
                <div className="faq-item">
                    <h3>Question 2</h3>
                    <p>Answer to question 2.</p>
                </div>
                <div className="faq-item">
                    <h3>Question 3</h3>
                    <p>Answer to question 3.</p>
                </div>




                {/* main part */}

                <div className="question">

                    <img src="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60" alt="" />
                </div>


                <div className="answer">
                    <p>This section provides answers to common questions about our services and policies.</p>
                </div>

                <div className="item">
                    {
                        data.map((item) => {
                            return (
                                <>
                                    <div className="question" key={item.question}>
                                        <h3>{item.question}</h3>
                                        <img
                                            src="https://images.unsplash.com/photo-1596495577886-d920f1fb7238?auto=format&fit=crop&w=800&q=60"
                                            alt="FAQ illustration"
                                            style={{ width: '100%', maxWidth: '400px', marginTop: '10px' }}
                                        />

                                    </div>

                                    <div className="answer" key={item.answer}>
                                        <p>{item.answer}</p>
                                    </div>
                                </>
                            )
                        })
                    }
                </div>

            </section>

        </>
    )
}

export default Faq
