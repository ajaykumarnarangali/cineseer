import React from 'react'
import '../User_comp/css/Banner.css'
import Upcoming from './Upcoming'
function Banner() {
  return (
    <div className='Banner'>
      <div className='select'>
        <button className='buttons'>Now showing</button>
        <button className='buttons'>Coming soon</button>
      </div>
      <div className='lang'>
      <h1>Language</h1>
      </div>
      <div className='movies'>
      <h1 style={{marginLeft:'400px'}}>Movies in</h1>
      <Upcoming/>
      </div>
    </div>
  )
}

export default Banner
