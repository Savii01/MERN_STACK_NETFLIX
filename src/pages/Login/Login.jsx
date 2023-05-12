import React from 'react'
import './Login.scss'
import Logo from '../../images/MovieLogo.svg'




const Login = () => {

  return (
    <div className='login'>
      <div className="top">
        <div className="wrapper">
            <img src={Logo} alt="" className="logo" />
        </div>
      </div>
      <div className="containerLog">
        <form>
            <h1>Sign In</h1>
            <input type="email" placeholder='Email or Phone number'/>
            <input type="password" placeholder='Password'/>
            <button className="loginButton">Sign In</button>
            <span>New to AnMovies? <b>Sign Up Now</b></span>
        </form>
      </div>

    </div>
  )
}

export default Login
