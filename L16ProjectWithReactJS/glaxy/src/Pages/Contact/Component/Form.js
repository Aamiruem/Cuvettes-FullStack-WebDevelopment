import React from 'react'

const Form = () => {
    return (
        <>
            <section className='container'>
            <h1 className='heading'>Contact Us</h1>
            <form>
                <input type="text" placeholder='Name' />
                <input type="text" placeholder='Email' />
                <input type="text" placeholder='Phone' />
                    <input type="text" placeholder='Message' />
                    <button className='btn'>Submit</button>
                </form>
                
                </section>   
        </>
    )
}

export default Form
