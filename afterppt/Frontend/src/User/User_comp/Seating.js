import React from 'react'
import '../User_comp/css/Seating.css'
import {Link} from 'react-router-dom'

function Seating() {
  return (
    <div style={{flex:'1'}}>
    <div className='Seating_main'>
      <div className='Seating_name'>
        <span className='Seating_span'>Theatre name</span>
      </div>  
      <div className='Seating_time'>
        <Link to='/Ticketbooking'>
        <div className='Seating_a'>
        <span className='a_span'>time</span>
        </div >
        </Link>
        <div className='Seating_a'>
        <span className='a_span'>time</span>
        </div>
        <div className='Seating_a'>
        <span className='a_span'>time</span>
        </div>
      </div>    
    </div>
    <div className='Seating_main'>
      <div className='Seating_name'>
        <span className='Seating_span'>Theatre name</span>
      </div>  
      <div className='Seating_time'>
        <div className='Seating_a'>
        <span className='a_span'>time</span>
        </div>
      </div>    
    </div>
    </div>
  )
}

export default Seating
