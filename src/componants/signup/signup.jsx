import React from 'react'
import signup  from "./signup.module.css"
import { useState } from 'react'
import { createAuthUserWithEmailAndPassword,createUserDocumentFromAuth } from '../../firebase'

const defaultFormFields ={
  displayName: '',
  email:'',
  password:''
}


export const Signup = () => {

  const [formFirelds , setFormFields] = useState(defaultFormFields);
  const  {displayName,email,password} = formFirelds;
  
  const handleChange =(event) => {
    const {name , value} = event.target;
    setFormFields({...formFirelds,[name]: value})  
  }
  const resetFormFields = () =>{
    setFormFields(defaultFormFields)
  }
  
  const handleSubmit = async (event) =>{
    event.preventDefault();

    try{
      const {user} = await createAuthUserWithEmailAndPassword(email,password);
      await createUserDocumentFromAuth(user,{displayName})
      resetFormFields();
    }
    catch(error) {
      alert(error.code)
    }
  }



  return (
        <div className={signup.container}>
          <div className={signup.title_container} >
              <h1  className={signup.title} >Sign up</h1></div>

          <form className={signup.form} onSubmit={handleSubmit} >

              <div className={signup.form_info}>    
                <div className={signup.form_input}>
                  <p className={signup.p}>Name</p>
                  <input className={signup.input} onChange={handleChange} type="text" name="displayName" value={displayName} placeholder='Name' required />
                </div>

                  
                <div className={signup.form_input}>
                  <p className={signup.p}>Email:</p>
                  <input className={signup.input} onChange={handleChange}  type="email" name="email" value={email} placeholder='Email' required />
                </div>

                <div className={signup.form_input}>
                  <p className={signup.p}>Password:</p>
                  <input className={signup.input} onChange={handleChange} type="password" name="password" value={password}  placeholder='Password' required />
                </div>
              </div>
                  
              <div className={signup.buttons}>
                <button className={signup.button} >Sign up</button>
              </div>
              
          </form>

      </div> 

  )
}
