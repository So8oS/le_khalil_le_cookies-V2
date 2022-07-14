import React from 'react'
import { Signin } from '../../componants/signin/signin'
import { Signup } from '../../componants/signup/signup'
import './signinpage.css'

export const Signinpage = () => {
  return (
    <div className='signinpage' >
      <div className='forms' >
        <Signin/>
        <Signup/>
      </div>
    </div>
  )
}
