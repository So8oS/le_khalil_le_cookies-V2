import React from 'react'
import "./contactus.css";
import { useRef } from 'react';
import emailjs from '@emailjs/browser';


export const Contactus = () => {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };
  
    return (
     <div className='contact-container'>
       <div className='contact-box'>
            <form ref={form} onSubmit={sendEmail}>
                <h1>Name</h1>
                <input type="text" name="user_name" />

                <h1>Email</h1>
                <input type="email" name="user_email" />
                <h1>Message</h1>
                <textarea name="message" />
                <input type="submit" value="Send" />
            </form>
        </div>  
     </div>   
    );
  };