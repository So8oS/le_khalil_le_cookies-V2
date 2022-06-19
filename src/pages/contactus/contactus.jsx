import React from 'react'
import "./contactus.css";
import { useRef } from 'react';
import emailjs from '@emailjs/browser';


export const Contactus = () => {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('gmail', 'template_3nth5o9', form.current, 'gCcVEYirrfV4fhGRt')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset();
        alert("the email has been sent");
    };
  
    return (
     <div className='contact-page'>
       <div className='contact-box'>
           <div className='title-box'>
                <h1 className='contact-title'>Contact us</h1>
           </div>
            <form className='form' ref={form} onSubmit={sendEmail}>
                <div className='form-info'>
                    <div className='form-input'>
                        <p className='p'>Name:</p>
                        <input className='contactus-input'type="text" name="user_name" placeholder='Name' required />
                    </div>
                    <div className='form-input'>

                        <p className='p'>Email:</p>
                        <input className='contactus-input' type="email" name="user_email" placeholder='Email' required />
                    </div>
                    <div className='form-input'>

                        <p className='p'>Message:</p>
                        <input className='contactus-input' name="message" placeholder='Message' required />
                    </div>

                </div>
                    
                
                <input className='submit' type="submit" value="Send" />
            </form>
        </div>  
     </div>   
    );
  };