import React from 'react'
import './css/User_head.css'
import Search from '../../Image/search.png'
function User_head() {
  return (
    <div className='head'>
      <div className='main'>
      <div className='search'>
      <input className='input_search' type="text" placeholder="Search..." />
      <button className='button' type="submit"><img src={Search} alt='button' className='image' /></button>
      </div>
      </div>
      <div className='location'>
      </div>
      <div>
      <button  className='sign'>Sign in</button>
      </div>
    </div>
  )
}

export default User_head

