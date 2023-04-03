import React from 'react'
import './css/Upcoming.css'
import Avatar from '../../Image/Avatar.jpg'
import {Link} from 'react-router-dom'
function Upcoming() {
  return (
    <div style={{display:'flex'}}>
     <div className="card">
      <div className='img_movie'>
      <Link to='/Ratings'>
  <img src={Avatar} alt="Avatar"  style={{display: 'flex', height: '300px',width: '240px',borderRadius:'20px 20px 0px 0px'}}/>
  </Link>
  </div>
  <div className="container">
    <h4><b>Movie name</b></h4>
    <Link to='/Theatredetails'> <button className='book'>Book Ticket</button></Link>
  </div>
</div>
<div className="card">
  <div className='img_movie'>
  <img src={Avatar} alt="Avatar"  style={{display: 'flex', height: '300px',width: '240px',borderRadius:'20px 20px 0px 0px'}}/>
  </div>
  <div className="container">
    <h4><b>Movie name</b></h4>
    <button className='book'>Book Ticket</button>
  </div>
</div>
</div>
  )
}

export default Upcoming
