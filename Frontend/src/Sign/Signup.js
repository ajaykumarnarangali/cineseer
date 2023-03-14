import React from 'react'
import '../Sign/css/Signup.css'
function signup() {
  return (
    <div className='main'>
    <div className='sub-main'>
      <form>
        <div>
          <h1>Sign in</h1>
          <div className='email'>
            <label><b>Email:</b></label>
            <input type='email' required className='input'></input>
          </div>
          <div className='pass'>
            <label><b>Password:</b></label>
            <input type='password' required className='input'></input>
          </div>
          <div className='pass'>
            <label><b>Re-enter:</b></label>
            <input type='password' required className='input'></input>
          </div>
          <div >
            <button className='login-button'>Sign up</button>
          </div>
        </div>
      </form>
    </div>
  </div>     
  )
}

export default signup
