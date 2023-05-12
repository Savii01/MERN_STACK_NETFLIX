import React from 'react'
import './Register.scss'
import Logo from '../../images/MovieLogo.svg'
import { useState } from 'react'
import { useRef } from 'react'



const Register = () => {
    const[email, setEmail] = useState('')
    const[password, setPassword] = useState('')

    const emailRef = useRef()
    const passwordRef = useRef()

    const handleStart = ()=>{
        setEmail(emailRef.current.value)
    }

    const handleFinish = () => {
        setPassword(passwordRef.current.value)
    }

  return (
    <div className='register'>
      <div className="top">
        <div className="wrapper">
            <img src={Logo} alt="" className="logo" />
            <button className="loginBut">Sign In</button>
        </div>
      </div>
      <div className="containerReg">
        <h1>Unlimited movies, TV shows, and more.</h1>
        <h2>Watch anywhere. Cancel anytime.</h2>
        <p>
            Ready to watch? Enter your email to Create or restart your membership
        </p>
        {!email ?(
        <div className="inputs">
            <input type="email" placeholder='email address' ref={emailRef}/>
            <button className="registerButton" onClick={handleStart}>Get Started</button>
        </div>
        ) : (
            <form className="inputs">
                    <input type="password" placeholder='password' ref={passwordRef}/>
                    <button className="registerButton" onClick={handleFinish}>Start Membership</button>             
            </form>
        )}
      </div>
    </div>
  )
}

export default Register
