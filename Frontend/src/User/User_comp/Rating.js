import React from 'react'
import '../User_comp/css/Rating.css'
import Avatar from '../../Image/Avatar.jpg'
function Rating() {
  return (
    <div className='rate_main'>
      <div className='rate_submain'>
       <div className='rate_movie'>
        <img className='rate_image' src={Avatar} alt='nothing'></img>
       </div>
       <div style={{marginTop:'485px',marginLeft:'-331px'}}>
        <button className='rate_button'><b>Book Ticket</b></button>
       </div>
      </div> 
      <div className='rate_sec'>
       <div  className='rate_score'>
           <h1>predicted rating</h1>
       </div>
       <div  className='rate_score'>
         <h1>your score and user ratings</h1>
      </div>
      <div   className='rate_score'>
        <h1>synops</h1>
      </div>
      <div   className='rate_score'>
        <h1>details</h1>
      </div>
      </div> 
    </div>
  )
}

export default Rating
