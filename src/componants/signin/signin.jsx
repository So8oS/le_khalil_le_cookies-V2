import React,{useState} from 'react'
import signin  from "./signin.module.css"
import { 
    signInWithGooglePopup,
    createUserDocumentFromAuth,
    signInAuthUserWithEmailAndPassword
} from '../../firebase'




const defaultFormFields ={
   
    email:'',
    password:''
  }
  
export const Signin = ({formswitch}) => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { email, password } = formFields;
  
    const resetFormFields = () => {
      setFormFields(defaultFormFields);
    };
  
    const signInWithGoogle = async () => {
      const { user } = await signInWithGooglePopup();
      await createUserDocumentFromAuth(user);
    };
  
    const handleSubmit = async (event) => {
      event.preventDefault();
  
      try {
        const response = await signInAuthUserWithEmailAndPassword(
          email,
          password
        );
        console.log(response);
        resetFormFields();
      } catch (error) {
        switch (error.code) {
          case 'auth/wrong-password':
            alert('incorrect password for email');
            break;
          case 'auth/user-not-found':
            alert('no user associated with this email');
            break;
          default:
            console.log(error);
        }
      }
    };
  
    const handleChange = (event) => {
      const { name, value } = event.target;
  
      setFormFields({ ...formFields, [name]: value });
    };


  return (
   
    <div className={signin.container}>

        <div className={signin.title_container} >
            <h1  className={signin.title} >Sign in</h1></div>

        <form onSubmit={handleSubmit}className={signin.form}  >
            
            <div className={signin.form_info}>
    
                <div className={signin.form_input}>
                    <p className={signin.p}>Email:</p>
                    <input onChange={handleChange} className={signin.input} type="email" name="email" value={email} placeholder='Email' required />
                </div>

                <div className={signin.form_input}>
                    <p className={signin.p}>Password:</p>
                    <input onChange={handleChange} className={signin.input} type="password" name="password" value={password} placeholder='Password' required />
                </div>
            </div>
                
            <div className={signin.buttons}>
                <button type='submit' className={signin.button} >Sign in </button>
                <button type='button' className={signin.button} onClick={signInWithGoogle} >Sign in with google</button>
            </div>

        </form>
        <button onClick={formswitch} >Sign up</button>

    </div> 
  )
}
