import React from 'react'
import './css/Signin.css'
function signup() {
  return (
    <div className='main'>
    <div className='sub-main'>
      <form>
        <div>
          <h1>Sign in</h1>
          <div className='email'>
            <label><b>Email:</b></label>
            <input type='email' placeholder='Email' required className='input'></input>
          </div>
          <div className='pass'>
            <label><b>Password:</b></label>
            <input type='password' required className='input'></input>
          </div>
          <div >
            <button className='login-button'>Log in</button>
          </div>
          <div>
         <p className="link">
          <b> Don't have an account yet?</b><a href='nothing'>Register now</a> 
         </p>
      </div>
        </div>
      </form>
    </div>
  </div>     
  )
}

export default signup
