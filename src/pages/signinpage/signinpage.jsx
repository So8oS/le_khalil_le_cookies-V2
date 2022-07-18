import React,{useState} from 'react'
import { Signin } from '../../componants/signin/signin'
import { Signup } from '../../componants/signup/signup'
import './signinpage.css'




export const Signinpage = () => {
  const [form ,setform] = useState('signin')

  const formswitch = () => {
      if(form ==="signin"){
        setform("signup")
        }
        if(form ==="signup"){
          setform("signin")
          }
      } 

  return (
    <div className='signinpage' >
      <div className='forms' >
        {form === "signin" && <Signin formswitch={formswitch}/>}
        {form === "signup" && <Signup formswitch={formswitch}/>}
      </div>
    </div>
  )
}
