import React from 'react';
import './Contact.css'
const Contact = () => {
    return (
        <div className='contact text-center text-white'>
            <br /> <h1>Contact</h1> <hr />

            <hr />
            <div className='mx-md-auto text-center container'>
                <form >
                    <div className='form-group mt-2'>
                        <label htmlFor="Uname">User Name:</label>
                        <input type="text" className='form-control' name="" id="Uname" placeholder='Enter Name' />
                    </div>
                    <div className='form-group mt-2'>
                        <label htmlFor="email">Email:</label>
                        <input type="email" className='form-control' name="" id="email" placeholder='Enter Name' />
                    </div>
                    <div className='form-group mt-2'>
                        <label htmlFor="message">Message:</label>
                        <textarea className='form-control' name="" id="" placeholder='Message' cols="30" rows="10"></textarea>
                    </div>
                    <button type='button' className='btn mt-2'>Message Me</button>
                </form>
                
            </div>
        </div>
    );
};

export default Contact;