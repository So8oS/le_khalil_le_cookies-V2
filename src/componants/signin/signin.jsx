import React from 'react'
import "./signin.css"
import { signInWithGooglePopup } from '../../firebase'
import { createUserDocumentFromAuth } from '../../firebase'

export const Signin = () => {
    const signInWithGoogle = async () => {
        const { user } = await signInWithGooglePopup();
        await createUserDocumentFromAuth(user);
      };



  return (
    <div className='Signin-container'>
        <form action="submit"></form>
        <div>
            <h1>Email</h1>
            <input type="email" />
        </div>

        <div>
            <h1>Password</h1>
            <input type="email" />
        </div>
        
        <button onClick={signInWithGoogle} >Sign In with Google</button>
    </div>
  )
}
