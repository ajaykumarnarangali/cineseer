import React from 'react'
import './css/Theatre.css'
import Seating from '../User_comp/Seating'
function Theatre() {
  return (
    <div className='thea_main'>
    <div className='thea_movie'>
     <h1 style={{margin:'85px 35px',fontSize:'50px'}}>MOVIE NAME</h1>
     <p className='thea_details'>Details</p>
    </div>
    <div className='thea_date'>
      Date
    </div>
    <div className='thea_seat'>
    <Seating/>
    </div>
    </div>
  )
}

export default Theatre
