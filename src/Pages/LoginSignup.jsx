import React from 'react'
import './CSS/Loginsignup.css'

export const LoginSignup = () => {
  return (
    <div className='loginsignup'>
        <div className='loginsignup-container'>
           <h1>Sign Up</h1>
           <div className='loginsignup-feild'>
              <input type='name' placeholder='Your Name'/>
              <input type='email' placeholder='Email Address'/>
              <input type='password' placeholder='Password'/>
           </div>
           <button>Continue</button>
           <p className='loginsignup-login'>Already have an account? <span>Login here</span></p>
           <div className='loginsignup=agree'>
              <input type='checkbox' name='' id=""/>
              <p>By continuing, i agree to the term of use & privacy policy.</p>
           </div>
        </div>
    </div>
  )
}
