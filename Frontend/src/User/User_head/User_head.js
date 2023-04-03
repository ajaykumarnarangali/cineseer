import React from 'react'
import './css/User_head.css'
import Search from '../../Image/search.png'
import {Link} from 'react-router-dom'
function User_head() {
  return (
    <div className='head'>
      <div className='head_main'>
      <div className='head_search'>
      <input className='input_search' type="text" placeholder="Search..." />
      <button className='button' type="submit"><img src={Search} alt='button' className='image' /></button>
      </div>
      </div>
      <div className='location'>
      </div>
      <div>
      <Link to='/Signin' > <button  className='sign'>Sign</button></Link> 
      </div>
    </div>
  )
}

export default User_head

